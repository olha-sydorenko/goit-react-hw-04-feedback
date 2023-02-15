import PropTypes from 'prop-types';
import { SectionStyles, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionStyles>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionStyles>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
