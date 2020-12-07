import React from 'react'
import { connect } from 'react-redux'
import { commentFormChange } from '../actions/sightings'

const CommentForm = (props) => {

  const { content } = props.form

  return(
    <form>
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

export default connect(mapStateToProps, { commentFormChange })(CommentForm)