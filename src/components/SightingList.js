import React from 'react'
import { connect } from 'react-redux'
import Sighting from './Sighting'

class SightingList extends React.Component {

  render(){
    return (
      <div>
        <h2>Your Sightings</h2>
        {this.props.currentUser && this.props.currentUser.sightings.map(sighting => <Sighting key={sighting.id} {...sighting} />)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(SightingList)