import React, { createContext, useState } from 'react'

const ToastieContext = createContext()
const TestGame = ({children}) => {
  const [focus,setFocus]= useState(0)
  const [toastie,setToastie]= useState(false)//success
  const [hit,setHit] = useState(false)//nos indica si hitea o no
  const [index,setIndex] = useState(0);//sprites animacion
  const [points, setPoints] = useState(0) //puntaje
  const [level,setLevel] = useState(1)
  const [lvlBar,setLvlBar] = useState(24)
  const [timer,setTimer] = useState(5) 
 
  const context= {toastie,setToastie,
                  focus,setFocus,
                  hit,setHit,
                  index,setIndex,
                  points,setPoints,
                  level, setLevel,
                  lvlBar,setLvlBar,
                timer,setTimer}
  return (
    <ToastieContext.Provider value={context}>
      {children}
    </ToastieContext.Provider>
  )
}

export default TestGame
export {ToastieContext}