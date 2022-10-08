import PropTypes from 'prop-types';
import css from '../UserStats/UserStats.module.css';

export const UserStats = ({ stats }) => {
  return (
    <ul className={css.stats}>
      <li>
        <span className={css.label}>Followers </span>
        <span className={css.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span className={css.label}>Views </span>
        <span className={css.quantity}>{stats.views}</span>
      </li>
      <li>
        <span className={css.label}>Likes </span>
        <span className={css.quantity}>{stats.likes}</span>
      </li>
    </ul>
  );
};

UserStats.propTypes = {
  user: PropTypes.shape({
    stats: {
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    },
  }),
};
