import React, { useState, useContext,useEffect,useCallback } from 'react'
import useInterval from '../hooks/useInterval'
import { ToastieContext } from './TestGame'


const Botones = () => {
  
  const {toastie,setToastie,
        focus,setFocus,
        hit,setHit,
        setIndex,
        score,setScore,
        level,setLevel,
        lvlBar,setLvlBar,
        timer, setTimer,
        setmsg } = useContext(ToastieContext)  
    
    const [disable,setDisable] = useState(false)//disable hitbutton
    const [nameBtn,setNameBtn] =useState('SLAM Dat Bitch')
    const [hidden, setHidden] = useState(true)//next button hidden until success hitbtton
    const [next,setNext] = useState('next')
    const [timeStarted, setTimeStarted] = useState(false);
    
 

    
  const reset =useCallback(//con callback podemos usarlo dentro de useffect
() => {
  setTimer(5)
  setHit(false)
  setFocus(0);
  setIndex(0);
  setToastie(false  )
  setmsg('...')
  setDisable(false)  
  setNameBtn('SLAM Dat Bitch')//consultar buena practica
  setHidden(true)
  setNext('next')
},
[setFocus,setHit,setIndex,setTimer,setToastie,setmsg],
)  
const hitBtn =()=>{

    if(focus >lvlBar) {
      setmsg('Toasty!');
      setToastie(true)      
      setScore(score +(1000*level*timer))
      setTimeout(() => {
        setLevel(level +1)
      }, 600);
      
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
   reset()
   if(toastie){
      
      setLvlBar(lvlBar +15) // 12.5 lvl 8 maximo   -- 15 lvl 6 maximo
    }else {
      setLevel(1)
      setScore(0)
      setLvlBar(24)}
}

let time = 0
if(!hit){time = 400 //una vez pulsado hit, se detiene el temporizador
  }else {time = null
  }
useInterval(() => {
  if(focus > 0){
    setFocus(focus - 5);}
  
}, time);




//timer
useEffect(() => {
  let intervalId;

  if (timeStarted && timer >0) {
    intervalId = setInterval(() => {
      

      setTimer((timer) =>  timer - 1);
    }, 1000);
  }

  return () => clearInterval(intervalId);
}, [timeStarted, timer,setTimer]);

// bloquear el juego cuando timer === 0//gameover
const gameOver= useCallback(
  () => {
    setTimeStarted(false)
    setmsg('dont make me laugh');
    setNext('retry?')
    setDisable(true)
    setHidden(false)
  },
  [setmsg],
)
useEffect(()=>{
  if(timer === 0){
    reset()
   gameOver()
   
  }
},[timer,gameOver,reset])

// end game in lvl 6
const endGame = useCallback(
  () => {
    reset()
    gameOver()
    
    setmsg('you win')
    setDisable(true)
    
  },
  [gameOver,reset,setmsg],
)
useEffect(() => {
  if(level >= 6 && hit){
    endGame()
    console.log('you win')
    
  }
 
}, [level,hit,endGame])

//

  return (
      
      
        <div className='btnContainer'>
          <button disabled ={disable}
            onClick={()=>focusBtn()}>FOCUS</button>
          <button disabled = {disable}
            onClick={()=>hitBtn()}>{nameBtn}</button> 
            {/* Hacer un disable y luego retrybtn */}
            <button hidden= {hidden}
            onClick={()=>nextBtn()}>{next}</button>
      </div>
      
          
 
    
  )
  
}

export default Botones