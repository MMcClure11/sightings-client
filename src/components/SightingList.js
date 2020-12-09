import React from 'react'
import { connect } from 'react-redux'
import { getSightings } from '../actions/sightings'
import Sighting from './Sighting'
import {withRouter} from 'react-router-dom'
import SightingFormModal from './SightingFormModal'
import Filters from './Filters'
import { addSighting, editSighting } from '../actions/sightings'
import sprite from '../imgs/sprite.svg'



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
      isPublic: false,
    },
    // filter: 'All',
    // sort: 'Alphabetically',
    // searchOption: 'commonName',
    // search: '',
    // searched: false,
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
        <button className="btn btn--small" onClick={this.openNewSightingForm}>
        <svg className="icon icon--add">
          <use href={sprite + '#icon-plus'} />
        </svg>
          Sighting</button>
        <h2>My Sightings</h2>
          <section className="cards">
            {this.props.currentUser && this.props.currentUser.sightings.map(sighting => <Sighting key={sighting.id} populateForm={this.populateForm} {...sighting} currentOwner={true} />)}
          </section>
        <SightingFormModal toggle={this.toggleModal} {...this.state.form} display={this.state.modal} onChange={this.onChange} onSubmit={this.onSubmit}/>
      </>
    )
  }

  // updateFilterState = (event) => {
  //   const target = event.target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   const name = target.name;
  //   this.setState({
  //     [name]: value,
  //     searched: false,
  //     search: ''
  //   })
  // }

  // updateSortState = (event) => {
  //   this.setState({sort: event.target.value, searched: false, search: ''})
  // }

  // updateSearchState = (event) => {
  //   const target = event.target;
  //   const value = target.value;
  //   const name = target.name;
  //   this.setState({
  //     [name]: value
  //   })
  // }

  // filteredSightings = () => {
  //   return this.state.filter === 'All' ? this.props.sightings : this.props.sightings.filter(sighting => sighting.category.name === this.state.filter)
  // }

  // sortedSightings = () => {
  //   return this.state.sort === 'Alphabetically' 
  //   ? this.filteredSightings().sort((a, b) => a.commonName.localeCompare(b.commonName)) 
  //   : this.filteredSightings().sort((a, b) => b.date.localeCompare(a.date))
  // }

  // searchSubmit = (e) => {
  //   e.preventDefault();
  //   this.setState({searched: true})   
  // }

  // searchedSightings = () => {
  //   return this.state.searchOption === 'commonName'
  //   ? this.sortedSightings().filter(sighting => sighting.commonName === this.state.search)
  //   : this.sortedSightings().filter(sighting => sighting.user.username === this.state.search)
  // }

  renderAllSightings = () => {
    return (
      <>
        <h2>All Sightings</h2>
        <Filters />
        {/* <Filter updateFilterState={this.updateFilterState} updateSortState={this.updateSortState} updateSearchState={this.updateSearchState} searchSubmit={this.searchSubmit} {...this.state}/> */}
        { !this.props.sightings[0] && <div className="loader">LOADING</div> }
        <section className="cards">
          {/* {this.state.searched ? this.searchedSightings().map(sighting => <Sighting key={sighting.id} {...sighting} all={true}/>) : 
          this.props.sightings && this.sortedSightings().map(sighting => <Sighting key={sighting.id} {...sighting} all={true} />)} */}
          {this.props.sightings && this.props.sightings.map(sighting => <Sighting key={sighting.id} {...sighting} all={true} />)}
        </section>
      </>
    )
  }

  render(){
    // console.log(this.props)
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
      sightings: state.sightings.sightings
  }
}

export default withRouter(connect(mapStateToProps, { getSightings, addSighting, editSighting })(SightingList))