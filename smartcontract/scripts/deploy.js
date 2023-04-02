
const hre = require("hardhat");

async function main() {


  const Paypal = await hre.ethers.getContractFactory("Paypal");
  const paypal = await Paypal.deploy("");

  await paypal.deployed();

  console.log(
    console.log("Paypal deployed tp: ",paypal.address)
  );
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
//0x6960d0476d4155230E5BD2d64E4a10ba1882a60E
