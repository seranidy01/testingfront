import tokens from './tokens'
import { PoolConfig, PoolCategory } from '../types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.pdai,
    earningToken: tokens.pdai,
    contractAddress: { // MASTERCHEF
      369: '0xc68EBda1403854c993AF8C4982fBf17b3f7860dB',
      943: '0xc68EBda1403854c993AF8C4982fBf17b3f7860dB'
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '16',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools