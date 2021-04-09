import React from 'react'

import SightingContainer from '../containers/SightingContainer'

import { connect } from 'react-redux'
import { setSelectedUser, unsetUser } from '../actions/users'


class UserPage extends React.Component {

  componentDidMount(){
    const id = this.props.match.params.id
    this.props.setSelectedUser(id)
  }

  componentWillUnmount(){
    this.props.unsetUser()
  }

  render() {
    const { name, id, username } = this.props
    return (
      <>
        <div>
          <p>Hello! I am { name }!</p>
          <p>My username: { username }</p>
          <p>Followers: 0</p>
          <p>Following: 0</p>
          <button className='btn btn--small'>Follow</button>
        </div>
        <SightingContainer  />  
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.users.selectedUser
})

export default connect(mapStateToProps, { setSelectedUser, unsetUser })(UserPage)
