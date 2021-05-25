import styled from 'styled-components';

const Input = styled.input`
  width: 300px;
  height: 40px;
  margin-bottom: 50px;
  border: none;
  border-radius: 5px;
  padding-left: 10px;

  &:focus {
    outline: none;
    border: 2px solid #325288;
  }
`;

export { Input };
