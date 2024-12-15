import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Image_Grabber } from './Image_Grabber'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Image_Grabber />
  </StrictMode>,
)
