import React from 'react'
import Header from './components/Header'
import DashboardHeader from './components/DashboardHeader'
import CSPM from './components/CSPM'

const App = () => {
  return (
    // <div>
    //   <div className='p-2 m-5 grid sm:grid-cols-2 gap-2'>
    //     <div className='bg-green-300 min-h-[100px] rounded-md'>One</div>
    //     <div className='bg-orange-300 min-h-[100px] rounded-md'>Two</div>
    //   </div>
    //   <div className='p-2 m-5 grid sm:grid-cols-3 gap-4'>
    //     <div className='bg-blue-700 min-h-[100px] rounded-md'>Three</div>
    //     <div className='bg-yellow-700 min-h-[100px] rounded-md'>Four</div>
    //     <div className='bg-red-200 min-h-[100px] rounded-md'>Five</div>
    //     <div className='bg-gray-400 min-h-[100px] rounded-md'>Six</div>
    //   </div>
    //   <div className='p-2 m-5 grid sm:grid-cols-12 gap-4'>
    //     <div className='bg-green-300 min-h-[100px] rounded-md sm:col-span-2 hidden sm:block'>Hello</div>
    //     <div className='bg-teal-300 min-h-[100px] rounded-md sm:col-span-8'>Hi</div>
    //     <div className='bg-slate-500 min-h-[100px] rounded-md sm:col-span-2 hidden sm:block'>Hello Hi</div>
    //   </div>
    // </div>
<div className="bg-gray-100 min-h-screen">
  <Header />
  <DashboardHeader/>
  <CSPM/>
</div>
  )
}

export default App