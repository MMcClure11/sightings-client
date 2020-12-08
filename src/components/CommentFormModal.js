import React, { Component } from 'react'

export default class CommentFormModal extends Component {
  render() {
    const display = this.props.display ? "block" : "none"
    // const display = "none"
    return (
      <div id="myModal" className="modal" style={{ display }}>
      <div className="modal-content">
        <span  onClick={this.props.toggle} className="close">&times;</span>
        <form >
        <label>
          Comment:
          <textarea type="text" name="notes"></textarea>
        </label>
        <input className="btn btn--small" type="submit" value="Submit" />
      </form>
      </div>
    </div>
    )
  }
}
