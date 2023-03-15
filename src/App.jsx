import { useState } from 'react'
import './App.css';

import Header from './Components/Header';
import Canteen from './Components/Canteen/Canteen';
import SearchBar from './Components/SearchBar';

function App() {

  return (
    <div className="App">
      <Header/>
      <SearchBar/>
      <Canteen/>

    </div>
  )
}

export default App
