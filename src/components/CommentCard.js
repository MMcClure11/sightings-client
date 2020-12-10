import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteComment, setFormDataForEditComment, resetFormDataForComment } from '../actions/sightings'
import CommentFormModal from './CommentFormModal'
import sprite from '../imgs/sprite.svg'

class CommentCard extends Component {

  state = {
    modal: false
  }

  onClick = () => {
    this.props.deleteComment(this.props.id)
  }

  onClickOfEdit = () => {
    this.setState({modal: true})
    this.props.setFormDataForEditComment(this.props.content)
  }

  toggleModal = () => {
    this.setState({modal: !this.state.modal})
    this.props.resetFormDataForComment()
  }

  render(){
    const { username, content, currentUser, userId, id } = this.props
    return (
      <>
        <p>{username}: {content}</p>
        { userId === currentUser.id && 
        <>
        <span>
              <a onClick={this.onClickOfEdit}>
                <svg className="icon icon--edit-comment">
                  <use href={sprite + '#icon-pencil2'} />
                </svg>
              </a>
              <a onClick={this.onClick}>
                <svg className="icon icon--trash-comment">
                  <use href={sprite + '#icon-bin2'} />
                </svg>
              </a>
          </span>
        <CommentFormModal display={this.state.modal} toggle={this.toggleModal} commentId={id} content={content}/>
        </>
        }
      </>
    )}
}

const mapStateToProps = state => {
  return {
      currentUser: state.currentUser,
  }
}

export default connect(mapStateToProps, { setFormDataForEditComment, resetFormDataForComment, deleteComment })(CommentCard)