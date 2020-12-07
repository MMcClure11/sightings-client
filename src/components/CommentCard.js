import React from 'react'

const CommentCard = (props) => {
  const {username, content} = props
  return (
    <div>
      <p>{username}: {content}</p>
    </div>
  )
}

export default CommentCard