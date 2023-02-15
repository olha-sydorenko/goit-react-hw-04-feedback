import PropTypes from 'prop-types';
import { List, Button } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(name => {
        return (
          <Button
            type="button"
            key={name}
            onClick={() => onLeaveFeedback(name)}
          >
            {name}
          </Button>
        );
      })}
    </List>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
