import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Sample from './Sample.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sample />
  </StrictMode>,
)
