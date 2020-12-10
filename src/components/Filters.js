import { connect } from 'react-redux'
import { handleSearchFormChange } from '../actions/sightings'

const Filters = (props) => {
  return(
    <div className='form-container'>
      <form className='filters-form'>
          <div className='filters-form__group'>
            <label className='filters-form__label' >Search By</label>
            <select className='filters-form__input' name='searchOption' onChange={props.handleSearchFormChange} value={props.searchOption}>
              <option value='commonName'>Common Name</option>
              <option value='username'>Username</option>
              <option value='region'>Region</option>
            </select>
          </div> 
          <div className='filters-form__group'>
            <label className='filters-form__label' >Search</label>
            <input className='filters-form__input' placeholder='Search' type="search" name="search" onChange={props.handleSearchFormChange} value={props.search} />
          </div>
          <div className='filters-form__group'>
          <label className='filters-form__label' >Category</label>
            <select className='filters-form__input' name="filter" onChange={props.handleSearchFormChange} value={props.filter} >
              <option value="All">Show All</option>
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
          </div>
          <div className='filters-form__group'>
            <label className='filters-form__label' >Sort by</label>
            <select className='filters-form__input' onChange={props.handleSearchFormChange} value={props.sort} name="sort">
              <option value="alphabetically">A-Z by Common Name</option>
              <option value="date">Most Recently Seen</option>
            </select>
          </div>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  ...state.sightings.filtersForm
})
export default connect(mapStateToProps, { handleSearchFormChange })(Filters)