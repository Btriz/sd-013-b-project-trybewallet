import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { type, id, label, testid, change, minLength, name } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        <input
          data-testid={ testid }
          type={ type }
          id={ id }
          name={ name }
          onChange={ change }
          minLength={ minLength }
          required
        />
      </label>
    );
  }
}

Input.propTypes = {
  change: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  testid: PropTypes.string,
  type: PropTypes.string.isRequired,
  minLength: PropTypes.number,
  name: PropTypes.string,
};

Input.defaultProps = {
  testid: '',
  minLength: 1,
  name: '',
};