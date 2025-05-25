import Link from 'next/link'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link href="/" className="nav-logo">
          MBP Store
        </Link>

        {/* Navigation Links */}
        <div className="nav-links">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/products" className="nav-link">
            Products
          </Link>
          <Link href="/about" className="nav-link">
            About
          </Link>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
        </div>

        {/* Cart & User Actions */}
        <div className="nav-actions">
          <button className="nav-button">
            🔍 Search
          </button>
          <button className="nav-button cart-button">
            🛒 Cart
            <span className="cart-badge">0</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="mobile-menu">
          <button className="mobile-toggle">
            ☰
          </button>
        </div>
      </div>
    </nav>
  )
}