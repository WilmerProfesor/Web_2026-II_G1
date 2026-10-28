import React from 'react'
import img_mario from "../../../public/super_mario.png"
import "./Header.css"

const Header = () => {
  return (
    <header>
        <h1>Title</h1>
        <img src={img_mario} alt="Logo Mario Bross" id='main_logo'/>
        <p>Esto es una app-web desde React</p>        
    </header>
  )
}

export default Header