import React from 'react'

const SightingFormModal = props => {

  const display = props.display ? "block" : "none"
  const { image, category, commonName, scientificName, notes, date, identified, city, region, country, isPublic, toggle, onChange, onSubmit } = props
  
  return (
    <div id="myModal" className="modal" style={{ display }}>
      <div className="modal__content">
        <span onClick={toggle} className="close">&times;</span>
        <form className='sighting-form' onSubmit={onSubmit}>
        <div className='sighting-form__group'>
          <input className='sighting-form__input' placeholder='Image URL' type="text" name="image"  onChange={onChange} value={image} required={true}/>
          <label className='sighting-form__label' htmlFor='image'>Image URL</label>
        </div>
        <div className='sighting-form__group'>
          <select className='sighting-form__input' name="category" onChange={onChange} value={category} >
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
          <label className='sighting-form__label' htmlFor='category'>Category</label>
        </div>
        <div className='sighting-form__group'>
            <input className='sighting-form__input' placeholder='Common Name' type="text" name="commonName"  onChange={onChange} value={commonName}/>
            <label className='sighting-form__label' htmlFor='commonName'>Common Name</label>
        </div>
        <div className='sighting-form__group'>
          <input className='sighting-form__input' placeholder='Scientific Name' type="text" name="scientificName" onChange={onChange} value={scientificName} />
          <label className='sighting-form__label' htmlFor='scientificName'>Scientific Name</label>
        </div>
        <div className='sighting-form__group'>
          <textarea className='sighting-form__input' placeholder='Notes' type="text" name="notes"  onChange={onChange} value={notes}></textarea>
          <label className='sighting-form__label' htmlFor='notes'>Notes</label>
        </div>
        <label>Location</label>
        <div className='sighting-form__group'>
          <input className='sighting-form__input' placeholder='City' type="text" name="city" onChange={onChange} value={city} required={true} />
          <label className='sighting-form__label' htmlFor='city'>City</label>
        </div>
        <div className='sighting-form__group'>
          <input className='sighting-form__input' placeholder='Region' type="text" name="region" onChange={onChange} value={region} required={true} />
          <label className='sighting-form__label' htmlFor='region'>Region</label>
        </div>
        <div className='sighting-form__group'>
          <input className='sighting-form__input' placeholder='Country' type="text" name="country" onChange={onChange} value={country} required={true} />
          <label className='sighting-form__label' htmlFor='country'>Country</label>
        </div>
        <div className='sighting-form__group'>
          <input className='sighting-form__input' placeholder='date' type="date" name="date" onChange={onChange} value={date} required={true} />
          <label className='sighting-form__label' htmlFor='date'>Date Seen</label>
        </div>
        <div className='sighting-form__group'>
          <label htmlFor='identified'>Is Identified?
            <input
              className='u-margin-left-small'
              name="identified"
              type="checkbox"
              checked={identified}
              onChange={onChange} />
          </label>
        </div>
        <div className='sighting-form__group'>
          <label htmlFor='isPublic'>Make entry public?
            <input
              className='u-margin-left-small'
              name="isPublic"
              type="checkbox"
              checked={isPublic}
              onChange={onChange} />
          </label>
        </div>
        <input className="btn btn--small" type="submit" value="Submit" />
      </form>
      </div>
    </div>
  )
}

export default SightingFormModal
