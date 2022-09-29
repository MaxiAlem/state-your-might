import React, { useState, useContext,useEffect } from 'react'
import useInterval from '../hooks/useInterval'

import { ToastieContext } from './TestGame'


const Botones = () => {
  
  const {toastie,setToastie,
    focus,setFocus,
    hit,setHit,
    setIndex,
    points,setPoints,
    level,setLevel,
    lvlBar,setLvlBar,
  timer, setTimer } = useContext(ToastieContext)  
    const [msg,setmsg] =useState('...')
    const [disable,setDisable] = useState(false)
    const [nameBtn,setNameBtn] =useState('SLAM Dat Bitch')
    const [hidden, setHidden] = useState(true)
    const [next,setNext] = useState('next')
    const [timeStarted, setTimeStarted] = useState(false);
    
    let time = 0
    
const hitBtn =()=>{

    if(focus >lvlBar) {
      setmsg('Toasty!');
      setToastie(true)      
      setPoints(points +(100*level))
         
     
    }
    else {
      setmsg('dont make me laugh');
      setNext('retry?')
      //retry
  };
  setHit(true);
  setDisable(true);
  setTimeout(() => {
          setNameBtn('=>');
          setHidden(false)
        }, 1000); 
  setTimeStarted(false)

}
const focusBtn = ()=>{//posibl upgrade al puntaje
  setFocus(focus + 5);
  setTimeStarted(true)
}
const nextBtn = ()=>{
  //reseteamos todos los estados
  setTimer(5)
  setHit(false)
  setFocus(0);
  setIndex(0);
  setToastie(false  )
  setmsg('...')
  setDisable(false)  
  setNameBtn('SLAM Dat Bitch')//consultar buena practica
  setHidden(true) 
   if(toastie){
      setLevel(level +1)
      setLvlBar(lvlBar +15) // 12.5 lvl 8 maximo   -- 15 lvl 6 maximo
    }else {
      setLevel(0)
      setPoints(0)}
}


if(!hit){time = 200 //una vez pulsado hit, se detiene el contador
  }else {time = null
  }
useInterval(() => {
  if(focus > 0){
    setFocus(focus - 5);}
  
}, time);

//timer
useEffect(() => {
  let intervalId;

  if (timeStarted) {
    intervalId = setInterval(() => {
      

      setTimer((timer) =>  timer - 1);
    }, 1000);
  }

  return () => clearInterval(intervalId);
}, [timeStarted, timer,setTimer]);

//


  return (
      <div className='bottom'>
        <div className='timer focus-level'>{timer}</div>
        <div className='btnContainer'>
          <button
            onClick={()=>focusBtn()}>FOCUS</button>
          <button disabled = {disable}
            onClick={()=>hitBtn()}>{nameBtn}</button> 
            {/* Hacer un disable y luego retrybtn */}
            <button hidden= {hidden}
            onClick={()=>nextBtn()}>{next}</button>
      </div>
        <p className='focus-level'> {msg}</p>
        <p className='focus-level'>  Points :{points}</p>
        <p className='focus-level'> level :{level}</p>
          </div>

    
    
    
  )
  
}

export default Botones