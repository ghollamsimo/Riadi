import { Fragment} from 'react'
import Navbar from './components/nav/Navbar'
import './App.css'
import MobileNavbar from "./components/MobileNavbar.jsx";
import Register from "./pages/auth/Register.jsx";
import {Route, Routes} from "react-router-dom";



function App() {

  return (
    <Fragment >
        <Navbar />
        <MobileNavbar/>

        <Routes>
            <Route path='register' element={<Register/>} />
        </Routes>

    </Fragment>
  )
}

export default App
