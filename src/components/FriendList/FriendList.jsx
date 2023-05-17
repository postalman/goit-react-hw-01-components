import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendList/FriendListItem';
import { FriendListCSS } from 'components/FriendList/FriendList.styled'

export const FriendList = ({ friends }) => {
  return (
    <FriendListCSS>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </FriendListCSS>
  );
};
