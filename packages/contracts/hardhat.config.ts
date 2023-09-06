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
      url: 'https://eth-goerli.g.alchemy.com/v2/Gfs_EBL4dk84SzNvVXCCu0TvrntC-fwG'
    },
    mainnet: {
      url: 'https://eth-mainnet.g.alchemy.com/v2/SG8sbrNEK-FIi3MuEhAnAbUzgUoueexE'
    },
  },
};

export default config;
