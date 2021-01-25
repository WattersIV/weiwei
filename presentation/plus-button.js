import { Button } from '@material-ui/core'
import { useContext } from 'react'
import { CounterContext } from '../contexts/count'

export default function Plusbutton () {
  const {dispatch} = useContext(CounterContext)
  return (
    <Button variant='contained' color='primary' size='large' onClick={() => dispatch({type: 'Increment'})}>+</Button> 
  )
}