import '@/styles/globals.css'
// import '@/../pages/comp/Header/Header.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
