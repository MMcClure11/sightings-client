import React from 'react'
import { connect } from 'react-redux'
import { getSightings } from '../actions/sightings'
import Sighting from './Sighting'
import {withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom'
import SightingFormModal from './SightingFormModal'


class SightingList extends React.Component {

  state = {
    modal: false
  }

  componentDidMount(){
    this.props.getSightings()
  }

  onClick = (url) => {
    this.props.history.push(url)
  }  

  renderMySightings = () => {
    return (
      <div>
        <h2>My Sightings</h2>
        {this.props.currentUser && this.props.currentUser.sightings.map(sighting => <Sighting key={sighting.id} {...sighting} currentOwner={true} />)}
        <SightingFormModal />
      </div>
    )
  }

  renderAllSightings = () => {
    return (
      <div>
        <Link to="/" onClick={() => this.onClick('/')}>Home</Link>
        <h2>All Sightings</h2>
        {this.props.sightings && this.props.sightings.map(sighting => <Sighting key={sighting.id} {...sighting} />)}
      </div>
    )
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
      currentUser: state.currentUser,
      sightings: state.sightings
  }
}

export default withRouter(connect(mapStateToProps, { getSightings })(SightingList))