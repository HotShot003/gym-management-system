import Hero from './components/Hero'
import './App.css'
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar';
import WorkoutSessions from './components/WorkoutSession';

const App = () =>{
  return (
   // eslint-disable-next-line react/jsx-no-undef
   <Router>
    <Navbar/>
    <Hero/>
    <WorkoutSessions/>
   </Router>
  )
}

export default App
