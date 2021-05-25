import { useState, useEffect } from 'react';
import axios from 'axios';
import CoinList from './components/Coins/CoinList';
import InputSearch from './components/InputSearch/Search';
import { Container } from './components/Coins/styledCoins';
import Coins from './components/Coins/Coins';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C%2024h%2C%207d',
      )
      .then((res) => {
        console.log(res.data);
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // const filteredCoins = coins.filter((coin) => coin.name.toLowerCase());

  const allCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase()),
  );

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <Container>
      <InputSearch type="text" placeholder="Search" onChange={handleChange} />
      <CoinList allCoins={allCoins} />
    </Container>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false',
  );

  const filteredCoins = await res.json();

  return {
    props: {
      filteredCoins,
    },
  };
};

export default App;
