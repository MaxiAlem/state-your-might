import React, {  useState, useContext } from 'react'
import animChar from '../helpers/animation'
import useInterval from '../hooks/useInterval'
import FocusBar from './FocusBar'

import { ToastieContext } from './TestGame'

const  animSet = require.context('../img',true)

  
const Kombatient = () => {
  
  const {toastie,focus} = useContext(ToastieContext) 
  const [index,setIndex] = useState(0);
  const [endloop,setEndloop] = useState(false)

  useInterval(() => {//se puede usar setInterval pwro se buguea
  if(!toastie){
      if(!endloop){
    if (index === 0 ){
      setIndex(1)
    }else if(index === 1){
      setIndex(2)
    }else {
      setEndloop(true)
    }}else{
      if (index === 2 ){
        setIndex(1)
      }else if(index === 1){
        setIndex(0)
      }else {
        setEndloop(false)
      };
    };
    }else{ //cumpliendo toastie(superar el desafio)
      if(index === 0 ||index === 1|| index === 2){
        setIndex(3)
      }else if (index === 3){
        setIndex(4)
      }else if ( index === 4){
        setIndex(5)
      }else if (index === 5){
        setIndex(6)
      }else  {//( index === 6){
        setIndex(7)
      }
    }  

    
  }, 200);  

  return (
   
            <>    
            <div className='kombatient-container'>
              <div>
                <FocusBar  completed={focus} />
              </div>
              <div>
                <img className='kombatient' alt='fighter focusing to hit' src={animSet(animChar(index))}/>
              </div>
              
            </div>
            
      
            
           </>
    
  
  )
}

export default Kombatient