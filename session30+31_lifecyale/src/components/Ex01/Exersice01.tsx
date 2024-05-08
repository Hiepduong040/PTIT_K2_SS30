import React, { Component } from 'react';

interface Props {}

interface State {
  userName: string;
}

export default class Exercise01 extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      userName: "Dương Hiệp",
    };
  }

  

  render() {
    return (
      <div>
        <h3>Bài 1:</h3>
        <p>Giá trị được in: {this.state.userName}</p>
      </div>
    );
  }
}