import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderTag } from 'styles'
import bimbangal_logo from '../assets/bimbangal_logo.svg'

function Header (){
    return (
      <HeaderTag>
          <Link to={"/"}><h1><img  src={bimbangal_logo} alt="Bimbangal Logo" />   Bimbangal</h1></Link>
          <h2>Reflections of Life</h2>
            <ul className="navbar">
              <li><Link to ={"/overview"}>About</Link></li>
              <li><a href="https://github.com/chocoogirl" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><Link to ={"/aboutme"}>Who am i?</Link></li>
            </ul>
        </HeaderTag>
    );
}

export default Header;
