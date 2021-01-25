import Head from 'next/head'
import styles from '../styles/Home.module.css' 
import Minusbutton from '../presentation/minus-button'
import Plusbutton from '../presentation/plus-button'
import Resetbutton from '../presentation/reset-button'
import { useContext } from 'react' 
import { CounterContext } from '../contexts/count'

export default function Home() {
  const { state } = useContext(CounterContext)
  return (
    <div className={styles.container}>
      <Head>
        <title>Title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Plusbutton /> 
        {state.counter}
      <Minusbutton /> 
      <Resetbutton />
    </div>
  )
}
