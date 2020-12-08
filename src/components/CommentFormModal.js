import React, { Component } from 'react'

export default class CommentFormModal extends Component {

  state = {
    comment: this.props.content
  }

  onChange = (event) => {
    this.setState({comment: event.target.value})
  }

  render() {
    console.log(this.state)
    const display = this.props.display ? "block" : "none"
    return (
      <div id="myModal" className="modal" style={{ display }}>
      <div className="modal-content">
        <span  onClick={this.props.toggle} className="close">&times;</span>
        <form >
        <label>
          Comment:
          <textarea type="text" name="comment" value={this.state.comment} onChange={this.onChange}></textarea>
        </label>
        <input className="btn btn--small" type="submit" value="Submit" />
      </form>
      </div>
    </div>
    )
  }
}
