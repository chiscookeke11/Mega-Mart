import React from 'react'
import Header from './components/Header'

const App = () => {
  return (
    <div className='w-full bg-white' >
      <Header/>
      <main  className='h-[300vh]' >
        main section
      </main>
    </div>
  )
}

export default App