import * as React from "react"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <p>Navbar</p>
      <Link to="/">Home</Link> |{' '}
      <Link to="/">About Us</Link> |{' '}
      <Link to="/contact-us">Contact Us</Link> |{' '}
      <Link to="/">Buy Now</Link> |{' '}
      <Link to="/product-details">Product Details</Link> |{' '}
    </nav>
  )
}
