import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import Header from './header';
import Home from './home';
import Topics from './topics';
import Flag from './flag';
import Login from './login';
import { PublicLayout } from './layout/publicLayout';
import PrivateLayout from './layout/privateLayout';

class App extends React.Component {
  componentDidMount() {
    axios.get(`http://localhost:3000/user`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return(
      <BrowserRouter>
        <React.Fragment>
          <PublicLayout exact path='/' component={Home} />
          <PublicLayout path='/login' component={Login} />
          <PublicLayout path='/topics' component={Topics} />
          <PrivateLayout path='/flag' component={Flag} />
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

export default App;
