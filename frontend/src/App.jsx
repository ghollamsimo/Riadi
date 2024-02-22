import { Fragment} from 'react'
import Navbar from './components/nav/Navbar'
import './App.css'
import MobileNavbar from "./components/MobileNavbar.jsx";



function App() {

  return (
    <Fragment >
        <Navbar />
        <MobileNavbar/>
    </Fragment>
  )
}

export default App
