import '../styles/globals.css'
import { CounterProvider } from '../contexts/count'

function MyApp({ Component, pageProps }) {
  return (
    <CounterProvider >
      <Component {...pageProps} />
    </CounterProvider>
  )
}

export default MyApp
