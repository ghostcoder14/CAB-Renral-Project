import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserContext from '../context/userContext.jsx'
import CaptanContext from '../context/captainContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <CaptanContext>
        <UserContext>
          <BrowserRouter>
             <App />
          </BrowserRouter>
        </UserContext>
    </CaptanContext>
  </StrictMode>,
)
