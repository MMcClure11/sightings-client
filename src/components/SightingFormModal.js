import React from 'react'

export default function SightingFormModal(props){

  const display = props.display ? "block" : "none"
  const { image, commonName, scientificName, notes, date, identified, toggle, onChange, onSubmit } = props

  return (
    <div id="myModal" className="modal" style={{ display }}>
      <div className="modal-content">
        <span onClick={toggle} className="close">&times;</span>
        <form onSubmit={onSubmit}>
        <label>
          Image URL:
          <input type="text" name="image"  onChange={onChange} value={image}/>
        </label>
        <br/>
        <br/>
        {/* <label>
        Category:
        <select >
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
        <br/> */}
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
        <label>
          Date Seen:
          <input type="date" name="date" onChange={onChange} value={date}/>
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
        <input type="submit" value="Submit" />
      </form>
      </div>
    </div>
  )
}
