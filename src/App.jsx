import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import SmartPhonesDisplay from './components/SmartPhonesDisplay'
import TopCatgories from './components/TopCatgories'

const App = () => {
  return (
    <div className='bg-white' >
      <Header/>
 
 <main>
        <HeroSection/>
           <SmartPhonesDisplay/>
           <TopCatgories/>
           </main>
       

    </div>
  )
}

export default App