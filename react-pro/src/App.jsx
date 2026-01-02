
import './App.css'
import Parent from './components/forwoard-ref'
import Dashboard from './components/hoc/Dashboard'
import WithAuth from './components/hoc/WithAuth'
import Navbar from './components/navbar'
import Navigation from './components/navigation'
import UseMemo from './components/use-memo'
import UserReducer from './components/use-reducer'
import UseRef from './components/use-ref'
import { useTheme } from './contexts/ThemeContext'
import { useEffect } from 'react'
import { useWindowSize } from './customHooks/use-window'

function App() {
  const { theme } = useTheme();
  const {height, width} = useWindowSize()

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const WithAuthWrappedComponent = WithAuth(Dashboard)

  return (
    <div>
      {/* <UseRef/> */}
      {/* <Navbar/>
      <Navigation/>
      <UserReducer/>
      <UseMemo/> */}

      {/* <Parent/> */}

      {/* <WithAuthWrappedComponent/> */}

      <p>{height}</p>
      <p>{width}</p>
    </div>
  )
}

export default App
