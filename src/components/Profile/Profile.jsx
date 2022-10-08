import { UserStats } from './UserStats/UserStats';
import { UserContactInfo } from './UserContactInfo/UserContactInfo';
import css from '../Profile/Profile.module.css';
// import { ContactInfo } from './ContactInfo';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <UserContactInfo
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <UserStats stats={stats} />
    </div>
  );
};
