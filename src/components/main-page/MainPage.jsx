import React, { Component } from 'react';

export default class MainPage extends Component {
    render() {
      const { children } = this.props;
    return <div>{children}</div>;
  }
}
