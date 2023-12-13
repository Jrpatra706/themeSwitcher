import './App.css'
import { ThemeProvider } from './contexts/theme'

function App() {

  return (
    // value={{themeMode, darkTheme , lightTheme}}
    // these values can be accessed by different components
    <ThemeProvider value={{themeMode, darkTheme , lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              {/* theme btn */}
          </div>

          <div className="w-full max-w-sm mx-auto">
              {/* card */}
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
