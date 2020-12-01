import React from 'react'
import { connect } from 'react-redux'
import Sighting from './Sighting'
import {withRouter} from 'react-router-dom';

class SightingList extends React.Component {

  renderMySightings = () => {
    return this.props.currentUser && this.props.currentUser.sightings.map(sighting => <Sighting key={sighting.id} {...sighting} />)
  }

  renderAllSightings = () => {
    return <p>All Sightings</p>
  }

  render(){
    return (
      <div>
        { this.props.location.pathname === '/myprofile' ? this.renderMySightings() : this.renderAllSightings() }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      currentUser: state.currentUser
  }
}

export default withRouter(connect(mapStateToProps)(SightingList))