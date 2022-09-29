
import React,{ useContext }  from 'react'
import { ToastieContext } from './TestGame'

const FocusBar = () => {
  const {focus,lvlBar} = useContext(ToastieContext) 
   
    const dinamicWidth = {//inline para el dinamismo
        height: `${focus}%`,
      }
    const redBar ={
      top: `${lvlBar}%`
    }
  return (
    <div className='containerBar'>

      <div className='whiteBar' >
          <div style={dinamicWidth} className='fillerBar'  >
            
          </div>
          <div   className='redBar'style={redBar}></div>
        </div>

    </div>
  
  )
}

export default FocusBar