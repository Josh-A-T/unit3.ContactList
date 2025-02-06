import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ContactsApp from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContactsApp />
  </StrictMode>,
)
