import React,{useContext} from 'react'
import { ToastieContext } from './TestGame'
const Score = () => {

    const {
        score,
        level,
        timer,
        hiscore,
        msg } = useContext(ToastieContext)  
  return (
    <div> 

    <p className='timer focus-level'>Time :{timer}</p>
      <p className='focus-level'> {msg}</p>
      <p className='focus-level'>  Score :{score}</p>
      <p className='focus-level'> Level :{level}</p>
      <p className='focus-level'> HiScore :{hiscore}</p>
        
        </div>
  )
}

export default Score