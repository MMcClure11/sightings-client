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
      <div className='sighting-page row u-center-text'>
        { !this.props.id && <div className="loader"></div> }
        <div className='col-1-of-2'>
          <h1 className='heading-secondary' >{ commonName }</h1>
          <img className='sighting-page__image' src={ image } alt={ commonName }></img>
          <h2 className='heading-tertiary'>Scientific Name - { scientificName }</h2>
          <h2 className='heading-tertiary'>Category - { category && category.name }</h2>
        </div>
        <div className='info'>
          <p>
            <p className='sighting-page-info u-margin-top-medium '>Identified? {identified === true ? 
              <svg className="icon icon--identified-page-true">
                <use href={sprite + '#icon-checkmark'} />
              </svg>
              : 
              <svg className="icon icon--identified-page-false">
                <use href={sprite + '#icon-cancel-circle'} />
              </svg>
              }
            </p>
          </p>
          <p>
            <h3 className='sighting-page-info u-margin-top-small'>City: {location.city} </h3>
          </p>
          <p>
            <h3 className='sighting-page-info u-margin-top-small'>Region: {location.region} </h3>
          </p>
          <p>
            <h3 className='sighting-page-info u-margin-top-small'>Country: {location.country} </h3>
          </p>
          <p>
            <h3 className='sighting-page-info u-margin-top-small'>Date seen: { date }</h3>
          </p>
          <h4 className='u-margin-top-small'>Notes: { notes }</h4>
        </div>
      </div>
        <div className='comment-container'>
          { comments && comments.length > 0 ? <h3 className='heading-secondary'>Comments:</h3> : null}
          <div className='comment-container__box'>
            { comments && comments.map(comment => <CommentCard key={comment.id} {...comment} />)}
        </div>
        <h4 className='sighting-page-info'>Add Comment:</h4>{ this.props.currentUser.id && <CommentForm sighting_id={ id } />}
      </div>
    </>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.sightings.selectedSighting,
  currentUser: state.currentUser
})

export default connect(mapStateToProps, { setSelectedSighting, unsetSighting })(SightingPage)