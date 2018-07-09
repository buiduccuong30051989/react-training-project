import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      name: '',
      password: '',
    }
  }

  onHandleNameChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  onHandlePasswordChange(e) {
    this.setState({
      password: e.target.value
    })
  }

  onHandeSubmit(e) {
    e.preventDefault();
    this.props.registerUser(this.state.name, this.state.password);
  }

  render() {
    return (
      <form onSubmit={this.onHandeSubmit.bind(this)}>
        <input onChange={this.onHandleNameChange.bind(this)} type='text' name='name' />
        <br />
        <br />
        <input onChange={this.onHandlePasswordChange.bind(this)} type='password' name='password' />
        <br />
        <br />
        <button type='submit'> Register </button>
      </form>
    );

  }
}

export default Home;
