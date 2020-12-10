import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editComment } from '../actions/sightings'
import CommentForm from './CommentForm'

class CommentFormModal extends Component {

  state = {
    content: this.props.content
  }

  onChange = (event) => {
    this.setState({content: event.target.value})
  }

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
        <CommentForm commentId={this.props.commentId} toggle={this.props.toggle} content={this.props.connect} />
        {/* <form className='sighting-form' onSubmit={this.onSubmit}>
        <div className='sighting-form__group'>
          <textarea className='sighting-form__input' type="text" name="content" value={this.state.content} onChange={this.onChange}></textarea>
          <label className='sighting-form__label'>Comment</label>
        </div>
        <input className="btn btn--small" type="submit" value="Edit" />
      </form> */}
      </div>
    </div>
    )
  }
}

export default connect(null, { editComment })(CommentFormModal)
