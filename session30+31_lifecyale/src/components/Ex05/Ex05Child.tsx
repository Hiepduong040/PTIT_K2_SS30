import React, { Component } from 'react'

interface Props {
    status: string;
}

export default class Ex05Child extends Component<any, Props> {
    render() {
        const { status } = this.props;
    
        return (
          <div>
            <h2>Status: {status}</h2>
          </div>
        );
      }
}