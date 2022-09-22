import React, { useState, useContext } from 'react'
import useInterval from '../hooks/useInterval'

import { ToastieContext } from './TestGame'


const Botones = () => {
  //  const [focus,setFocus]= useState(0)
    const [msg,setmsg] =useState('...')
    
    const {setToastie,focus,setFocus,hit,setHit,setIndex} = useContext(ToastieContext)  
    let time = 0
    const focusBar = 79 //focus to reach
const hitBtn =()=>{

    if(focus >focusBar) {
      setmsg('Toasty!');
      setToastie(true)
    }
    else {setmsg('dont make me laugh')};
  setHit(true);
    
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

}
if(!hit){time = 600 //una vez pulsado hit, se detiene el contador
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
          <button
            onClick={()=>hitBtn()}>SLAM Dat Bitch</button>
            <button
            onClick={()=>retryBtn()}>retry</button>
      </div>
        <p className='focus-level'> {msg}</p>
          </div>

    
    
    
  )
  
}

export default Botones