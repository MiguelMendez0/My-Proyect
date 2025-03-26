import { useState } from 'react'

function App({ }) {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="container_carrusel">
        <div className="portfolio flex flex-row mt-10"></div>
        <div className="portfolio2 flex flex-row mt-10"></div>
        <div className="portfolio3 flex flex-row mt-10"></div>
        <div className="portfolio4 flex flex-row mt-10"></div>
        <div className="portfolio5 flex flex-row mt-10"></div>
        <div className="portfolio6 flex flex-row mt-10"></div>
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
