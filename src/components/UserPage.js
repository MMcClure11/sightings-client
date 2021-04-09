import React from 'react'

class UserPage extends React.Component {

  componentDidMount(){
    const id = this.props.match.params.id
    console.log(id)  
  }

  render() {
    return (
      <div>
        I am a particular user's page
      </div>
    )
  }
}

export default UserPage
