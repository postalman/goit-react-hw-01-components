import styled from 'styled-components';

export const ContainerCSS = styled.div`
  width: 350px;
  height: 410px;
  margin: 50px auto;
  border-radius: 16px;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  background-color: white;
`;

export const DescriptionCSS = styled.div`
  height: 240px;
  padding: 20px;
  text-align: center;
  line-height: 0.6;
  img {
    width: 150px;
    height: 150px;
    border-radius: 100%;
  }

  #name {
    font-size: 25px;
    font-weight: 600;
    color: #000;
  }
  p {
    font-size: 16px;
    color: grey;
  }
`;

export const StatsCss = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-around;
  padding: 0;
  background: #c9e2ed;
  border-radius: 0 0 10px 10px;

  li {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    line-height: 1.5;
  }

  #label {
    font-size: 20px;
    color: grey;
  }
  #quantity {
    font-size: 22px;
    font-weight: 600;
  }
`;
