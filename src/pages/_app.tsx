import MainContainer from '@components/MainContainer'
import '@styles'
import type { AppProps } from 'next/app'
import "regenerator-runtime"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainContainer>
      <Component {...pageProps} />
    </MainContainer>
  )
}
