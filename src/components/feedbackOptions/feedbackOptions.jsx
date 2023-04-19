import React from "react";
import PropTypes from 'prop-types';

import css from './feedbackOptions.module.css';

export const FeedbackOptions = ({options, onLeaveFeedback}) =>{
return(<div className={css.button_box}>
    {options.map(option => (
      <button
        key={option}
        className={css.buttons}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
  );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}