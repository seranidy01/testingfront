import tokens from './tokens'
import { FarmConfig } from '../types'

const farms: FarmConfig[] = [

  {
    pid: 0,
    lpSymbol: 'DAI',
    lpAddresses: {
      369: '',
      943: '0x6b175474e89094c44da98b954eedeac495271d0f',
    },
    token: tokens.pdai,
    quoteToken: tokens.wpls,
  },

  {
    pid: 1,
    lpSymbol: 'sDAI',
    lpAddresses: {
      369: '',
      943: '0x57a004dc1c6103c81068fe3ecccb89a039af6450',
    },
    token: tokens.sdai,
    quoteToken: tokens.wpls,
  },

  {
    pid: 2,
    lpSymbol: 'sDAI-pDAI',
    lpAddresses: {
      369: '',
      943: '0xc404581b8c6808849ab0952cc1a21af62865ddcb',
    },
    token: tokens.sdai,
    quoteToken: tokens.pdai,
  },

]

export default farms
