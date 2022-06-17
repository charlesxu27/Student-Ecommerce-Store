import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App/App"
import "./globals.css"
import { BrowserRouter } from "react-router-dom"



ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById("root")
)

// https://stackoverflow.com/questions/70220413/error-usehref-may-be-used-only-in-the-context-of-a-router-component-it-wor