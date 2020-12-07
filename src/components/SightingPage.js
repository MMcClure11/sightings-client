import React, { Component } from 'react'
import { connect} from 'react-redux'
import { setSelectedSighting } from '../actions/sightings'

class SightingPage extends Component {

  componentDidMount(){
    const id = this.props.match.params.id
    this.props.setSelectedSighting(id)
  }

  render() {
    const { commonName, image, category, scientificName, identified, location, date, notes } = this.props
    console.log(this.props)
    return (
      <>
        <h2>Category { category.name }</h2>
        <h1>{ commonName }</h1>
        <h3>{ scientificName }</h3>
        <img src={ image } alt={ commonName }></img>
        <h3>Identified? {identified === true ? '✅ ': '🚫'}</h3>
        <h3>City: {location.city} </h3>
        <h3>Region: {location.region} </h3>
        <h3>Country: {location.country} </h3>
        <h3>Date seen: { date }</h3>
        <h4>Notes: { notes }</h4>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.sightings.selectedSighting,
  currentUser: state.currentUser
})

export default connect(mapStateToProps, { setSelectedSighting })(SightingPage)