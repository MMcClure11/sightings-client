import React, { Component } from 'react'

export default class SightingFormModal extends Component {

  state = {
  }

  render() {
    return (
      <div id="myModal" className="modal" style={{display: "block"}}>
        <div className="modal-content">
          <span className="close">&times;</span>
          <p>Some text in the Modal..</p>
        </div>
      </div>
    )
  }
}