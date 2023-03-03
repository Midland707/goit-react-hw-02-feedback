import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.buttonBlock}>
    {Object.keys(options).map(state => (
      <button
        key={state}
        className={css.buttonOptions}
        type="button"
        onClick={() => onLeaveFeedback(state)}
      >
        {state}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.shape(
    PropTypes.arrayOf({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
