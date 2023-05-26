import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./component/Header.jsx";
import Home from "./component/Home.jsx";
import Coin from "./component/Coin.jsx";
import Exchange from "./component/Exchange.jsx";
import CoinDetails from './component/CoinDetails.jsx';
import Footer from './component/Footer.jsx';

const App = () => {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin" element={<Coin />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/coin/:id" element={<CoinDetails />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App