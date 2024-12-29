import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import SmartPhonesDisplay from './components/SmartPhonesDisplay'
import TopCatgories from './components/TopCatgories'
import ElectronicBrands from './ElectronicBrands'

const App = () => {
  return (
    <div className='bg-white' >
      <Header/>
 
 <main>
        <HeroSection/>
           <SmartPhonesDisplay/>
           <TopCatgories/>
           <ElectronicBrands/>
           </main>
       

    </div>
  )
}

export default App