import React from 'react'
import Navbar from './Navbar'
import '../Styles/global.css'

export default function Layout({children}) {
  return (
    <div className='layout'>
        <Navbar/>
        <div className="content">
            {children}

        </div>
      <footer>
        <p>Iglesia Apostólica de la Fe en Cristo Jesús. Nicaragua. 2025.</p>
            
        </footer>
    </div>
  )
}
