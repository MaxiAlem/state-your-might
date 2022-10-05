import React from 'react'
import githublogo from '../img/github.jpg'

const Header = () => {
  
  return (
    <header className='header'>
      <div className='title'>
        <h1> STATE YOUR MIGHT! </h1> 
        </div>
        
        <div className='github'>
          <a href='https://github.com/MaxiAlem/state-your-might'  target="_blank" rel="noreferrer">
            <img src={githublogo} alt='link to github'/>
          </a>
        </div>
        </header>
  )
}

export default Header