import React from 'react'

export default function Filter(props){
  return(
  <nav className="filterWrapper">
    <label>Filter by Category:</label>
    <select onChange={props.updateFilterState} value={props.filter} name="filter">
      <option value="All">All</option>
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
  </nav>
  )

}