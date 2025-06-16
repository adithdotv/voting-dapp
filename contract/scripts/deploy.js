const { ethers } = require("hardhat");

async function main() {
  const Voting = await ethers.getContractFactory("Voting");
  const voting = await Voting.deploy(["Alice", "Bob", "Charlie"]);
  await voting.waitForDeployment();
  const address = await voting.getAddress()
  console.log("Voting contract deployed to:", address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
