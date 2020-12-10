import React from 'react'
import { connect } from 'react-redux'
import { commentFormChange, editComment, submitComment } from '../actions/sightings'

const CommentForm = (props) => {

  const { content } = props.form

  const onSubmit = e => {
    e.preventDefault()
    if (props.commentId) {
      props.editComment(props.form, props.commentId)
      props.toggle()
    } else {
      props.submitComment({ ...props.form, sighting_id: props.sighting_id})
    }
  }
  
  return(
    <form className='sighting-form' onSubmit={ onSubmit }>
      <div className='sighting-form__group'>
        <textarea name="content" value={ content } onChange={props.commentFormChange}></textarea>
        <label className='sighting-form__label' htmlFor='content'>Comment</label><br/>
      </div>
      <input className="btn btn--small" type="submit" value="Submit" />
    </form>
  )
}

const mapStateToProps = state => ({
  form: state.sightings.commentForm
})

export default connect(mapStateToProps, { commentFormChange, editComment, submitComment })(CommentForm)