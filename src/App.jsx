import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import SmartPhonesDisplay from './components/SmartPhonesDisplay'

const App = () => {
  return (
    <div className='bg-white' >
      <Header/>
 
        <HeroSection/>
        <div>
           <SmartPhonesDisplay/>
        </div>
       

    </div>
  )
}

export default App