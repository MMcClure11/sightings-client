import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editComment } from '../actions/sightings'

class CommentFormModal extends Component {

  state = {
    comment: this.props.content
  }

  onChange = (event) => {
    this.setState({comment: event.target.value})
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log('comment:', this.state.comment, 'props:', this.props)
    this.props.editComment(this.state.comment, this.props.commentId)
    this.props.toggle()
    this.setState({comment: this.props.content})
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
          <textarea type="text" name="comment" value={this.state.comment} onChange={this.onChange}></textarea>
        </label>
        <input className="btn btn--small" type="submit" value="Submit" />
      </form>
      </div>
    </div>
    )
  }
}

export default connect(null, { editComment})(CommentFormModal)
