import cardsData from './cards.json';

/* eslint-disable import/prefer-default-export */

export const network = {
  1: {
    default: true, // It will be used when no metaMask
    name: 'Main Ethereum Network',
    contract: '0xd0792ac0de7ef31197c5f452b21a34389ecc725f',
    convert: '',
    luckyPackage: '',
    rpc: 'https://mainnet.infura.io/lTETGFVyQX99UKQ98BN4',
  },
  2: {
    name: 'Morden Test Network',
    contract: '',
  },
  3: {
    default: true, // It will be used when no metaMask
    name: 'Ropsten Test Network',
    contract: '0xD62ccC23C5e1Db41C017913303bdB09e570284f6',
    convert: '0xE3F437609E97246734aa6A550E407E14dB2f53b1',
    luckyPackage: '0xDC060a83C8A81a029676e85DEe8c0D090b52F2dD',
    DecentralizedExchangeHotPotato: '0x4a11d94715194d602f9ec570e446e33bf9e41fed',
    rpc: 'https://ropsten.infura.io/lTETGFVyQX99UKQ98BN4',
  },
  4: {
    name: 'Rinkeby Test Network',
    contract: '',
    rpc: 'https://rinkeby.infura.io/lTETGFVyQX99UKQ98BN4',
  },
  42: {
    name: 'Kovan Test Network',
    contract: '0x39e936c591c1990b48d716933b5017e1c09d5327',
    LuckyPackage: '0x929cc163230081ff517ccc3932c9fd70d00aaccb',
    Convert: '0xb55edc9c72d56447d6d1ea2476bcb42e74df16cf',
    DecentralizedExchangeHotPotato: '0xac7e1a3263e06329eee8ac5b45f3ac2223119779',
    rpc: 'https://kovan.infura.io/lTETGFVyQX99UKQ98BN4',
  },
};

export const defaultNetwork = Object.values(network).find(net => net.default);

export const cards = cardsData;

export const i18n = [
  {
    langDisplay: '中文',
    locale: 'zh',
    aliases: ['zh', 'zh-cn', 'zh-hk', 'zh-sg', 'zh-tw'],
  },
  {
    langDisplay: 'English',
    locale: 'en',
    aliases: ['en', 'en-us', 'en-au', 'en-bz', 'en-ca', 'en-ie', 'en-jm', 'en-nz', 'en-ph', 'en-za', 'en-tt', 'en-gb', 'en-zw'],
  },
  {
    langDisplay: '日本語',
    locale: 'jp',
    aliases: ['jp', 'ja', 'ja-jp'],
  },
];