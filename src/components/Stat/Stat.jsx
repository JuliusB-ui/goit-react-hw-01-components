import PropTypes from 'prop-types';

export const Stat = ({ title, stats }) => {
  // Generate Random Color
  const generateRandomColor = () => {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
  };

  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="statList">
        {stats.map(stat => (
          <li
            className="item"
            style={{ backgroundColor: generateRandomColor() }}
            key={stat.id}
          >
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Stat.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
