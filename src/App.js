import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Components/Nabvar';
import Hero from './Components/Hero';
import HeadlineCards from './Components/HeadlineCards';
import Food from './Components/Food';
import Category from './Components/Category';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Hero/>
    <HeadlineCards/>
    <Food/>
    <Category/>
    </div>
  );
}

export default App;
