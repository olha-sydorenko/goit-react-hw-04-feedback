import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <ul>
        {options.map(name => {
          return (
            <button
              type="button"
              key={name}
              onClick={() => onLeaveFeedback(name)}
            >
              {name}
            </button>
          );
        })}
      </ul>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
