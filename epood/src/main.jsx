import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css'
import './index.css'
import './i18n';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'





// Navigeerimises/URL vahetuseks
// 1. npm install react-router-dom
// 2. import BrowserRouter
// 3. App ümbritseda BrowserRouteringa
// 4. App.jsx failis URL ja HTMLi seosed

createRoot(document.getElementById('root')).render(
  <StrictMode>
<BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
