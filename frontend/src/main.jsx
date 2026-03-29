import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import LockScreen from './pages/LockScreen'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LockScreen />
  </StrictMode>,
)
