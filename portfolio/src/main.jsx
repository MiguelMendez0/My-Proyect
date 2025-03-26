import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Footer from './Footer.jsx'
import './Footer.css'
import Controls from './Controls.jsx'
import './Controls.css'


const root = createRoot(document.getElementById('root'))
root.render(
   <>
      <App />
      <Controls />
      <Footer />
   </>
)
