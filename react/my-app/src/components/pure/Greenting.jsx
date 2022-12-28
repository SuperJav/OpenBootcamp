import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Greenting extends Component {

    constructor(props){
        super(props)
        this.state={
            age:29
        }
    }
  render() {
    return (
      <div>
        <h1>Hola {this.props.name}</h1>
        <h2>
            Tu edad es de: {this.state.age}
        </h2>
        <div>
            <button onClick={this.birthday}>Cumplir anos</button>
        </div>
      </div>
    )
  }




}


// eslint-disable-next-line react/no-typos
Greenting.PropTypes={
    name:PropTypes.string,
};

export default Greenting
