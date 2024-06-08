import { Keypair, Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";

import wallet from "./wallet.json";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const connection = new Connection("https://api.devnet.solana.com", "confirmed");

//SOL airdrop request
(async () => {
    try {

        const airdropSignature = await connection.requestAirdrop(keypair.publicKey, 5 * LAMPORTS_PER_SOL);
        console.log(`TX: https://explorer.solana.com/tx/${airdropSignature}?cluster=devnet`);

    } catch (error) {
        console.error(error);
    }
})();