import React from 'react';
import PropTypes from 'prop-types';

import { Label, Input } from 'components';
import { Error, Wrapper } from './style';

const Field = ({
  error, name, invalid, label, type, ...props
}) => {
  const inputProps = {
    id: name,
    name,
    type,
    invalid,
    'aria-describedby': `${name}Error`,
    ...props,
  };
  const renderInputFirst = type === 'checkbox' || type === 'radio';
  return (
    <Wrapper>
      { renderInputFirst && <Input {...inputProps} /> }
      { label && (
      <Label htmlFor={inputProps.id}>
        { label }
      </Label>
      ) }
      { renderInputFirst || <Input {...inputProps} /> }
      { invalid && error
      && (
      <Error id={`${name}Error`} role="alert" palette="danger">
        { error }
      </Error>
      )
      }
    </Wrapper>
  );
};

Field.propTypes = {
  name: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
};

Field.defaultProps = {
  type: 'text',
};

export default Field;
