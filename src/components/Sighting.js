import { connect } from 'react-redux'
import { deleteSighting } from '../actions/sightings'

function Sighting (props) {

  const onClick = () => {
    props.deleteSighting(props.id)
  }

  return (
    <div className="App">
      { props.user && <h2>Reported By: {props.user.username}</h2> }
      <img src={props.image} alt={props.common_name} width="500" height="600"></img>
      <h2>Category: {props.category.name}</h2>
      <h2>Common Name: {props.common_name}</h2>
      <h4>Scientific Name: {props.scientific_name}</h4>
      <p>Identified? {props.identified === true ? '✅ ': '🚫'}</p>
      <p>Location: {props.location.city}, {props.location.region}, {props.location.country}</p>
      <p>Date seen: {props.date}</p>
      <p>Notes: {props.notes}</p>
      { props.currentOwner && <button onClick={() => props.populateForm(props)}>Edit</button>}
      { props.currentOwner && <button onClick={onClick}>Delete</button>}
    </div>
  );
}

export default connect(null, { deleteSighting })(Sighting);