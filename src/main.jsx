import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import "./styles/Legcy.css"
import {BrowserRouter , Routes , Route} from "react-router-dom"

import App from "./App"
import Editor from './pages/editor/Editor'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route index element={<App />}/>
    <Route exact path='/editor' element={<Editor/>}/>
    <Route path="*" element={<h1>404 || page not found</h1>}/> 
  </Routes>
  </BrowserRouter>
)
