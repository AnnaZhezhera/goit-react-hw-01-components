import PropTypes from 'prop-types';
import {
  FriendItemBlock,
  FriendStatus,
  FriendName,
} from './FriendsListItem.styled';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <FriendItemBlock key={id}>
      <FriendStatus isOnline={isOnline}>{isOnline}</FriendStatus>
      <img src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendItemBlock>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
