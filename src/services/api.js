import axios from 'axios';

const CryptoApi = axios.create({
  baseURL:
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C%2024h%2C%207d',
});

export default CryptoApi;
