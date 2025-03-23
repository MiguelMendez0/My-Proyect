import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='portfolio flex flex-col md_flex-row'>
        <div className='circle'>
          <div className='circle2'>
            <img src="/public/Me.png" alt="React Logo" className="w-16 h-16" />
          </div>
        </div>
      <div className='text_header'>
       <span id='tecno'>Hi everyone...</span>
       <p>My name is Miguel and this is my personal portfolio</p>
       <div className='list_skills'>
      <ul>
        <li>&lt;System Ingennier&gt;</li>
        <li>&lt;FrontEnd Developer Jr&gt;</li>
        <li>&lt;Pentester Jr&gt;</li>
      </ul>
      </div>
      </div>
      </div>
    </>
  )
}

export default App

// Steps to start the project with Ngrok VPN  
// Start the Vite server: npm run dev  
// Start Ngrok with the port in use (in this case, port 5173)  
// Command: ngrok http 5173  
// Next, Ngrok will open in the terminal (CMD) and give you a link  
// That link is the one you need to open the project in the browser or Responsinator  
