import React from "react";
import PropTypes from 'prop-types';

export const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
  }) =>{
return (
    <div className="Statistics-box">
      <p className="text">
        Good: <span>{good}</span>
      </p>
      <p className="text">
        Neutral: <span>{neutral}</span>
      </p>
      <p className="text">
        Bad: <span>{bad}</span>
      </p>
      <p className="text">
        Total: <span>{total}</span>
      </p>
      <p className="text">
        Positiv feedback: {positivePercentage}%
      </p>
    </div>
);
};

Statistics.propTypes = {
good: PropTypes.number.isRequired,
bad: PropTypes.number.isRequired,
neutral: PropTypes.number.isRequired,
total: PropTypes.number.isRequired,
positivePercentage: PropTypes.number.isRequired,
}