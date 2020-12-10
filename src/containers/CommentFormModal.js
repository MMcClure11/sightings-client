import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editComment } from '../actions/sightings'
import CommentForm from '../components/CommentForm'

class CommentFormModal extends Component {

  onSubmit = (event) => {
    event.preventDefault();
    this.props.editComment(this.state, this.props.commentId)
    this.props.toggle()
  }

  render() {
    const display = this.props.display ? "block" : "none"
    return (
      <div id="myModal" className="modal" style={{ display }}>
      <div className="modal__content">
        <span  onClick={this.props.toggle} className="close">&times;</span>
        <CommentForm commentId={this.props.commentId} toggle={this.props.toggle} />
      </div>
    </div>
    )
  }
}

export default connect(null, { editComment })(CommentFormModal)
