import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FriendProfile from "./components/FriendProfile";
import Friend from "./components/Friend";
import DogGallery from './components/DogGallery/index';
import RandomJoke from './components/RandomJoke'

function App() {
  return (
    <div className="App">
      <Friend />
      <DogGallery />
      <RandomJoke />
    </div>
  );
}

export default App;
