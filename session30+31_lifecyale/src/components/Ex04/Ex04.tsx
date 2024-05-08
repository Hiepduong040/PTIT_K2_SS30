import React, { Component } from 'react'

interface Slogan {
    slogan: string
}

export default class Ex04 extends Component<any, Slogan> {
    constructor (props: any) {
        super(props)
        this.state = {
            slogan: "Dương Hiệp đẹp trai !!!"
        }
    }

    shouldComponentUpdate(): boolean {
        return false
    }

    handleChange = () => {
        this.setState({
            slogan: "Dương Hiệp"
        })
    }
  render() {
    return (
      <div>
        <h2>Slogan: {this.state.slogan}</h2>
        <button onClick={this.handleChange}>Change State</button>
      </div>
    )
  }
}