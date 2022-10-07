import { StatisticsTitle } from '../Statistics/StatisticsTitle/StatisticsTitle';
import { StatisticsData } from '../Statistics/StatisticsData/StatisticsData';
import css from '../Statistics/Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <StatisticsTitle title={title} />
      <StatisticsData stats={stats} />
    </section>
  );
};
