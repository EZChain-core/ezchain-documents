import { ethers } from "hardhat";
import * as dotenv from "dotenv";
import { SignerWithAddress } from "hardhat-deploy-ethers/src/signers";
import { BigNumber } from "ethers";
import { Swapper, IWEZC } from "../typechain";
import { expect } from "chai";

dotenv.config();

const WEZC_ADDRESS: string = process.env.WEZC_ADDRESS as string;
const EZCHAIN_NODE_URL: string = process.env.EZCHAIN_MAINNET_URL as string;
const PNG_ADDRESS = "0x60781C2586D68229fde47564546784ab3fACA982"

describe("Swappity swap",  () => {

    let swapper: Swapper;
    let account1: SignerWithAddress;

    beforeEach(async (): Promise<any> => {
        await ethers.provider.send(
            "hardhat_reset",
            [
                {
                    forking: {
                        jsonRpcUrl: EZCHAIN_NODE_URL,
                        blockNumber: 2975762,
                    },
                },
            ],
        );

        let accounts = await ethers.getSigners()

        // @ts-ignore
        account1 = accounts[0]

        // Here we get the factory for our Swapper contrat and we deploy it on the forked network
        const swapperFactory = await ethers.getContractFactory("Swapper")
        swapper = await swapperFactory.deploy(process.env.WEZC_ADDRESS as string, "0xE54Ca86531e17Ef3616d22Ca28b0D458b6C89106");
    });

    it("should swap wezc for png", async (): Promise<any> => {

        // We get an instance of the wezc contract
        const wezcTokenContract = await ethers.getContractAt("IWEZC", WEZC_ADDRESS)
        // @ts-ignore
        const pngTokenContract = await ethers.getContractAt("IWEZC", PNG_ADDRESS)
        //makes sure owner has enough WEZC balance
        if ((await wezcTokenContract.balanceOf(account1.address)).lt("1000000000000000000000")) {
            await wezcTokenContract.deposit({
                value: BigNumber.from("1000000000000000000000")
                    .sub(await wezcTokenContract.balanceOf(account1.address))
            })
        }

        // We tell Wezc contract that we are cool with Swapper contract using our Wezc on our behalve
        await wezcTokenContract.approve(swapper.address, ethers.constants.MaxUint256);

        // Check balance before the swap
        const wezcBalanceBefore = await wezcTokenContract.balanceOf(account1.address);
        const pngBalanceBefore = await pngTokenContract.balanceOf(account1.address);

        expect(wezcBalanceBefore).eq("1000000000000000000000");
        expect(pngBalanceBefore).eq(0);

        // We call Swapper contract to make a swap from Wezc to Png. I chose some weird values for the swap cause it's just for the sack of this tutorial.
        await swapper.swap(100, [WEZC_ADDRESS, PNG_ADDRESS], "0xd7538cABBf8605BdE1f4901B47B8D42c61DE0367", 1000000000, 1807909162115);

        // Check balance after
        const wezcBalanceAfter = await wezcTokenContract.balanceOf(account1.address);
        const pngBalanceAfter = await pngTokenContract.balanceOf(account1.address);

        expect(wezcBalanceAfter).lt(wezcBalanceBefore);
        expect(pngBalanceAfter).gt(pngBalanceBefore);
    });
});
