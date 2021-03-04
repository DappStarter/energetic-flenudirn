require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace industry frame solution firm cruise million proud hockey clock outer silver'; 
let testAccounts = [
"0xc8850afbac9af1563a37c206a2b2de9135edd7835ca28874af98dbe6e32d11de",
"0x80cc0b3ccbd9355527e05a451d25b464d79d6cc2216ea1a412c3ef4841c7dfd4",
"0x46ad659c23911ce3fa7126c5d8479035a8a5ad7214d9649bab23ce4fec5bdfe7",
"0x7bd7e1272b7dd58a2c2879814385512e78ba96b4c7a6a6b9c6fc0c21f3d2f8b6",
"0x62e97c7e904a21cafad62eb40ccaa5df79472ab861fb23738bfdcbaeaf4ec3eb",
"0xaeefd3cfcddefda7cab214c570b001d748df5365073f1aeed88a3e7415abf693",
"0xdeb41ec83aa968b208dee81350a3ad1494ed058b424ad568efda7a9cf2216473",
"0xc6c3164b5c570297a3574e7ce673334f419f2ad099fc7aea2e0520212a613051",
"0xce7a6e19d8cf3143a8a29f24e1b2efa57eb64667992ca7fabf3ded04e7653773",
"0xbb7e1ee44da297aa3da5682820853122de22c581fd4a17c0ccb2d99b9129bc5e"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
