import React from 'react'
import { connect } from 'react-redux'
import { commentFormChange, submitComment } from '../actions/sightings'

const CommentForm = (props) => {

  const { content } = props.form

  const onSubmit = e => {
    e.preventDefault()
    props.submitComment({ ...props.form, sighting_id: props.sighting_id})
  }

  return(
    <form onSubmit={ onSubmit }>
       <label>
        Content:
        <textarea name="content" value={ content } onChange={props.commentFormChange}></textarea>
      </label><br/>
      <br/>
      <input type="submit" value="Submit" />
    </form>
  )
}

const mapStateToProps = state => ({
  form: state.sightings.commentForm
})

export default connect(mapStateToProps, { commentFormChange, submitComment })(CommentForm)