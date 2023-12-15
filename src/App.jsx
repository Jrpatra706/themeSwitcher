import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/themebtn/ThemeBtn';
import Card from './components/card/Card';

function App() {
  const [themeMode,setThemeMode] = useState('light');

  const darkTheme = () =>{
    setThemeMode('dark');
  }

  const lightTheme = () =>{
    setThemeMode('light');
  }

  // to make actual change in theme, have to add themeMode to the classList of html
  useEffect(()=>{
    document.querySelector('html').classList.remove('light','dark');
    document.querySelector('html').classList.add(themeMode);
  },[themeMode]);

  return (
    // value={{themeMode, darkTheme , lightTheme}}
    // these values can be accessed by different components
    <ThemeProvider value={{themeMode, darkTheme , lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              {/* theme btn */}
              <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
              {/* card */}
              <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
