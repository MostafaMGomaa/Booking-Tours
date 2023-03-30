
import { Fragment } from 'react';
import './App.css';
import About from './Components/About';
import Flight from './Components/Flight';
import Footer from './Components/Footer';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Reveiws from './Components/Reveiws';
import Tour from './Components/Tour';

function App() {
  return (
   <Fragment>
   <NavBar/>
   <Home/>
   <About/>
   <Tour/>
   <Flight/>
   <Reveiws/>
   <Footer/>
   </Fragment>
  );
}

export default App;
