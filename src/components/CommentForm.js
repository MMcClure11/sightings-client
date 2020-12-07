import React from 'react'
import { connect } from 'react-redux'

const CommentForm = (props) => {

  return(
    <form>
       <label>
        Content:
        <textarea name="content" ></textarea>
      </label><br/>
      <br/>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default connect()(CommentForm)