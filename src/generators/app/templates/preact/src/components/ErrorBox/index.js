import { h, Component } from 'preact';
import styles from './styles.css';

export default class ErrorBox extends Component {
  componentDidMount() {
    console.error(this.props.error);
  }

  render() {
    return <pre className={styles.root}>{this.props.error.stack}</pre>;
  }
}
