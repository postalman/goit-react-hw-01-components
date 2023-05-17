import styled from 'styled-components'

export const TableCSS = styled.table`
  width: 500px;
  height: auto;
  text-align: center;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  margin-bottom: 50px;
`;

export const TheadCSS = styled.thead`
  height: 35px;
  background: #30d5c8;
`;

export const TrCSS = styled.tr`
  height: 33px;
  text-transform: capitalize;
  font-size: 14px;
  background: white;
  &:nth-child(even) {
    background: rgb(201 226 237);
  }
`;

export const ThCSS = styled.th`
    color: white;
    font-size: 15px;
`;