import React, { Component } from 'react';
import Spark from '../images/icons/Spark';
import { COLOR_WHITE_50, COLOR_WHITE, COLOR_PINK } from '../constants/style';

const styles = {
  navContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    top: 0,
    color: COLOR_WHITE,
    zIndex: 100,
    paddingLeft: '20rem',
    paddingRight: '20rem',
    height: '12rem',
  },
  navLogoStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  navLinkContainerStyle: {
    display: 'flex',
    fontFamily: '\'Rubik\', sans-serif',
    fontWeight: 400,
    fontSize: '1.2rem',
    letterSpacing: '.2rem',
  },
  navListStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    opacity: '.6',
  },
  navLinkStyle: {
    listStyleType: 'none',
    marginLeft: '3rem',
  },
};

class Nav extends Component {
  render() {
    const {
      navContainerStyle,
      navLinkContainerStyle,
      navLogoStyle,
      navListStyle,
      navLinkStyle,
    } = styles;

    return (
      <div className="nav" style={navContainerStyle}>
        <div className="nav__logo" style={navLogoStyle}>
          <Spark fill={COLOR_WHITE} width="50px" height="50px" />
          <div style={{ marginLeft: '2rem', fontSize: '2rem' }}>Spark Poll</div>
        </div>
        <div className="nav__links" style={navLinkContainerStyle}>
          <ul style={navListStyle}>
            <li style={navLinkStyle}>View Polls</li>
            <li style={navLinkStyle}>Login</li>
            <li style={{ ...navLinkStyle, color: COLOR_PINK }}>Sign up</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;