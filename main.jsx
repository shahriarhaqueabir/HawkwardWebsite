import React from 'react'
import ReactDOM from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import AethericChronicle from './aetheric-chronicle.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AethericChronicle />
    <Analytics />
  </React.StrictMode>,
)
