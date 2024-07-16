import { useState } from 'react'
import { ThemeProvider } from "@/components/theme-provider"

import { CardWithForm } from '@/components/ui/customCompo/cardWithForm'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'

function App() {

  

  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className='flex justify-center items-center h-screen bg-slate-600'>
        <div className='absolute right-10 top-10'>
          <ModeToggle />
        </div>
        <CardWithForm/>
      </div>
    </ThemeProvider>
    </>
  )
}

export default App
