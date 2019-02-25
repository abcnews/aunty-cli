import React from 'react';
import style from './style';

export default class ErrorBox extends React.Component {
  componentDidMount() {
    console.error(this.props.error);
  }

  render() {
    return <pre style={style}>{`${String(this.props.error)}\n\n${this.props.error.stack}`}</pre>;
  }
}
