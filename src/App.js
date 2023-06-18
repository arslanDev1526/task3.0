import React from 'react';
import styles from "./App.module.css";
import Nav from './components/nav';
import Home from './components/home';
// import About from './components/about';
import Menue from './components/menue';
import ContactForm from './components/form';
import Aboutt from './components/aboutt';
function App() {
  return (
    <div>
      <Nav />
      <Home/>
      <Aboutt/>
      {/* <About/> */}
      <Menue/>
      <ContactForm/>
    </div>
  );
}

export default App;
