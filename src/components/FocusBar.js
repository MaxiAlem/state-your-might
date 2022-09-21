
import React,{ useContext }  from 'react'
import { ToastieContext } from './TestGame'

const FocusBar = () => {
  const {focus} = useContext(ToastieContext) 
   
    const dinamicWidth = {//inline para el dinamismo
        height: `${focus}%`,
      }
    const focusBar ={
      top: '79%'
    }
  return (
    <div className='containerBar' >
      <div style={dinamicWidth} className='fillerBar'  >
        
      </div>
      <div   className='focusBar'style={focusBar}></div>
    </div>
  )
}

export default FocusBar