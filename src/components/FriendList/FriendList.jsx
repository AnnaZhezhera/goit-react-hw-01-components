import { FriendListItem } from './FriendListItem/FriendListItem';
import { FriendListWrapper } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListWrapper>
      {friends.map(friend => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </FriendListWrapper>
  );
};
