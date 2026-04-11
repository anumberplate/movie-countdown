import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Venue from "./Venue.jsx"

createRoot(document.getElementById('root')).render(
   <App />
)
