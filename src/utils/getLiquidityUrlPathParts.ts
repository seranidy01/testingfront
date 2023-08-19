// Constructing the two forward-slash-separated parts of the 'Add Liquidity' URL
// Each part of the url represents a different side of the LP pair.
import { getNativeAddress } from './configHelpers'

const getLiquidityUrlPathParts = ({ quoteTokenAddress, tokenAddress }) => {
  const chainId = process.env.REACT_APP_CHAIN_ID
  const WPLSAddressString = getNativeAddress()
  const quoteTokenAddressString: string = quoteTokenAddress ? quoteTokenAddress[chainId] : null
  const tokenAddressString: string = tokenAddress ? tokenAddress[chainId] : null
  const firstPart =
    !quoteTokenAddressString || quoteTokenAddressString === WPLSAddressString ? 'PLS' : quoteTokenAddressString
  const secondPart = !tokenAddressString || tokenAddressString === WPLSAddressString ? 'PLS' : tokenAddressString
  return `${firstPart}/${secondPart}`
}

export default getLiquidityUrlPathParts
