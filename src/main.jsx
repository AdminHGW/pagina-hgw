import React from 'react'
import ReactDOM from 'react-dom/client'
import "./CSS/General.css"
import { Encabesado } from "./components/Fijo/header"
import { Pie } from "./components/Fijo/footer"
import { Main } from './components/main-cuerpo'

ReactDOM.createRoot(document.getElementById('header')).render(
  <React.StrictMode>
    <Encabesado/>
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('contenido')).render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('footer')).render(
  <React.StrictMode>
    <Pie/>
  </React.StrictMode>,
)