import React from 'react'

export default function SightingFormModal(props){
  const display = props.display ? "block" : "none"
  const { image, category, commonName, scientificName, notes, date, identified, city, region, country, isPublic, toggle, onChange, onSubmit } = props
  return (
    <div id="myModal" className="modal" style={{ display }}>
      <div className="modal-content">
        <span onClick={toggle} className="close">&times;</span>
        <form onSubmit={onSubmit}>
        <label>
          Image URL:
          <input type="text" name="image"  onChange={onChange} value={image} required={true}/>
        </label>
        <br/>
        <br/>
        <label>
        Category:
        <select name="category" onChange={onChange} value={category} >
          <option value="Bird">Bird</option>
          <option value="Freshwater Creature">Freshwater Creature</option>
          <option value="Fungus">Fungus</option>
          <option value="Insect">Insect</option>
          <option value="Mammal">Mammal</option>
          <option value="Plant">Plant</option>
          <option value="Reptile">Reptile</option>
          <option value="Salt Water Creature">Salt Water Creature</option>
          <option value="Other">Other</option>
        </select>
        </label>
        <br/>
        <br/>
        <label>
          Common Name:
          <input type="text" name="commonName"  onChange={onChange} value={commonName}/>
        </label>
        <br/>
        <br/>
        <label>
          Scientific Name:
          <input type="text" name="scientificName" onChange={onChange} value={scientificName} />
        </label>
        <br/>
        <br/>
        <label>
          Notes:
          <textarea type="text" name="notes"  onChange={onChange} value={notes}></textarea>
        </label>
        <br/>
        <br/>
        <label>Location:</label>
        <br/>
        <label>
          City:
          <input type="text" name="city" onChange={onChange} value={city} required={true} />
        </label>
        <label>
          Region:
          <input type="text" name="region" onChange={onChange} value={region} required={true} />
        </label>
        <label>
          Country:
          <input type="text" name="country" onChange={onChange} value={country} required={true} />
        </label>
        <br/>
        <br/>
        <label>
          Date Seen:
          <input type="date" name="date" onChange={onChange} value={date} required={true} />
        </label>
        <br/>
        <br/>
        <label>
          Is Identified?
        <input
          name="identified"
          type="checkbox"
          checked={identified}
          onChange={onChange} />
        </label>
        <br/>
        <br/>
        <label>
          Make entry public?
        <input
          name="isPublic"
          type="checkbox"
          checked={isPublic}
          onChange={onChange} />
        </label>
        <br/>
        <br/>
        <input className="btn btn--small" type="submit" value="Submit" />
      </form>
      </div>
    </div>
  )
}
