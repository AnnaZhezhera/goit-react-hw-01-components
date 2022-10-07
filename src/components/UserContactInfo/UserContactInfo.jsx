import PropTypes from 'prop-types';
import css from '../UserContactInfo/UserContactInfo.module.css';

export const UserContactInfo = ({ avatar, username, tag, location }) => {
  return (
    <div className={css.description}>
      <img src={avatar} alt="User avatar" className={css.avatar} width="250" />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
  );
};

UserContactInfo.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
};
