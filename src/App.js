import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Coins from './components/Coins';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Coin from './routes/Coin';
import Search from './components/Search';

function App() {
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=70&page=1&sparkline=false&locale=en';

  useEffect(() => {
    axios.get(url).then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        console.log('Error');
      });
  }, []);

  return (
    <>
      <Navbar />
      <Search coins={coins} setFilteredCoins={setFilteredCoins} />
      <Routes>
        <Route path="/" element={<Coins coins={filteredCoins.length ? filteredCoins : coins} />} />
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
