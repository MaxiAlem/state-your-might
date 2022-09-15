import React from 'react'

const FocusBar = (props) => {
    const {completed} = props;
   
    const dinamicWidth = {//inline para el dinamismo
        height: `${completed}%`,
      }
      const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
      }
  return (
    <div className='containerBar' >
      <div style={dinamicWidth} className='fillerBar'  >
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  )
}

export default FocusBar