import { Keypair, Connection } from "@solana/web3.js";
import { createMint } from "@solana/spl-token";
import wallet from "./wallet.json";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const connection = new Connection("https://api.devnet.solana.com", "confirmed");

//Creating mint
(async () => {
    const mint = await createMint(
        connection,
        keypair,
        keypair.publicKey,
        null,
        5
    );

    console.log("Mint address: ", mint.toBase58())
})();