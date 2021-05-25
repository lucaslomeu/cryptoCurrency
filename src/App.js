import { useState, useEffect } from 'react';
import Api from './services/api';
import CoinList from './components/Coins/CoinList';
import InputSearch from './components/InputSearch/Search';
import { Container } from './components/Coins/styledCoins';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    Api.get()
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) =>
        console.log('Não foi possível fazer a requisição' + error),
      );
  }, []);

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

export default App;
