import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteComment } from '../actions/sightings'

class CommentCard extends Component {

  onClick = () => {
    // alert(`delete ${this.props.id}`)
    this.props.deleteComment(this.props.id)
  }

  render(){
    const { username, content, currentUser, userId } = this.props
    return (
      <div>
        <p>{username}: {content}</p>
        { userId === currentUser.id && <button onClick={this.onClick}>Delete</button>}
      </div>
    )}
}

const mapStateToProps = state => {
  return {
      currentUser: state.currentUser,
  }
}

export default connect(mapStateToProps, { deleteComment })(CommentCard)