import React, {  useState, useContext } from 'react'
import {animChar} from '../helpers/animation'
import useInterval from '../hooks/useInterval'
import FocusBar from './FocusBar'

import { ToastieContext } from './TestGame'

const  animSet = require.context('../img',true)

const Kombatient = () => {
  
  const {toastie,hit,index,setIndex,level} = useContext(ToastieContext) 
  
  const [endloop,setEndloop] = useState(false)
   
  const loop =()=>{
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

  }

  useInterval(() => {//se puede usar setInterval pwro se buguea
    if(!hit){
        loop()
      }else{ //cumpliendo hit
        if(index === 0 ||index === 1|| index === 2){
          setIndex(3)
        }else if (index === 3){
          setIndex(4)
        }else if ( index === 4){
          setIndex(5)
        }else if (index === 5 && toastie === true){
          setIndex(6)
        }else  if(index === 6 && toastie === true){
          setIndex(7)
         
        }
      }  
  }, 200);  


  
  return (
   
            <>    
            <div className='kombatient-container'>
              <div>
                <FocusBar />
              </div>
              <div className='kombat-div'>
                <img className='kombatient' alt='fighter focusing to hit' src={animSet(animChar(index))}/>
                <img className='mate' alt='thing to hit' src={animSet(`./ho${level}.png`)}/>
              </div>
              
            </div>
            
      
            
           </>
    
  
  )
}

export default Kombatient