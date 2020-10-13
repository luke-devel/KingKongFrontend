import type { AppProps /*, AppContext */ } from 'next/app'
import '../styles/style.css'
import '../styles/style2.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
