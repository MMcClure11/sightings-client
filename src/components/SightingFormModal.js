import React, { Component } from 'react'

export default class SightingFormModal extends Component {

 

  render() {
    const display = this.props.display ? "block" : "none"
    return (
      <div id="myModal" className="modal" style={{ display }}>
        <div className="modal-content">
          <span onClick={this.props.toggle} className="close">&times;</span>
          <form >
          <label>
            Image URL:
            <input type="text" name="image"  />
          </label>
          <br/>
          <br/>
          <label>
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
          <br/>
          <label>
            Common Name:
            <input type="text" name="commonName"  />
          </label>
          <br/>
          <br/>
          <label>
            Scientific Name:
            <input type="text" name="scientificName"  />
          </label>
          <br/>
          <br/>
          <label>
            Notes:
            <textarea type="text" name="notes"  ></textarea>
          </label>
          <br/>
          <br/>
          <label>
            Date Seen:
            <input type="date" name="date"  />
          </label>
          <br/>
          <br/>
          <label>
            Is Identified?
          <input
            name="identified"
            type="checkbox"
         />
        </label>
          <br/>
          <br/>
          <input type="submit" value="Submit" />
        </form>
        </div>
      </div>
    )
  }
}
