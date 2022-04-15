import { ethers } from "hardhat";

async function main() {

    const milkFactory = await ethers.getContractFactory("Milk");
    const milkContract = await milkFactory.deploy("Milk", "MILK", "0x1e8465BE11391c4b915f61121280F698AfdF485C");
    await milkContract.deployed();

    console.log("Milk contract deployed at: ", milkContract.address);
    
    const itemFactory = await ethers.getContractFactory("ItemFactory");
    const itemContract = await itemFactory.deploy("https://milk.com/ipfs/", milkContract.address);
    await itemContract.deployed();

    console.log("itemFactory contract deployed at: ", itemContract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });