import React from 'react'
import { connect } from 'react-redux'
import { getSightings } from '../actions/sightings'
import Sighting from '../components/Sighting'
import {withRouter} from 'react-router-dom'
import SightingFormModal from '../components/SightingFormModal'
import Filters from '../components/Filters'
import { addSighting, editSighting } from '../actions/sightings'
import sprite from '../imgs/sprite.svg'



class SightingContainer extends React.Component {

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
      isPublic: false,
    },
  }

  toggleModal = () => this.setState({modal: !this.state.modal})

  onChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
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
    if (this.state.form.id) {
      this.props.editSighting(this.state.form)
    } else {
      this.props.addSighting(this.state.form)
    }
    this.setState({
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
        isPublic: false,
      }
    })
  }

  componentDidMount(){
    this.props.getSightings()
  }

  onClick = (url) => {
    this.props.history.push(url)
  }  

  openNewSightingForm = () => this.setState({
    modal: true,
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
      isPublic: false,
    }
  })

  populateForm = (sighting) => this.setState({
    modal: true,
    form: {
      image: sighting.image,
      commonName: sighting.commonName,
      scientificName: sighting.scientificName,
      notes: sighting.notes,
      city: sighting.location.city,
      region: sighting.location.region,
      country: sighting.location.country,
      date: sighting.date,
      identified: sighting.identified,
      id: sighting.id,
      category: sighting.category.name,
      isPublic: sighting.public
    }
  })

  renderMySightings = () => {
    return (
      <>
        <button className="btn btn--sighting" onClick={this.openNewSightingForm}>
        <svg className="icon icon--add">
          <use href={sprite + '#icon-plus'} />
        </svg>
          Sighting</button>
          <section className="cards">
            {this.props.currentUser && this.props.currentUser.sightings.map(sighting => <Sighting key={sighting.id} populateForm={this.populateForm} {...sighting} currentOwner={true} />)}
          </section>
        <SightingFormModal toggle={this.toggleModal} {...this.state.form} display={this.state.modal} onChange={this.onChange} onSubmit={this.onSubmit}/>
      </>
    )
  }

  searchedSightings = () => {
    switch(this.props.searchOption) {
      case 'commonName':
        return this.props.sightings.filter(sighting => sighting.commonName.toLowerCase().includes(this.props.search.toLowerCase()))
      case 'username':
        return this.props.sightings.filter(sighting => sighting.user.username.toLowerCase().includes(this.props.search.toLowerCase()))
      case 'region':
        return this.props.sightings.filter(sighting => sighting.location.region.toLowerCase().includes(this.props.search.toLowerCase()))
      default:
        return this.props.sightings
    }
  }

  filteredSightings = () => this.props.filter === 'All' ?  this.searchedSightings() : this.searchedSightings().filter(sighting => sighting.category.name === this.props.filter)

  sortedSightings = () => this.props.sort === 'alphabetically' 
    ? this.filteredSightings().sort((a, b) => a.commonName.localeCompare(b.commonName)) 
    : this.filteredSightings().sort((a, b) => b.date.localeCompare(a.date))

  renderAllSightings = () => {
    console.log(this.props.sort)
    return (
      <>
        <h2 className='heading-secondary'>All Sightings</h2>
        <Filters />
        { !this.props.sightings[0] && <div className="loader"></div> }
        <section className="cards">
          {this.props.sightings && this.sortedSightings().map(sighting => <Sighting key={sighting.id} {...sighting} all={true} />)}
        </section>
      </>
    )
  }

  render(){
    return (
      <>
        { this.props.location.pathname === '/myprofile' ? this.renderMySightings() : this.renderAllSightings() }
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
      currentUser: state.currentUser,
      sightings: state.sightings.sightings,
      ...state.sightings.filtersForm
  }
}

export default withRouter(connect(mapStateToProps, { getSightings, addSighting, editSighting })(SightingContainer))