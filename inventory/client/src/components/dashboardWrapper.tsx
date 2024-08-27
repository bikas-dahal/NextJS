'use client'

import React, { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import StoreProvider, { useAppSelector } from '@/app/redux'
import { setIsDarkMode } from '@/state'
 

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {

  const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed)
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })



  return (
    <div className={`${isDarkMode ? "dark" : "light"} flex bg-gray-50 text-gray-800 w-full min-h-screen`}>
        <Sidebar />
        <main className={`flex flex-col mx-9 my-7 w-full h-full bg-gray-50 ${isSidebarCollapsed ? "md:pl-24" : "md:pl-72"}`}>
            <Navbar />
            {children}
        </main> 
    </div>
  )
}

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DashboardLayout>
        {children}
      </DashboardLayout>
    </StoreProvider>
  )
}

export default DashboardWrapper
