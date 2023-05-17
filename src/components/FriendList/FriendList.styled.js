import styled from 'styled-components';

export const FriendListCSS = styled.ul`
  width: 500px;
  padding: 0;
`;

export const ItemCSS = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  border-radius: 16px;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  background-color: white;
  margin-bottom: 10px;
`;

export const StatusCSS = styled.span`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  text-align: center;
  vertical-align: middle;
  position: relative;
  background-color: ${props => (props['data-online'] ? 'green' : 'red')};

  display: inline-block;
  margin: 5%;
`;

export const AvatarCSS = styled.img`
  height: 48px;
  width: 48px;
  margin-bottom: auto;
  margin-top: auto;
`;

export const NameCSS = styled.p`
  padding-left: 20px;
`;
