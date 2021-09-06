import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { click, disable, label, testid } = this.props;
    return (
      <button
        data-testid={ testid }
        type="submit"
        onClick={ click }
        disabled={ disable }
      >
        { label }
      </button>
    );
  }
}

Button.propTypes = {
  click: PropTypes.func,
  disable: PropTypes.bool,
  label: PropTypes.string.isRequired,
  testid: PropTypes.string,
};

Button.defaultProps = {
  click: () => {},
  disable: false,
  testid: '',
};
