import PropTypes from "prop-types"
import React, { Component } from 'react'
import Conectado from "./Conectado"


class InfoPersona extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }

  render() {
    return (
      <div>
        <div className="container">
            <h1>{`${this.props.name} ${this.props.lastName}`}</h1>
            <h2>{this.props.email}</h2>
            <Conectado conect={this.props.conect} />
        </div>
      </div>
    )
  }

}

// eslint-disable-next-line react/no-typos
InfoPersona.PropTypes={
    name:PropTypes.string,
    lastName:PropTypes.string,
    email:PropTypes.string,
    conect:PropTypes.bool,
}

export default InfoPersona




