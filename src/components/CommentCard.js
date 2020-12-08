import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteComment } from '../actions/sightings'
import CommentFormModal from './CommentFormModal'

class CommentCard extends Component {

  state = {
    modal: false
  }

  onClick = () => {
    this.props.deleteComment(this.props.id)
  }

  onClickOfEdit = () => {
    this.setState({modal: true})
  }

  toggleModal = () => this.setState({modal: !this.state.modal})

  render(){
    const { username, content, currentUser, userId, id } = this.props
    return (
      <div>
        <p>{username}: {content}</p>
        { userId === currentUser.id && 
        <>
        <button className="btn btn--small" onClick={this.onClickOfEdit}>Edit</button>
        <button className="btn btn--small" onClick={this.onClick}>Delete</button>
        <CommentFormModal display={this.state.modal} toggle={this.toggleModal} commentId={id} content={content}/>
        </>
        }
      </div>
    )}
}

const mapStateToProps = state => {
  return {
      currentUser: state.currentUser,
  }
}

export default connect(mapStateToProps, { deleteComment })(CommentCard)