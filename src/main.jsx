import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import "./styles/Legcy.css"
import {BrowserRouter , Routes , Route} from "react-router-dom"

import App from "./App"
import Editor from './pages/editor/Editor'
import Browseapi from './pages/browse/Browseapi'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route index element={<App />}/>
    <Route exact path='/editor' element={<Editor/>}/>
    <Route exact path='/browseapi' element={<Browseapi/>}/>
    <Route exact path='/login' element={<Login/>}/>
    <Route exact path='/signup' element={<Signup />}/>
    <Route path="*" element={<h1>404 || page not found</h1>}/> 
  </Routes>
  </BrowserRouter>
)
