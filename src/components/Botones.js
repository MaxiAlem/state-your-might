import React, { useState, useContext } from 'react'
import useInterval from '../hooks/useInterval'

import { ToastieContext } from './TestGame'


const Botones = () => {
  //  const [focus,setFocus]= useState(0)
    const [msg,setmsg] =useState('')
    const [hit,setHit] = useState(false)
    const {setToastie,focus,setFocus} = useContext(ToastieContext)  
    let time = 0
const hitBtn =()=>{

    if(focus >79) {setmsg('Toasty!');setToastie(true)}
    else setmsg('dont make me laugh');
    setHit(true);
    
   
}
const focusBtn = ()=>{//posibl upgrade al puntaje
  setFocus(focus +10)
  
}
if(!hit){time = 600
  }else {time = null
  }
useInterval(() => {
  if(focus > 0){
    setFocus(focus - 10);}
  
}, time);



//


  return (
    
      <div>
              <button
              onClick={()=>focusBtn()}>FOCUS</button>
              <button
              onClick={()=>hitBtn()}>SLAM Dat Bitch</button>
              <p className='focus-level'>focus : {focus}</p>

              <p className='focus-level'>... {msg}</p>
          </div>

    
    
    
  )
  
}

export default Botones