import React from 'react'

const UserCard = (props) => {
  console.log(props)

  return (
    <div>
      I am a user card for { props.user && props.user.name }
    </div>
  )
}

export default UserCard
