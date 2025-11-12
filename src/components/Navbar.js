import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/nosotros">Nosotros</Link>
        <Link to="/servicios">Servicios</Link>
        <Link to="/contactenos">Contactenos</Link>
      </div>
    </nav>
  )
}
