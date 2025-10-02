import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'   // ✅ Tailwind + global styles go here
import HomePage from './components/HomePage'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HomePage />
    </div>
  );
}

export default App;
