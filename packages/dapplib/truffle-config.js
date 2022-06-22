require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict process broken skull stone note soap around gloom drop sword tube'; 
let testAccounts = [
"0x483d6b116a23c983b548e432fa5ecc1c2838c196335acc0c219a9bbb294081fc",
"0x0b1a26fe17e5ae0aceb11d89331f457ac1eebee6f4571228f7260426fff439eb",
"0x921b593ac0a1a9a6521166674aee21d68e34dcaabc6e78d08193bed5566c1e25",
"0x943d83b0f4925736eb47decac9a9c1ed61209d43602d464d3875dae6f63e9f99",
"0x3e810ecb6b9db5c6d7d60b11c66d6f25c1d53a3f6c22b192b24fcb6d0ba52b95",
"0xfd4eeaefc8d0b49dd64c5ffd6b30d236dfafd09cac8098e701e83e1476b767da",
"0x1f152aee7f547db82aaa0548129c9d464d9ffb037b3f7cda6889e8e520b5dba0",
"0xf842a15c9ed42894c8019433fb357e871d09c2aae7466f908f22991261f6f54f",
"0xca2683b607551585e8f0a72c731b4ea71789dc34fecfdccf0fb8f74d7528916a",
"0x00a23029db3419e04da11957a992fc18bc06d1752a4d55a01119e9b2e07b9096"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

