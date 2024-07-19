import React from 'react'
import ReactDOM from 'react-dom/client'
import "./CSS/General.css"
import { Encabesado } from "./components/Fijo/header"
import { Pie } from "./components/Fijo/footer"
import { Cuerpo } from './components/main/contenido'

ReactDOM.createRoot(document.getElementById('header')).render(
  <React.StrictMode>
    <Encabesado/>
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('contenido')).render(
  <React.StrictMode>
    <Cuerpo/>
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('footer')).render(
  <React.StrictMode>
    <Pie/>
  </React.StrictMode>,
)