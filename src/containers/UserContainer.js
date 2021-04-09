import React  from 'react'

import { connect } from 'react-redux'
import { getUsers } from '../actions/users'

import UserCard from '../components/UserCard'

class UserContainer extends React.Component {

  componentDidMount(){
    this.props.getUsers()
  } 

  currentUserFilter = () => {
    return this.props.users.filter(user => user.id !== this.props.currentUser.id)
  }

  render() {
    return (
      <div>
        { this.props.users && this.currentUserFilter().map(user => <UserCard key={ user.id } user={user} />)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.users,
    currentUser: state.currentUser.currentUser
  }
}

export default (connect(mapStateToProps, { getUsers }))(UserContainer)