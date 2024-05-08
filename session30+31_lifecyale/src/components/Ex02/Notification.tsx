import React, { Component } from 'react';

export default class Notification extends Component {
  componentWillMount() {
    console.log("Component đã được mount!");
  }

  render() {
    return (
      <div>
        <h3>Bài 2:</h3>
        Notification
        
      </div>
    );
  }
}