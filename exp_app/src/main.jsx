import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HDV from './HDV.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HDV />
  </StrictMode>,
)
