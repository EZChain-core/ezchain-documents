# Manage X-Chain Keys

EZChainJS comes with its own AVM Keychain. This KeyChain is used in the functions of the API, enabling them to sign using keys it’s registered. The first step in this process is to create an instance of EZChainJS connected to our EZChain platform endpoint of choice.

```ts
import {
  EZChain,
  BinTools,
  Buffer,
  BN
} from "ezchain" 

let bintools = BinTools.getInstance();

let myNetworkID = 12345; //default is 1, we want to override that for our local network
let myBlockchainID = "GJABrZ9A6UQFpwjPU8MDxDd8vuyRoDVeDAXc694wJ5t3zEkhU"; // The X-Chain blockchainID on this network
let ezc.= new ezchain.EZChain("localhost", 9650, "http", myNetworkID, myBlockchainID);
let xchain = ezc.XChain(); //returns a reference to the X-Chain used by EZChainJS
```

## Accessing the Keychain {#accessing-the-keychain}

The KeyChain is accessed through the X-Chain and can be referenced directly or through a reference variable.

```ts
let myKeychain = xchain.keyChain();
```

This exposes the instance of the class AVMKeyChain which is created when the X-Chain API is created. At present, this supports secp256k1 curve for ECDSA key pairs.

## Creating X-Chain Key Pairs {#creating-x-chain-key-pairs}

The KeyChain has the ability to create new KeyPairs for you and return the address associated with the key pair.

```ts
let newAddress1 = myKeychain.makeKey(); //returns a Buffer for the address
```

You may also import your existing private key into the KeyChain using either a Buffer…

```ts
let mypk = bintools.ezc.eserialize("24jUJ9vZexUM6expyMcT48LBx27k1m7xpraoV62oSQAHdziao5"); //returns a Buffer
let newAddress2 = myKeychain.importKey(mypk); //returns a Buffer for the address
```

… or an EZChain serialized string works, too:

```ts
let mypk = "24jUJ9vZexUM6expyMcT48LBx27k1m7xpraoV62oSQAHdziao5";
let newAddress2 = myKeychain.importKey(mypk); //returns a Buffer for the address
```

## Working with Keychains {#working-with-keychains}

The X-Chains’s KeyChain has standardized key management capabilities. The following functions are ezc.lable on any KeyChain that implements this interface.

```text
let addresses = myKeychain.getAddresses(); //returns an array of Buffers for the addresses
let addressStrings = myKeychain.getAddressStrings(); //returns an array of strings for the addresses
let exists = myKeychain.hasKey(newAddress1); //returns true if the address is managed
let keypair = myKeychain.getKey(newAddress1); //returns the KeyPair class
```

## Working with Keypairs {#working-with-keypairs}

The X-Chain’s KeyPair has standardized KeyPair functionality. The following operations are ezc.lable on any KeyPair that implements this interface.

```ts
let address = keypair.getAddress(); //returns Buffer
let addressString = keypair.getAddressString(); //returns string

let pubk = keypair.getPublicKey(); //returns Buffer
let pubkstr = keypair.getPublicKeyString(); //returns a CB58 encoded string

let privk = keypair.getPrivateKey(); //returns Buffer
let privkstr = keypair.getPrivateKeyString(); //returns a CB58 encoded string

keypair.generateKey(); //creates a new random KeyPair

let mypk = "24jUJ9vZexUM6expyMcT48LBx27k1m7xpraoV62oSQAHdziao5";
let successul = keypair.importKey(mypk); //returns boolean if private key imported successfully

let message = Buffer.from("Wubalubadubdub");
let signature = keypair.sign(message); //returns a Buffer with the signature

let signerPubk = keypair.recover(message, signature);
let isValid = keypair.verify(message, signature); //returns a boolean
```
