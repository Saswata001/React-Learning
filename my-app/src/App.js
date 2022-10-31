import React from 'react';
import './App.css';
import HomePage from './Components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbern from './Components/Navbar';


export default function App() {
  return (
    <div>
      <Navbern />
      <HomePage />
    </div>
  )
}
