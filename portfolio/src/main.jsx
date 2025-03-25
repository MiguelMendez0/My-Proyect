import { createRoot } from 'react-dom/client'
import './index.css'
import './Footer.css'
import App from './App.jsx'
import Footer from './Footer.jsx'


const root = createRoot(document.getElementById('root'))
root.render(
   <>
      <App />
      <Footer />
   </>
)
