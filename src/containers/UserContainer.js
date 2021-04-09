import React  from 'react'

import { connect } from 'react-redux'
import { getUsers } from '../actions/users'

import UserCard from '../components/UserCard'

class UserContainer extends React.Component {

  componentDidMount(){
    this.props.getUsers()
  } 

  render() {
    return (
      <div>
        { this.props.users && this.props.users.map(user => <UserCard key={ user.id } user={user} />)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.users,
  }
}

export default (connect(mapStateToProps, { getUsers }))(UserContainer)