import React from 'react'
import ReactDOM from 'react-dom/client'
import { SpeedInsights } from '@vercel/speed-insights/react'
import AethericChronicle from './aetheric-chronicle.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AethericChronicle />
    <SpeedInsights />
  </React.StrictMode>,
)
