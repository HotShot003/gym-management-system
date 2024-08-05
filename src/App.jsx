import Hero from './components/Hero'
import './App.css'
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar';
import WorkoutSessions from './components/WorkoutSession';
import GallerySection from './components/GallerySection';

const App = () =>{
  return (
   // eslint-disable-next-line react/jsx-no-undef
   <Router>
    <Navbar/>
    <Hero/>
    <WorkoutSessions/>
    <GallerySection/>
   </Router>
  )
}

export default App
