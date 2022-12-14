import React, { createContext, useState,useEffect } from 'react'

const ToastieContext = createContext()
const TestGame = ({children}) => {
  const [focus,setFocus]= useState(0)
  const [toastie,setToastie]= useState(false)//success
  const [hit,setHit] = useState(false)//nos indica si hitea o no
  const [index,setIndex] = useState(0);//sprites animacion
  const [score, setScore] = useState(0) //puntaje
  const [hiscore,setHiscore] = useState(localStorage.getItem('hiscore', Number)|| 0)
  const [level,setLevel] = useState(1)
  const [lvlBar,setLvlBar] = useState(24)
  const [timer,setTimer] = useState(5)
  const [msg,setmsg] =useState('...') 
 
  const context= {toastie,setToastie,
                  focus,setFocus,
                  hit,setHit,
                  index,setIndex,
                  score,setScore,
                  level, setLevel,
                  lvlBar,setLvlBar,
                timer,setTimer,
                  hiscore,setHiscore,
                msg,setmsg}

  
  useEffect(() => {
    if(score > hiscore){
      setHiscore(score);
    }
    localStorage.setItem('hiscore', hiscore);
    }, [score, hiscore])
  
  return (
    <ToastieContext.Provider value={context}>
      {children}
    </ToastieContext.Provider>
  )
}

export default TestGame
export {ToastieContext}