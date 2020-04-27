import React, { useState } from 'react';
import Chat from './images/chat.png'
import Coin from './images/coin.png'
import Delivery from './images/f-delivery.png'
import './App.css';
import HobbyList from './components/HobbyList'
import Guarantee from './components/Guarantee';
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <HobbyList />
      <br />
      <hr />
      <br />
      <div style={{ display: 'flex' }}>
        <Guarantee img={Chat} title={'Online Support 24/7'} description={'Nihil, perspiciatis adipisci voluptatum, explicabo eum reiciendis totam iste suscipit provident voluptatibus itaque officiis.'} />
        <Guarantee img={Coin} title={'100% Money Back'} description={'Reprehenderit veritatis cupiditate ducimus, enim facere ut dignissimos quis odit accusantium delectus!'} />
        <Guarantee img={Delivery} title={'Free Shipping'} description={'Libero, minima laboriosam aspernatur fuga ut accusamus nam consectetur enim dolorum veritatis.'} />
      </div>
      <br />
      <hr />
      <br />
      <Counter />
      <br />
      <hr />
      <br />
    </div>
  );
}

export default App;