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
        { props.user && <h2>Reported By: {props.user.username}</h2> }
        <h2>Common Name: {props.common_name}</h2>
      </div>
      <div className='card__side card__side--back'>
        <h2>Category: {props.category.name}</h2>
        <h4>Scientific Name: {props.scientific_name}</h4>
        <p>Identified? {props.identified === true ? '✅ ': '🚫'}</p>
        { !props.user &&
          <p>{props.public === true ? 'Public Sighting' : 'Private Sighting'}</p>
        }
        <p>Location: {props.location.city}, {props.location.region}, {props.location.country}</p>
        <p>Date seen: {props.date}</p>
        <p>Notes: {props.notes}</p>
        { props.currentOwner && <button onClick={() => props.populateForm(props)}>Edit</button>}
        { props.currentOwner && <button onClick={onClick}>Delete</button>}
      </div>
    </div>
  );
}

export default connect(null, { deleteSighting })(Sighting);