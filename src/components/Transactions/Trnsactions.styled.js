import styled from 'styled-components'

export const Table = styled.table`
  width: 450px;
  height: auto;
  margin: 50px auto;
  text-align: center;
  
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
`;

export const Thead = styled.thead`
  height: 35px;
  background: #30d5c8;
`;

export const Tr = styled.tr`
  height: 33px;
  text-transform: capitalize;
  font-size: 14px;
  background: red;
  &:nth-child(even) {
    background: blue;
  }
`;