import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
`;

const Coin = styled.div`
  display: flex;
  justify-content: center;
`;

const UlElement = styled.ul`
  display: flex;
  justify-content: center;
`;

const LiElement = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 80vw;
  border-top: 2px solid gray;
  padding: 5px 0;
  height: 45px;

  &:hover {
    background-color: #325288;
    cursor: pointer;
`;

const Images = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 20px;
`;

const Title = styled.h1`
  display: flex;
  width: 220px;
  justify-content: start;
  font-size: 1.2rem;
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
  Container,
};
