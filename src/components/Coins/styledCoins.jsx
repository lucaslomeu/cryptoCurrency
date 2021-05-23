import styled from 'styled-components';

const Coin = styled.div`
  display: flex;
  justify-content: center;
`;

const UlElement = styled.ul`
  display: flex;
  justify-content: center;
  margin: auto;
`;

const LiElement = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 80vw;
  border-top: 2px solid gray;
  padding: 0 20px;

  &:hover {
    background-color: #325288;
    cursor: pointer;
`;

const Images = styled.img`
  width: 40px;
  height: 40px;
`;

const Title = styled.h1`
  display: flex;
  width: 220px;
  justify-content: start;
  font-size: 1.1rem;
  color: #fff;
`;

const Symbol = styled.h3`
  display: flex;
  justify-content: start;
  font-size: 0.8em;
  text-align: left;
  color: #fff;
  width: 50px;
`;

const Paragraph = styled.p`
  width: 160px;
  text-align: right;
  color: #fff;
`;

const AAA = styled.p`
  width: 160px;
  text-align: right;
  color: red;
`;

const BBB = styled.p`
  width: 160px;
  text-align: right;
  color: green;
`;
export {
  Title,
  Symbol,
  Images,
  LiElement,
  Paragraph,
  UlElement,
  Coin,
  AAA,
  BBB,
};
