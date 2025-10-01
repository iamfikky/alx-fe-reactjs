import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'   // ✅ Tailwind + global styles go here

function App() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-blue-500">
        Recipe Sharing Platform
      </h1>
      <p className="mt-2 text-gray-600">Tailwind is working! 🎉</p>
    </div>
  );
}

export default App;
