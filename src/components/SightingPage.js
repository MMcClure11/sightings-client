import React, { Component } from 'react'
import { connect} from 'react-redux'
import { setSelectedSighting, unsetSighting } from '../actions/sightings'
import CommentCard from './CommentCard'
import CommentForm from './CommentForm'
import sprite from '../imgs/sprite.svg'

class SightingPage extends Component {

  componentDidMount(){
    const id = this.props.match.params.id
    this.props.setSelectedSighting(id)
  }

  componentWillUnmount(){
    this.props.unsetSighting()
  }

  render() {
    const { commonName, image, category, scientificName, identified, location, date, notes, comments, id } = this.props
    return (
      <>
        <h2>Category { category && category.name }</h2>
        <h1>{ commonName }</h1>
        <h3>{ scientificName }</h3>
        <img src={ image } alt={ commonName }></img>
        <p className='heading-small'>Identified? {identified === true ? 
          <svg className="icon icon--identified-page-true">
            <use href={sprite + '#icon-checkmark'} />
          </svg>
          : 
          <svg className="icon icon--identified-page-false">
            <use href={sprite + '#icon-cancel-circle'} />
          </svg>
          }
        </p>
        <h3>City: {location.city} </h3>
        <h3>Region: {location.region} </h3>
        <h3>Country: {location.country} </h3>
        <h3>Date seen: { date }</h3>
        <h4>Notes: { notes }</h4>
        { comments && comments.length > 0 ? <h5>Comments:</h5> : null}
        { comments && comments.map(comment => <CommentCard key={comment.id} {...comment} />)}
        <h4>Add Comment:</h4>{ this.props.currentUser.id && <CommentForm sighting_id={ id } />}
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.sightings.selectedSighting,
  currentUser: state.currentUser
})

export default connect(mapStateToProps, { setSelectedSighting, unsetSighting })(SightingPage)