import PropTypes from 'prop-types';
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

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    })
  ),
};
