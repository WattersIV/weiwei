import { Button } from '@material-ui/core'
import { CounterContext } from '../contexts/count'
import { useContext } from 'react'

const handleClick = ({counter}, dispatch) => {
  console.log(counter)
  if (counter > 0) {
    dispatch({type: 'Decrement'})
  }
}
export default function Minusbutton () {
  const { state, dispatch } = useContext(CounterContext)
  return (
  <Button variant='contained' color='primary' size='large' onClick={() => handleClick(state, dispatch)} >-</Button> 
  )
}
