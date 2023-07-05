import { HardhatUserConfig } from 'hardhat/config';
import '@openzeppelin/hardhat-upgrades';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-etherscan';

const config: HardhatUserConfig = {
  solidity: '0.8.19',
  networks: {
    hardhat: {
      forking: {
        url: 'https://eth-mainnet.g.alchemy.com/v2/fmEJ3fFImEj9GkT4ezNuhCWPJGjItabq',
      },
    },
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/Gfs_EBL4dk84SzNvVXCCu0TvrntC-fwG',
      accounts: [
        '9d10ce0ae208c1b83dbb46d8f0149cddf5aea05616958f4d616b75637af77ca9',
      ],
    },
    mainnet: {
      url: 'https://eth-mainnet.g.alchemy.com/v2/SG8sbrNEK-FIi3MuEhAnAbUzgUoueexE',
      accounts: [
        'add94d36d64d87316eafe8e52a9d8e0f5754bb9d92b1ae9c9fa9e9b0a471f7fd',
      ],
    },
  },
  etherscan: {
    apiKey: 'RIWTSE5WFK3QXFN254IIQ5PF3AF9TXA28G',
  },
};

export default config;
