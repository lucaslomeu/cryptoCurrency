import { useState, useEffect } from 'react';
import axios from 'axios';
import Coins from './components/Coins/Coins';
import { Container } from './components/Coins/styledCoins';

function App() {
  const [coins, setCoins] = useState([]);
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

  const filteredCoins = coins.filter((coin) => coin.name.toLowerCase());

  return (
    <Container>
      {filteredCoins.map((coin) => {
        return (
          <Coins
            key={coin.id}
            image={coin.image}
            name={coin.name}
            symbol={coin.symbol}
            price={coin.current_price}
            oneHour={coin.price_change_percentage_1h_in_currency}
            Porcentage24={coin.price_change_percentage_24h}
            high24h={coin.high_24h}
            totalVolume={coin.total_volume}
          />
        );
      })}
    </Container>
  );
}

export default App;
