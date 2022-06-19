import React from 'react'
import { TokenPairImage, ImageProps } from 'ntfuikit2'
import { mainnetTokens } from 'config/constants/tokens'

const CakeVaultTokenPairImage: React.FC<Omit<ImageProps, 'src'>> = (props) => {
  const primaryTokenSrc = `/images/tokens/${mainnetTokens.cake.address}.png`

  return <TokenPairImage primarySrc={primaryTokenSrc} secondarySrc="/images/tokens/autorenew.svg" {...props} />
}

export default CakeVaultTokenPairImage
