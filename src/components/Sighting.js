import { connect } from 'react-redux'
import { deleteSighting } from '../actions/sightings'
import { Link } from 'react-router-dom'
import sprite from '../imgs/sprite.svg'


function Sighting (props) {

  const onClick = () => {
    props.deleteSighting(props.id)
  }

  return (
    <div className='card'>
      <div className='card__side card__side--front'>
        <img className='card__image' src={props.image} alt={props.commonName}></img>
        { props.all && <h2 className='heading-tertiary'>Reported By: {props.user.username}</h2> }
        <h2 className='heading-tertiary'>Common Name: {props.commonName}</h2>
      </div>
      <div className='card__side card__side--back'>
        <div className='card__content'>
          <h2 className='heading-sighting'>Category: {props.category.name}</h2>
          <h4 className='heading-tertiary heading-tertiary--no-margin'>Scientific Name: {props.scientificName}</h4>
          <p className='heading-small'>Identified? {props.identified === true ? 
            <svg className="icon--identified-true">
              <use href={sprite + '#icon-checkmark'} />
            </svg>
            : 
            <svg className="icon--identified-false">
              <use href={sprite + '#icon-cancel-circle'} />
            </svg>
            }
          </p>
          { !props.all &&
            <p className='heading-small'>{props.public === true ? 'Public Sighting' : 'Private Sighting'}</p>
          }
          <p className='heading-small'>Location: {props.location.city}, {props.location.region}, {props.location.country}</p>
          <p className='heading-small'>Date seen: {props.date}</p>
          <Link to={`/sightings/${props.id}`}>More Info</Link>
          <span>
            { props.currentOwner && 
              <a onClick={() => props.populateForm(props)}>
                <svg className="icon icon--edit">
                  <use href={sprite + '#icon-pencil2'} />
                </svg>
              </a>}
            { props.currentOwner && 
              <a onClick={onClick}>
                <svg className="icon icon--trash">
                  <use href={sprite + '#icon-bin2'} />
                </svg>
              </a>}
          </span>
        </div>
      </div>
    </div>
  );
}

export default connect(null, { deleteSighting })(Sighting);