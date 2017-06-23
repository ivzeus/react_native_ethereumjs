const crypto = require('crypto');
const EtherWallet = require('ethereumjs-wallet');

class Wallet {
    constructor()   {

    }

    generatePrivateKey(option)   {
        return EtherWallet.generate(option).getPrivateKeyString();
    }

    addressFromPrivateKey(privKey)  {

    }
}

const etherWallet = new Wallet();
export default etherWallet;