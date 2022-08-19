
require("dotenv").config({ path: ".env" });
import { BytesLike } from "ethers";
import { ethers } from "hardhat";

async function main() {
0x6dE4aA9B7449Fa424ca69BBB3243364A4d2eBAF5
  const abiodunAwoyemi = await ethers.getContractFactory("AbiodunAwoyemi");
  const mint = await abiodunAwoyemi.attach("0x6dE4aA9B7449Fa424ca69BBB3243364A4d2eBAF5")


    const minted = await mint.safeMint("0x7A3E0DFf9B53fA0d3d1997903A48677399b22ce7", "https://gateway.pinata.cloud/ipfs/Qmav5akQh5ZzWZ1UKAQ66LaXZZFnYqC3GYw6xVVJiXfQfu");

    console.log("Minted NFT: ", minted);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// Transaction Hash on Rinkeby: 0xf7f21259f709beae17e30ab8579ca74ac2f34dffbf507d8eb2c8e6fc67e631b0