import { connect } from 'react-redux'
import { deleteSighting } from '../actions/sightings'

function Sighting (props) {

  const onClick = () => {
    props.deleteSighting(props.id)
  }

  return (
    <div className='card'>
      <div className='card__side card__side--front'>
        <img className='card__image' src={props.image} alt={props.common_name}></img>
        { props.user && <h2 className='heading-tertiary'>Reported By: {props.user.username}</h2> }
        <h2 className='heading-tertiary'>Common Name: {props.common_name}</h2>
      </div>
      <div className='card__side card__side--back'>
        <div className='card__content'>
          <h2 className='heading-secondary'>Category: {props.category.name}</h2>
          <h4 className='heading-tertiary heading-tertiary--no-margin'>Scientific Name: {props.scientific_name}</h4>
          <p className='heading-small'>Identified? {props.identified === true ? '✅ ': '🚫'}</p>
          { !props.user &&
            <p className='heading-small'>{props.public === true ? 'Public Sighting' : 'Private Sighting'}</p>
          }
          <p className='heading-small'>Location: {props.location.city}, {props.location.region}, {props.location.country}</p>
          <p className='heading-small'>Date seen: {props.date}</p>
          <p className='heading-small'>Notes: {props.notes}</p>
          { props.currentOwner && <button onClick={() => props.populateForm(props)}>Edit</button>}
          { props.currentOwner && <button onClick={onClick}>Delete</button>}
        </div>
      </div>
    </div>
  );
}

export default connect(null, { deleteSighting })(Sighting);