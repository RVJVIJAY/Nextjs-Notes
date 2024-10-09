import Link from 'next/link'
import React from 'react'
import './Header.css'
const Header:React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">Nextjs</h1>
        <nav className="header-nav">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/products" className="nav-link">Products</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
