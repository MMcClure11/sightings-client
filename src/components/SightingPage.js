import React, { Component } from 'react'
import { connect} from 'react-redux'
import { setSelectedSighting } from '../actions/sightings'

class SightingPage extends Component {

  componentDidMount(){
    const id = this.props.match.params.id
    this.props.setSelectedSighting(id)
  }

  render() {
    return (
      <div>
        Sighting Show Page for {this.props.selectedSighting.commonName}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  selectedSighting: state.selectedSighting,
  currentUser: state.currentUser
})

export default connect(mapStateToProps, { setSelectedSighting })(SightingPage)