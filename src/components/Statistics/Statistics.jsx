import PropTypes from 'prop-types';
import {
    StatisticsCSS,
    TitleCSS,
    StatListCSS,
    ItemCSS,
    LabelCSS,
    PercantageCSS,
  } from 'components/Statistics/Stattistics.styled';

export const Data = ({ stats, title }) => {
  
  return (
    <StatisticsCSS>
      {title && <TitleCSS>{title}</TitleCSS>}

      <StatListCSS>
      {stats.map(({ id, label, percentage }) => (
          <ItemCSS key={id}>
            <LabelCSS>{label} </LabelCSS>
            <PercantageCSS>{percentage}%</PercantageCSS>
          </ItemCSS>
        ))}
      </StatListCSS>
    </StatisticsCSS> 
  );
};

Data.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
