
function Sighting (props) {
  return (
    <div className="App">
      <img src={props.image} alt={props.common_name} width="500" height="600"></img>
      <h2>Common Name: {props.common_name}</h2>
      <h4>Scientific Name: {props.scientific_name}</h4>
      <p>Date seen: {props.date}</p>
      <p>Notes: {props.notes}</p>
    </div>
  );
}

export default Sighting;