import React, { createContext, useReducer, useContext } from 'react'
import { initialState, reducer } from './reducer'

const stateCtx = createContext(initialState)
const dispatchCtx = createContext(() => 0)

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <dispatchCtx.Provider value={dispatch}>
      <stateCtx.Provider value={state}>{children}</stateCtx.Provider>
    </dispatchCtx.Provider>
  )
}

export const useDispatch = () => useContext(dispatchCtx)

export const useGlobalState = property => {
  const state = useContext(stateCtx)
  return state[property]
}
