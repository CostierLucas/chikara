import { ethers, run, upgrades } from 'hardhat';

async function main() {
  const chikaraPresale = await ethers.getContractFactory('TokenPresale');
  const instance = await upgrades.deployProxy(chikaraPresale, [
    '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419',
    '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  ]);
  const blockTimeStamp = (await ethers.provider.getBlock('latest')).timestamp;
  const endDateTime = blockTimeStamp + 60 * 60 * 24 * 7;

  await instance.deployed();

  await chikaraPresale
    .attach(instance.address)
    .createPresale(
      blockTimeStamp,
      endDateTime,
      '10500000000000000',
      10000000,
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
