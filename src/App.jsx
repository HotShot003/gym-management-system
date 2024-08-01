import Hero from './components/Hero'
import './App.css'
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar';

const App = () =>{
  return (
   // eslint-disable-next-line react/jsx-no-undef
   <Router>
    <Navbar/>
    <Hero/>
   </Router>
  )
}

export default App
