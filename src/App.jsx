import React from 'react'
import Header from './components/Header'
import DashboardHeader from './components/DashboardComponents/DashboardHeader'
import Dashboard from './components/DashboardComponents/Dashboard'

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <DashboardHeader />
      <Dashboard />
    </div>
  )
}

export default App