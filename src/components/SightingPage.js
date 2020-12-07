import React, { Component } from 'react'

export default class SightingPage extends Component {

  componentDidMount(){
    const id = this.props.match.params.id
    console.log(id)
  }

  render() {
    return (
      <div>
        Sighting Show Page
      </div>
    )
  }
}
