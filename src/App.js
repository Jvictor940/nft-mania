import './App.css';
import React, {useEffect, useState} from 'react';
import NavBar from './Components/NavBar';
import About from './Components/About';
import Form from './Components/Form';
import PictureContainer from './Components/PictureContainer';
import { Route, Switch } from "react-router-dom"

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
      <NavBar />
      <Switch>
        <Route exact path="/">
          <PictureContainer pictures={pictures} />
        </Route>
        <Route exact path="/create">
          <Form setPictures={setPictures} />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
