// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";


contract ChikaraPresale is Initializable, ReentrancyGuardUpgradeable, OwnableUpgradeable {
    uint256 public presaleId; 
    uint256 public BASE_MULTIPLIER; 
    uint256 public MONTH; 
    bool public isClaimAllowed;
    uint256 public amountCollectedInUsdt;
    uint256 public amountCollectedInEth;
    address multisigAddress;

    struct Presale {
        address saleToken;
        uint256 startTime;
        uint256 endTime;
        uint256 price;
        uint256 tokensToSell;
        uint256 baseDecimals;
        uint256 inSale;
        uint256 enableBuyWithEth;
        uint256 enableBuyWithUsdt;
    }

    IERC20Upgradeable public USDTInterface;
    AggregatorV3Interface internal aggregatorInterface; // https://docs.chain.link/docs/ethereum-addresses/ => (ETH / USD)

    mapping(uint256 => bool) public paused;
    mapping(uint256 => Presale) public presale;
    mapping(address => uint256) public userTokens;

    event PresaleCreated(
        uint256 indexed _id,
        uint256 _totalTokens,
        uint256 _startTime,
        uint256 _endTime,
        uint256 enableBuyWithEth,
        uint256 enableBuyWithUsdt
    );

    event PresaleUpdated(
        bytes32 indexed key,
        uint256 prevValue,
        uint256 newValue,
        uint256 timestamp
    );

    event TokensBought(
        address indexed user,
        uint256 indexed id,
        address indexed purchaseToken,
        uint256 tokensBought,
        uint256 amountPaid,
        uint256 timestamp
    );

    event TokensClaimed(
        address indexed user,
        uint256 indexed id,
        uint256 amount,
        uint256 timestamp
    );

    event PresaleTokenAddressUpdated(
        address indexed prevValue,
        address indexed newValue,
        uint256 timestamp
    );

    event PresalePaused(uint256 indexed id, uint256 timestamp);
    event PresaleUnpaused(uint256 indexed id, uint256 timestamp);

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() initializer {}

    /**
     * @dev Initializes the contract and sets key parameters
     * @param _oracle Oracle contract to fetch ETH/USDT price
     * @param _usdt USDT token contract address
     * @param _multisig Multisig address to receive the funds
     */
    function initialize(address _oracle, address _usdt, address _multisig) external initializer {
        require(_oracle != address(0), "Zero aggregator address");
        require(_usdt != address(0), "Zero USDT address");
        __Ownable_init_unchained();
        __ReentrancyGuard_init_unchained();
        aggregatorInterface = AggregatorV3Interface(_oracle);
        USDTInterface = IERC20Upgradeable(_usdt);
        multisigAddress = _multisig;
        BASE_MULTIPLIER = (10**18);
        MONTH = (30 * 24 * 3600);
    }

    modifier checkPresaleId(uint256 _id) {
        require(_id > 0 && _id <= presaleId, "Invalid presale id");
        _;
    }

    modifier checkSaleState(uint256 _id, uint256 amount) {
        require(
            block.timestamp >= presale[_id].startTime &&
                block.timestamp <= presale[_id].endTime,
            "Invalid time for buying"
        );
        require(
            amount > 0 && amount <= presale[_id].inSale,
            "Invalid sale amount"
        );
        _;
    }

    /**
     * @dev Creates a new presale
     * @param _startTime start time of the sale
     * @param _endTime end time of the sale
     * @param _price Per token price multiplied by (10**18)
     * @param _tokensToSell No of tokens to sell without denomination. If 1 million tokens to be sold then - 1_000_000 has to be passed
     * @param _baseDecimals No of decimals for the token. (10**18), for 18 decimal token
     * @param _enableBuyWithEth Enable/Disable buy of tokens with ETH
     * @param _enableBuyWithUsdt Enable/Disable buy of tokens with USDT
     */
    function createPresale(
        uint256 _startTime,
        uint256 _endTime,
        uint256 _price,
        uint256 _tokensToSell,
        uint256 _baseDecimals,
        uint256 _enableBuyWithEth,
        uint256 _enableBuyWithUsdt
    ) external onlyOwner {
        require(_price > 0, "Zero price");
        require(_tokensToSell > 0, "Zero tokens to sell");
        require(_baseDecimals > 0, "Zero decimals for the token");
        presaleId++;

        presale[presaleId] = Presale(
            address(0),
            _startTime,
            _endTime,
            _price,
            _tokensToSell,
            _baseDecimals,
            _tokensToSell,
            _enableBuyWithEth,
            _enableBuyWithUsdt
        );

        emit PresaleCreated(presaleId, _tokensToSell, _startTime, _endTime, _enableBuyWithEth, _enableBuyWithUsdt);
    }

    /**
     * @dev change infos of the presale
     * @param _id Presale id
     * @param _tokensToSell No of tokens to sell
     * @param _price Per token price
     * @param _startTime New start time
     * @param _endTime New end time
     */
    function changeInfosRoundPresale(
       uint256 _id,
       uint256 _tokensToSell,
       uint256 _price,
       uint256 _startTime,
       uint256 _endTime
    ) external onlyOwner {
        require(_price > 0, "Zero price");
        require(_tokensToSell > 0, "Zero tokens to sell");
    
        presale[_id].tokensToSell = _tokensToSell;
        presale[_id].price = _price;
        presale[_id].startTime = _startTime;
        presale[_id].endTime = _endTime;
    }

    /**
     * @dev To update the sale token address
     * @param _id Presale id to update
     * @param _newAddress Sale token address
     */
    function changeSaleTokenAddress(uint256 _id, address _newAddress)
        external
        checkPresaleId(_id)
        onlyOwner
    {
        require(_newAddress != address(0), "Zero token address");
        address prevValue = presale[_id].saleToken;
        presale[_id].saleToken = _newAddress;
        emit PresaleTokenAddressUpdated(
            prevValue,
            _newAddress,
            block.timestamp
        );
    }

    /**
     * @dev To update possibility to buy with ETH
     * @param _id Presale id to update
     * @param _enableToBuyWithEth New value of enable to buy with ETH
     */
    function changeEnableBuyWithEth(uint256 _id, uint256 _enableToBuyWithEth)
        external
        checkPresaleId(_id)
        onlyOwner
    {
        uint256 prevValue = presale[_id].enableBuyWithEth;
        presale[_id].enableBuyWithEth = _enableToBuyWithEth;
        emit PresaleUpdated(
            bytes32("ENABLE_BUY_WITH_ETH"),
            prevValue,
            _enableToBuyWithEth,
            block.timestamp
        );
    }

    /**
     * @dev To update possibility to buy with Usdt
     * @param _id Presale id to update
     * @param _enableToBuyWithUsdt New value of enable to buy with Usdt
     */
    function changeEnableBuyWithUsdt(uint256 _id, uint256 _enableToBuyWithUsdt)
        external
        checkPresaleId(_id)
        onlyOwner
    {
        uint256 prevValue = presale[_id].enableBuyWithUsdt;
        presale[_id].enableBuyWithUsdt = _enableToBuyWithUsdt;
        emit PresaleUpdated(
            bytes32("ENABLE_BUY_WITH_USDT"),
            prevValue,
            _enableToBuyWithUsdt,
            block.timestamp
        );
    }

    /**
     * @dev get the presale info
     * @param _id Presale id
     */
    function getPresaleInfo (uint256 _id) external view returns (Presale memory) {
        return presale[_id];
    }

    /**
     * @dev get end time of the presale
     * @param _id Presale id
     */
    function getEndTime(uint256 _id) external view returns (uint256) {
        return presale[_id].endTime;
    }

    /**
     * @dev To pause the presale
     * @param _id Presale id to update
     */
    function pausePresale(uint256 _id) external checkPresaleId(_id) onlyOwner {
        require(!paused[_id], "Already paused");
        paused[_id] = true;
        emit PresalePaused(_id, block.timestamp);
    }

    /**
     * @dev To unpause the presale
     * @param _id Presale id to update
     */
    function unPausePresale(uint256 _id)
        external
        checkPresaleId(_id)
        onlyOwner
    {
        require(paused[_id], "Not paused");
        paused[_id] = false;
        emit PresaleUnpaused(_id, block.timestamp);
    }

    /**
     * @dev To get latest ethereum price in 10**18 format
     */
    function getLatestPrice() public view returns (uint256) {
        (, int256 price, , , ) = aggregatorInterface.latestRoundData();
        price = (price * (10**10));
        return uint256(price);
    }

    /**
     * @dev To get value in USDT
     */
    function getValueInUSDT() public view returns (uint256) {
        (, int256 price, , , ) = aggregatorInterface.latestRoundData();
        return uint256 (price * (1**10));
    }

    /**
     * @dev To get USDT balance of the contract
     */
    function getTotalInUSDT() public view returns (uint256) {
        uint256 valuePrice = getValueInUSDT();
        uint256 amountInDollars = (amountCollectedInEth * valuePrice) / (10**18);
        uint256 total = amountCollectedInUsdt + amountInDollars;
        return total;
    }

    /**
     * @dev To buy into a presale using USDT
     * @param _id Presale id
     * @param amount No of tokens to buy
     */
    function buyWithUSDT(uint256 _id, uint256 amount)
        external
        checkPresaleId(_id)
        checkSaleState(_id, amount)
        returns (bool)
    {
        require(!paused[_id], "Presale paused");
        require(presale[_id].enableBuyWithUsdt > 0, "Not allowed to buy with USDT");
        uint256 usdPrice = amount * presale[_id].price;
        usdPrice = usdPrice / (10**12);
        presale[_id].inSale -= amount;

        Presale memory _presale = presale[_id];

        userTokens[msg.sender] += (amount * _presale.baseDecimals);

        uint256 ourAllowance = USDTInterface.allowance(
            msg.sender,
            address(this)
        );
        require(usdPrice <= ourAllowance, "Make sure to add enough allowance");
        (bool success, ) = address(USDTInterface).call(
            abi.encodeWithSignature(
                "transferFrom(address,address,uint256)",
                msg.sender,
                multisigAddress,
                usdPrice
            )
        );
        require(success, "Token payment failed");

        amountCollectedInUsdt += usdPrice;
        emit TokensBought(
            msg.sender,
            _id,
            address(USDTInterface),
            amount,
            usdPrice,
            block.timestamp
        );
        return true;
    }

    /**
     * @dev To buy into a presale using ETH
     * @param _id Presale id
     * @param amount No of tokens to buy
     */
    function buyWithEth(uint256 _id, uint256 amount)
        external
        payable
        checkPresaleId(_id)
        checkSaleState(_id, amount)
        nonReentrant
        returns (bool)
    {
        require(!paused[_id], "Presale paused");
        require(presale[_id].enableBuyWithEth > 0, "Not allowed to buy with ETH");
        uint256 usdPrice = amount * presale[_id].price;
        uint256 ethAmount = (usdPrice * BASE_MULTIPLIER) / getLatestPrice();
        require(msg.value >= ethAmount, "Less payment");
        uint256 excess = msg.value - ethAmount;
        presale[_id].inSale -= amount;
        Presale memory _presale = presale[_id];

        userTokens[msg.sender] += (amount * _presale.baseDecimals);

        sendValue(payable(multisigAddress), ethAmount);
        if (excess > 0) sendValue(payable(msg.sender), excess);
        amountCollectedInEth += ethAmount;
        emit TokensBought(
            msg.sender,
            _id,
            address(0),
            amount,
            ethAmount,
            block.timestamp
        );
        return true;
    }

    /**
     * @dev Helper funtion to get ETH price for given amount
     * @param _id Presale id
     * @param amount No of tokens to buy
     */
    function ethBuyHelper(uint256 _id, uint256 amount)
        external
        view
        checkPresaleId(_id)
        returns (uint256 ethAmount)
    {
        uint256 usdPrice = amount * presale[_id].price;
        ethAmount = (usdPrice * BASE_MULTIPLIER) / getLatestPrice();
    }

    /**
     * @dev Helper funtion to get USDT price for given amount
     * @param _id Presale id
     * @param amount No of tokens to buy
     */
    function usdtBuyHelper(uint256 _id, uint256 amount)
        external
        view
        checkPresaleId(_id)
        returns (uint256 usdPrice)
    {
        usdPrice = amount * presale[_id].price;
        usdPrice = usdPrice / (10**12);
    }

    function sendValue(address payable recipient, uint256 amount) internal {
        require(address(this).balance >= amount, "Low balance");
        (bool success, ) = recipient.call{value: amount}("");
        require(success, "ETH Payment failed");
    }

    /**
     * @dev Helper funtion to get claimable tokens for a given presale.
     * @param user User address
     * @param _id Presale id
     */
    function claimableAmount(address user, uint256 _id)
        public
        view
        checkPresaleId(_id)
        returns (uint256)
    {
        require(isClaimAllowed, "Claim not allowed");
        uint256 amountToClaim = userTokens[user];
        return amountToClaim;
    }

    /**
     * @dev To claim tokens
     * @param _id Presale id
     */
    function claim(uint256 _id) external returns (bool) {
        uint256 amount = claimableAmount(msg.sender, _id); 
        require(isClaimAllowed, "Claim not allowed");
        require(amount > 0, "Zero claim amount");
        require(
            presale[_id].saleToken != address(0),
            "Presale token address not set"
        );
        require(
            amount <=
                IERC20Upgradeable(presale[_id].saleToken).balanceOf(
                    address(this)
                ),
            "Not enough tokens in the contract"
        );
        userTokens[msg.sender] -= amount;
        bool status = IERC20Upgradeable(presale[_id].saleToken).transfer(
            msg.sender,
            amount
        );
        require(status, "Token transfer failed");
        emit TokensClaimed(msg.sender, _id, amount, block.timestamp);
        return true;
    }
}