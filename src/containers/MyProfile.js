import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from '../actions/currentUser';
import SightingContainer from './SightingContainer';

class MyProfile extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <>
        <div className='profile-headers'>
          <h2 className='heading-secondary'>
            Welcome, {this.props.currentUser && this.props.currentUser.username}
          </h2>
        </div>
        <p>Followers: 0</p>
        <p>Following: 0</p>

        <SightingContainer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.currentUser,
  };
};

export default connect(mapStateToProps, { getCurrentUser })(MyProfile);
