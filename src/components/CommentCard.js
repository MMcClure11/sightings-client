import React from 'react'

const CommentCard = (props) => {
  const {username, content} = props
  return (
    <div>
      <h6>Comments: </h6>
      <p>{username}: {content}</p>
    </div>
  )
}

export default CommentCard