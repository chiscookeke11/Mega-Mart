import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'

const App = () => {
  return (
    <div className='w-full bg-white' >
      <Header/>
      <main  >
        <HeroSection/>
      </main>
    </div>
  )
}

export default App