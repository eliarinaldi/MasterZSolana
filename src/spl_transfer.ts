import { Keypair, Connection, PublicKey } from "@solana/web3.js";
import { getOrCreateAssociatedTokenAccount, transfer } from "@solana/spl-token";

import wallet from "./wallet.json";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const connection = new Connection("https://api.devnet.solana.com", "confirmed");
const mint = new PublicKey("71LkytM6Ftfm4sdqNw5Qrv8YnbDLBgBZGv4yPR3chyPa");
const fromAta = new PublicKey("HBaLdP24DKDWEDh5Z6tDt5iFnUHSYpsAy3MjE4wXpiF2");

const to = Keypair.generate();
console.log("To: ", to.publicKey.toBase58());

//Transferring tokens to new wallet
(async () => {

    const tokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        keypair,
        mint,
        to.publicKey,
    );

    const toAta = tokenAccount.address;
    console.log("Associated Token Account: ", toAta.toBase58());

    const amountToAta = tokenAccount.amount;
    console.log("Amount in ATA: ", amountToAta.toString());

    const amount = 10e6;

    await transfer(
        connection,
        keypair,
        fromAta,
        toAta,
        keypair,
        amount
    );

    console.log("Transferred: ", amount, "from", fromAta.toBase58(), "to", toAta.toBase58());
})()