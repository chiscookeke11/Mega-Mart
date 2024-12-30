import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import SmartPhonesDisplay from './components/SmartPhonesDisplay'
import TopCatgories from './components/TopCatgories'
import ElectronicBrands from './ElectronicBrands'
import DailyEssentials from './components/DailyEssentials'

const App = () => {
  return (
    <div className='bg-white' >
      <Header/>
 
 <main>
        <HeroSection/>
           <SmartPhonesDisplay/>
           <TopCatgories/>
           <ElectronicBrands/>
           <DailyEssentials/>
           </main>
       

    </div>
  )
}

export default App