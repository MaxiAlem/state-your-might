import React, { useState, useContext } from 'react'
import useInterval from '../hooks/useInterval'

import { ToastieContext } from './TestGame'


const Botones = () => {
  
  const {setToastie,focus,setFocus,hit,setHit,setIndex,points,setPoints,level,setLevel} = useContext(ToastieContext)  
    const [msg,setmsg] =useState('...')
    const [disable,setDisable] = useState(false)
    const [nameBtn,setNameBtn] =useState('SLAM Dat Bitch')
    
    let time = 0
    const focusBar = 79 //focus to reach
const hitBtn =()=>{

    if(focus >focusBar) {
      setmsg('Toasty!');
      setToastie(true)

      setPoints(points +(100*level))
      setLevel(level +1)
    }
    else {setmsg('dont make me laugh')};
  setHit(true);
  setDisable(true);
  setTimeout(() => {
    setNameBtn('>')
  }, 1000); 
}
const focusBtn = ()=>{//posibl upgrade al puntaje
  setFocus(focus +10)
}
const retryBtn = ()=>{
  setHit(false)
  setFocus(0);
  setIndex(0);
  setToastie(false  )
  setmsg('...')
  setDisable(false)
  setNameBtn('SLAM Dat Bitch')//consultar buena practica

}
if(!hit){time = 200 //una vez pulsado hit, se detiene el contador
  }else {time = null
  }
useInterval(() => {
  if(focus > 0){
    setFocus(focus - 10);}
  
}, time);



//


  return (
      <div className='bottom'>
        <div className='btnContainer'>
          <button
            onClick={()=>focusBtn()}>FOCUS</button>
          <button disabled = {disable}
            onClick={()=>hitBtn()}>{nameBtn}</button> 
            {/* Hacer un disable y luego retrybtn */}
            <button
            onClick={()=>retryBtn()}>retry</button>
      </div>
        <p className='focus-level'> {msg}</p>
        <p className='focus-level'>  Points :{points}</p>
        <p className='focus-level'> level :{level}</p>
          </div>

    
    
    
  )
  
}

export default Botones