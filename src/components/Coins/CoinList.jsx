import Coins from './Coins';

export default function CoinList({ allCoins }) {
  return (
    <>
      {allCoins.map((coin) => {
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
    </>
  );
}
