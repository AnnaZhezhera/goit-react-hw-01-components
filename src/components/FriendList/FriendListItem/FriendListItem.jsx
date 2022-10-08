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

// export const FriendListItem = ({ avatar, name, isOnline }) => {
//   return friends.map(friend => (
//     <li key={friend.id} className={css.friendItem}>
//       <span className={css.status}>{isOnline}</span>
//       <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
//       <p className={css.name}>{name}</p>
//     </li>
//   ));
// };
