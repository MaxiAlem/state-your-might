import React, { createContext, useState } from 'react'

const ToastieContext = createContext()
const TestGame = ({children}) => {
  const [focus,setFocus]= useState(0)
  const [toastie,setToastie]= useState(false)//nos indica si hitea o no
  const context= {toastie,setToastie,focus,setFocus}
  return (
    <ToastieContext.Provider value={context}>
      {children}
    </ToastieContext.Provider>
  )
}

export default TestGame
export {ToastieContext}