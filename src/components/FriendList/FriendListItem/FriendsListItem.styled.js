import styled from 'styled-components';

export const FriendItemBlock = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 600px;

  padding: 30px;

  border: 1px solid rgba(0, 0, 0, 0.24);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`;

export const FriendStatus = styled.span`
  display: block;
  width: 30px;
  height: 30px;

  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

// export const FriendAvatar = styled.img`
//   margin-right: 20px;
// `;

export const FriendName = styled.p`
  font-weight: 700;
`;
