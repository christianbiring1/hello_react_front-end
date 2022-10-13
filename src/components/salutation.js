import React from 'react';
import PropTypes from 'prop-types';

function Salutation({ content }) {
  return (
    <div>
      {content}
      {' '}
      {'  '}
      {' '}
      John Doe
    </div>
  );
}

Salutation.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Salutation;
