import './App.css';
import React, {useEffect, useState} from 'react';
import NavBar from './Components/NavBar';
import About from './Components/About';
import Form from './Components/Form';
import PictureContainer from './Components/PictureContainer';
import { Route, Switch, Redirect } from "react-router-dom"

function App() {
  const [pictures, setPictures] = useState([])


  const request = async () => {
    let req = await fetch('https://pixabay.com/api/?key=26785058-3bf47108f91b1e398f07fb1e0')
    let res = await req.json()
    setPictures(res.hits)
  }
  useEffect(() => {
    request()
  }, []) 

  // console.log(pictures)
  
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route  exact path="/home">
           <PictureContainer pictures={pictures} setPictures={setPictures} />
        </Route>
        <Route exact path="/create">
          <Form setPictures={setPictures} />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
      <Redirect from="/" to="/home" />
    </div>
  );
}

export default App;
