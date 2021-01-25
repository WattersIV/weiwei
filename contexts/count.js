import React, {useReducer, createContext} from 'react'

const initialState = {
  counter: 0
} 

const reducer = (state, action) => {
  switch (action.type) {
    case 'Increment':
    return { 
      ...state,
       counter: state.counter + 1
    }
    case 'Decrement': 
    return { 
      ...state,
       counter: state.counter - 1
    }
    case 'Reset': 
    return { 
      ...state,
       counter: 0
    }
    default: 
    return state;
  }
}

export const CounterContext = createContext({
  state: initialState, 
  dispatch: () => {}
})

export function CounterProvider ({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState) 
  return (
  <CounterContext.Provider value={{ state, dispatch }} > 
    {children} 
  </CounterContext.Provider>
  )
}