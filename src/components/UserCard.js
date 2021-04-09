import React from 'react'

import { NavLink } from 'react-router-dom'


const UserCard = (props) => {

  return (
    <div>
      I am a user card for 
      <NavLink className='nav__link' to={`/users/${props.user.id}`}>
        { props.user && props.user.name }
      </NavLink>
    </div>
  )
}

export default UserCard
