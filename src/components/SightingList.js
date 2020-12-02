import React from 'react'
import { connect } from 'react-redux'
import { getSightings } from '../actions/sightings'
import Sighting from './Sighting'
import {withRouter} from 'react-router-dom'
import { Link } from 'react-router-dom'
import SightingFormModal from './SightingFormModal'
import { addSighting } from '../actions/sightings'


class SightingList extends React.Component {

  state = {
    modal: false,
    form: {
      image: '',
      commonName: '',
      scientificName: '',
      notes: '',
      city: '',
      region: '',
      country: '',
      date: '',
      identified: false,
      id: null,
      category: 'Bird',
    }
  }

  toggleModal = () => this.setState({modal: !this.state.modal})

  onChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  //  const value = target.type === 'select' ? target.selected : target.value
    const name = target.name;
    this.setState({form:
      {
        ...this.state.form,
        [name]: value
      }
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addSighting(this.state.form)
  }

  componentDidMount(){
    this.props.getSightings()
  }

  onClick = (url) => {
    this.props.history.push(url)
  }  

  populateForm = (sighting) => this.setState({
    modal: true,
    form: {
      image: sighting.image,
      commonName: sighting.common_name,
      scientificName: sighting.scientific_name,
      notes: sighting.notes,
      city: sighting.location.city,
      region: sighting.location.region,
      country: sighting.location.country,
      date: sighting.date,
      identified: sighting.identified,
      id: sighting.id,
      category: sighting.category.name,
    }
  })

  renderMySightings = () => {
    return (
      <div>
        <button onClick={this.toggleModal}>Report New Sighting</button>
        <h2>My Sightings</h2>
        {this.props.currentUser && this.props.currentUser.sightings.map(sighting => <Sighting key={sighting.id} populateForm={this.populateForm} {...sighting} currentOwner={true} />)}
        <SightingFormModal toggle={this.toggleModal} {...this.state.form} display={this.state.modal} onChange={this.onChange} onSubmit={this.onSubmit}/>
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

export default withRouter(connect(mapStateToProps, { getSightings, addSighting })(SightingList))