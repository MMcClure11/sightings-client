import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteComment, setFormDataForEditComment, resetFormDataForComment } from '../actions/sightings'
import CommentFormModal from '../containers/CommentFormModal'
import sprite from '../imgs/sprite.svg'

class CommentCard extends Component {

  state = {
    modal: false,
    heart: false
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

  onClickHeart = () => {
    this.setState({
      heart: !this.state.heart
    })
  }
  
  render(){
    const { username, content, currentUser, userId, id } = this.props
    return (
        <div className='comment'>
          <span className='comment__username'>{username}</span> 
          <span className='comment__content'>{content}</span>
          <button onClick={this.onClickHeart}>
            Like: { this.state.heart && '<3' }
          </button>
          { userId === currentUser.id && 
          <>
          <span>
            <span>
              <a href="#bottom" onClick={this.onClickOfEdit}>
                <svg className="icon icon--edit-comment u-margin-left-small">
                  <use href={sprite + '#icon-pencil2'} />
                </svg>
              </a>
            </span>
            <span>
              <a href="#bottom" onClick={this.onClick}>
                <svg className="icon icon--trash-comment">
                  <use href={sprite + '#icon-bin2'} />
                </svg>
              </a>
            </span>
          </span>
          <CommentFormModal display={this.state.modal} toggle={this.toggleModal} commentId={id} content={content}/>
          </>
          }
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      currentUser: state.currentUser.currentUser,
  }
}

export default connect(mapStateToProps, { setFormDataForEditComment, resetFormDataForComment, deleteComment })(CommentCard)