import PropTypes from 'prop-types';
import css from '../StatisticsData/StatisticsData.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16797266).toString(16)}`;
}

export const StatisticsData = ({ stats }) => {
  return (
    <ul className={css.statList}>
      {stats.map(stat => (
        <li
          key={stat.id}
          className={css.item}
          style={{ backgroundColor: getRandomHexColor() }}
        >
          <span className={css.label}>{stat.label}</span>
          <span className={css.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  );
};

StatisticsData.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
