import { connect } from 'react-redux'
import { handleSearchFormChange } from '../actions/sightings'

const Filters = (props) => {
  return(
    <form className='filters-form'>
       <div className='filters-form__group'>
          <input className='filters-form__input' placeholder='Search by common name' type="search" name="search" onChange={props.handleSearchFormChange} value={props.search} />
          <label className='filters-form__label' htmlFor='search'>Search by common name</label>
        </div>
    </form>
  )
}

const mapStateToProps = state => ({
  ...state.sightings.filtersForm
})
export default connect(mapStateToProps, { handleSearchFormChange })(Filters)

























// import React from 'react'

// export default function Filter(props){
//   return(
//   <div>
//     <label>Filter by Category:</label>
//     <select onChange={props.upsearchFilterState} value={props.filter} name="filter">
//       <option value="All">All</option>
//       <option value="Bird">Bird</option>
//       <option value="Freshwater Creature">Freshwater Creature</option>
//       <option value="Fungus">Fungus</option>
//       <option value="Insect">Insect</option>
//       <option value="Mammal">Mammal</option>
//       <option value="Plant">Plant</option>
//       <option value="Reptile">Reptile</option>
//       <option value="Salt Water Creature">Salt Water Creature</option>
//       <option value="Other">Other</option>
//     </select>
//     <label>Sort by:</label>
//     <select onChange={props.upsearchSortState} value={props.sort} name="sort">
//       <option value="Alphabetically">A-Z by Common Name</option>
//       <option value="search">Most Recently Seen</option>
//     </select>
//     <form onSubmit={props.searchSubmit}>
//       <label>Search by</label>
//       <select onChange={props.upsearchSearchState} value={props.searchOption} name="searchOption">
//         <option value="commonName">Common Name</option>
//         <option value="username">Username</option>
//       </select>
//       <input type="text" name="search" value={props.search} onChange={props.upsearchSearchState}/>
//       <input className="btn btn--small" type="submit" />
//     </form>
//   </div>
//   )

// }