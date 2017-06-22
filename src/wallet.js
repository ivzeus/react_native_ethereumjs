const EtherWallet = require('ethereumjs-wallet');

module.exports = function() {
    return EtherWallet.generate().getPrivateKeyString();
}