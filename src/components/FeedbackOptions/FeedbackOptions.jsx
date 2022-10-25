import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';
export const FeedbackOption = ({ options, onLeaveFeedback }) => {
  

  return (
    <>
      {Object.keys(options).map(key => {
        return (
          <button
            className={s.button}
            name={key}
            key={key}
            type="button"
            onClick={onLeaveFeedback}
          >
            {key[0].toUpperCase() + key.slice(1)}
          </button>
        );
      })}
    </>
  );
};

FeedbackOption.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};