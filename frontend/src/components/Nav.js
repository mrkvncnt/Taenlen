import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/auth_actions';

const Nav = ({ firstName, loggedIn, logout }) => {

  const generateButtons = () => {
    const welcome = (firstName === 'Demo') ? `${firstName}` : `${firstName}'s`;

    switch (loggedIn) {
      case true: 
        return( 
          <div className="row">
            <div className="welcome">{welcome} Dashboard</div>
            <button className="llogout-button" onClick={logout}>Log Out</button>
          </div>
        )
      default: 
        return( 
          <div className="row">
            <button className="dash_button">Dashboard</button>
          </div>
        )
    }
     
  }

  return (

    <nav>
      <div className="row">
        <a href="https://taenlen.com/" className="logo">T&#230;nlen<sup>[1]</sup></a> 
        <a href="https://taenlen.com/cells">Cells</a>
        <a href="https://taenlen.com/blog">Blog</a>
        <a href="https://taenlen.com/about">About</a>
      </div>
        {generateButtons()}
    </nav>
  );
};

const msp = ({ auth, ui }) => ({
  loggedIn: ui.isAuthenticated,
  firstName: auth.user ? auth.user.first_name : ''
})

const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(msp, mdp)(Nav);


