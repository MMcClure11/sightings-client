import { connect } from 'react-redux'
import { handleSearchFormChange } from '../actions/sightings'

const Filters = (props) => {
  return(
    <form className='filters-form'>
       <div className='filters-form__group'>
          <input className='filters-form__input' placeholder='Search by common name' type="search" name="search" onChange={props.handleSearchFormChange} value={props.search} />
          <label className='filters-form__label' htmlFor='search'>Search by common name</label>
        </div>
        <div className='filters-form__group'>
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
          <label className='filters-form__label' htmlFor='filter'>Category</label>
        </div>
        <div className='filters-form__group'>
          <select onChange={props.handleSearchFormChange} value={props.sort} name="sort">
            <option value="alphabetically">A-Z by Common Name</option>
            <option value="date">Most Recently Seen</option>
          </select>
          <label>Sort by</label>
        </div>
    </form>
  )
}

const mapStateToProps = state => ({
  ...state.sightings.filtersForm
})
export default connect(mapStateToProps, { handleSearchFormChange })(Filters)