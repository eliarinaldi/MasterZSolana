import { Keypair } from "@solana/web3.js";

//Generating new keypair
const keypair = Keypair.generate();

console.log("Public Key: ", keypair.publicKey.toBase58());
console.log("Private Key: ", keypair.secretKey.toString());