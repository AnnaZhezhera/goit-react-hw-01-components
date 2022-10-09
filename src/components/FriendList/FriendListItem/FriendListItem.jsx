import PropTypes from 'prop-types';
import {
  FriendItemBlock,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './FriendsListItem.styled';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <FriendItemBlock key={id}>
      <FriendStatus isOnline={isOnline}>{isOnline}</FriendStatus>
      <FriendAvatar src={avatar} alt="User avatar" width="48"></FriendAvatar>
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

// export const FriendListItem = ({ avatar, name, isOnline }) => {
//   return friends.map(friend => (
//     <li key={friend.id} className={css.friendItem}>
//       <span className={css.status}>{isOnline}</span>
//       <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
//       <p className={css.name}>{name}</p>
//     </li>
//   ));
// };
