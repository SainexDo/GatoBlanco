import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {




  return (
    <footer>
        <div id='footerLeft'>
            <div>Mas sobre nosotros</div>
            <div>Contactanos</div>
            <div>Trabaja con nosotros</div>
        </div>
        <div id='footerRight'>
            <Link to={'/about'}>About</Link>
            <Link to={'/contact'}>Contact</Link>
            <Link to={'work'}>Work</Link>
        </div>
    </footer>
  )
}

export default Footer