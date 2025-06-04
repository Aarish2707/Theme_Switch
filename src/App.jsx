import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './context/Theme'
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

    const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  
  
  

  return (
    <ThemeProvider value={{
      themeMode,
      lightTheme,
      darkTheme
    }}>
    <div className="flex flex-wrap items-center min-h-screen">
      <div className="w-full">
        <div className="flex justify-end w-full max-w-sm mx-auto mb-4" >
          <ThemeButton/>
        </div>
        <div className="w-full max-w-sm mx-auto">
          <Card />
        </div>
      </div>
    </div>
    </ThemeProvider>
  )
}

export default App
