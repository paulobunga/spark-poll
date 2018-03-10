import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {
  COLOR_PINK,
  COLOR_WHITE,
  COLOR_BLUE_LIGHT,
} from '../../constants/style';

const primaryProps = {
  buttonStyle: {
    background: COLOR_PINK,
  },
  labelStyle: {
    color: COLOR_WHITE,
    fontSize: '1.2rem',
    letterSpacing: '.2rem',
    marginLeft: 10,
    marginRight: 10,
    fontFamily: '\'Rubik\', sans-serif',
    fontWeight: 400,
  },
  overlayStyle: {
    width: '100%',
  },
  style: {
    margin: '2rem 0 2rem 0',
  },
};

const invertedProps = {
  buttonStyle: {
    background: COLOR_WHITE,
  },
  labelStyle: {
    color: COLOR_PINK,
    fontSize: '1.2rem',
    letterSpacing: '.2rem',
    marginLeft: 10,
    marginRight: 10,
    fontFamily: '\'Rubik\', sans-serif',
    fontWeight: 400,
  },
  overlayStyle: {
    width: '100%',
  },
  style: {
    margin: '2rem 0 2rem 0',
  },
};

const secondaryProps = {
  labelStyle: {
    color: COLOR_PINK,
    fontSize: '1.2rem',
    letterSpacing: '.2rem',
    marginLeft: 10,
    marginRight: 10,
    fontFamily: '\'Rubik\', sans-serif',
    fontWeight: 400,
  },
  style: {
    margin: '2rem 0 2rem 0',
  },
};

const Button = ({
  children, type, primary, secondary, inverted, blue,
}) => {
  let button = null;
  const blueProps = { ...primaryProps, buttonStyle: { background: COLOR_BLUE_LIGHT } };
  if (primary) {
    button = <RaisedButton type={type} label={children} {...primaryProps} />;
  } else if (inverted) {
    button = <RaisedButton type={type} label={children} {...invertedProps} />;
  } else if (secondary) {
    button = <FlatButton type={type} label={children} {...secondaryProps} />;
  } else if (blue) {
    button = <RaisedButton type={type} label={children} {...blueProps} />;
  }

  return button;
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
};


export { Button };
