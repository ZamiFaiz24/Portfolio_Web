import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { MotionConfig } from 'framer-motion'
import App from './App.jsx'
import { LocaleProvider } from './locales/LocaleProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <LocaleProvider>
        <App />
      </LocaleProvider>
    </MotionConfig>
  </StrictMode>,
)
