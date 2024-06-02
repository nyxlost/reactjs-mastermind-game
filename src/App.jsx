import { Outlet } from 'react-router-dom'
import './App.css'
import Menubar from './components/Menubar'

function App() {


  return (
    <>
    <Menubar />
    <Outlet />
    </>
  )
}

export default App
