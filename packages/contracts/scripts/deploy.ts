import { ethers, run, upgrades } from 'hardhat';

const mainnetFeed = '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419';
const mainnetUsdt = '0xdAC17F958D2ee523a2206206994597C13D831ec7';

const goerliFeed = '0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e';
const goerliUsdt = '0x509Ee0d083DdF8AC028f2a56731412edD63223B9';

const multiSig = '0x7D3de1950037B237965afFA3883beA329d109E97';
const multiSigTest = '0x70997970C51812dc3A010C7d01b50e0d17dc79C8';

async function main() {
  const chikaraPresale = await ethers.getContractFactory('TokenPresale');
  const instance = await upgrades.deployProxy(chikaraPresale, [
    mainnetFeed,
    mainnetUsdt,
    multiSigTest,
  ]);
  const blockTimeStamp = (await ethers.provider.getBlock('latest')).timestamp;
  const endDateTime = blockTimeStamp + 60 * 60 * 24 * 6;

  await instance.deployed();

  await chikaraPresale
    .attach(instance.address)
    .createPresale(
      blockTimeStamp,
      endDateTime,
      '10500000000000000',
      '7777777778',
      '1000000000000000000',
      1,
      1
    );

  console.log('ChikaraPresale deployed to:', instance.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
