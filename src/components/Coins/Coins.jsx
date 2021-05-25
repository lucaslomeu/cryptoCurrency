import React from 'react';

import {
  Coin,
  Title,
  Symbol,
  Images,
  LiElement,
  Paragraph,
  UlElement,
  AAA,
  BBB,
} from './styledCoins';

function Coins({
  name,
  price,
  image,
  high24h,
  totalVolume,
  oneHour,
  Porcentage24,
  symbol,
}) {
  return (
    <Coin>
      <UlElement>
        <LiElement>
          <Images src={image} alt="imgsss" />
          <Title>{name}</Title>
          <Symbol>{symbol.toUpperCase()}</Symbol>
          <Paragraph>${price.toLocaleString()}</Paragraph>

          {oneHour < 0 ? (
            <AAA>{Number(oneHour).toFixed(2)}%</AAA>
          ) : (
            <BBB>{Number(oneHour).toFixed(2)}%</BBB>
          )}

          {Porcentage24 < 0 ? (
            <AAA>{Number(Porcentage24).toFixed(2)}%</AAA>
          ) : (
            <BBB>{Number(Porcentage24).toFixed(2)}%</BBB>
          )}

          <Paragraph>$ {high24h.toLocaleString()}</Paragraph>
          <Paragraph>$ {totalVolume.toLocaleString()}</Paragraph>
        </LiElement>
      </UlElement>
    </Coin>
  );
}

export default Coins;
