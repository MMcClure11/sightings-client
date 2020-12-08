import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editComment } from '../actions/sightings'

class CommentFormModal extends Component {

  state = {
    content: this.props.content
  }

  onChange = (event) => {
    this.setState({content: event.target.value})
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log('comment:', this.state.content, 'props:', this.props)
    this.props.editComment(this.state, this.props.commentId)
    this.props.toggle()
    this.setState({content: this.props.content})
  }

  render() {
    // console.log(this.state)
    const display = this.props.display ? "block" : "none"
    return (
      <div id="myModal" className="modal" style={{ display }}>
      <div className="modal-content">
        <span  onClick={this.props.toggle} className="close">&times;</span>
        <form onSubmit={this.onSubmit}>
        <label>
          Comment:
          <textarea type="text" name="content" value={this.state.content} onChange={this.onChange}></textarea>
        </label>
        <input className="btn btn--small" type="submit" value="Submit" />
      </form>
      </div>
    </div>
    )
  }
}

export default connect(null, { editComment})(CommentFormModal)
