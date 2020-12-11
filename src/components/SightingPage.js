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
      <div className='sighting-page u-center-text'>
        { !this.props.id && <div className="loader"></div> }
        
        <h1 className='heading-secondary' >{ commonName }</h1>
        <h2 className='heading-tertiary'>Scientific Name - { scientificName }</h2>
        <h2 className='heading-tertiary'>Category - { category && category.name }</h2>
        <img className='sighting-page__image' src={ image } alt={ commonName }></img>
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
        <h3 className='heading-small'>City: {location.city} </h3>
        <h3 className='heading-small'>Region: {location.region} </h3>
        <h3 className='heading-small'>Country: {location.country} </h3>
        <h3 className='heading-small'>Date seen: { date }</h3>
        <h4 className='heading-small'>Notes: { notes }</h4>
        { comments && comments.length > 0 ? <h3 className='heading-small'>Comments:</h3> : null}
        { comments && comments.map(comment => <CommentCard key={comment.id} {...comment} />)}
        <h4 className='heading-small'>Add Comment:</h4>{ this.props.currentUser.id && <CommentForm sighting_id={ id } />}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.sightings.selectedSighting,
  currentUser: state.currentUser
})

export default connect(mapStateToProps, { setSelectedSighting, unsetSighting })(SightingPage)