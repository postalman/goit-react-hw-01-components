import PropTypes from 'prop-types';
import { ItemCSS, StatusCSS, NameCSS, AvatarCSS } from 'components/FriendList/FriendList.styled'

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ItemCSS>
      <StatusCSS data-online={isOnline}></StatusCSS>
      <AvatarCSS src={avatar} alt="User avatar"/>
      <NameCSS>{name}</NameCSS>
    </ItemCSS>
  );
};
