import './App.css';
import React, {useEffect, useState} from 'react';
import NavBar from './Components/NavBar';
import About from './Components/About';
import Form from './Components/Form';
import PictureContainer from './Components/PictureContainer';

function App() {
  const [pictures, setPictures] = useState([])

  const request = async () => {
    let req = await fetch('http://localhost:8000/pictures')
    let res = await req.json()
    setPictures(res)
  }
  useEffect(() => {
  request()}, []) 
  
  return (
    <div className="App">
      <PictureContainer pictures={pictures} />
    </div>
  );
}

export default App;
