import { Button } from '@material-ui/core'
import { CounterContext } from '../contexts/count'
import { useContext } from 'react'

export default function Resetbutton () {
  const { dispatch } = useContext(CounterContext) 
  return (
    <Button variant='contained' color='secondary' size='large' onClick={() => dispatch({type: 'Reset'})}>Reset</Button> 
  )
}