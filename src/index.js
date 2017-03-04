import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Router, browserHistory, Route, IndexRoute } from 'react-router';
import * as firebase from 'firebase';
import Signin from './components/signin';
import Signup from './components/signup';
import Main from './components/main';
import DonateForm from './components/donateform';
import Thanks from './components/thanks';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarExampleIcon from './components/appbar';




var config = {
  apiKey: "AIzaSyBEK1o6x_f7lEi6EF7a9kClKSkCiUTjdnY",
  authDomain: "boilerplate-38ef6.firebaseapp.com",
  databaseURL: "https://boilerplate-38ef6.firebaseio.com",
  storageBucket: "boilerplate-38ef6.appspot.com",
  messagingSenderId: "543931778982"
};
firebase.initializeApp(config);


class Home extends React.Component {

  render() {
    return (
      <div>
        <MuiThemeProvider>
<center>
      <div>
        <h1>Home</h1>
        <Link to="/signin"><RaisedButton type="submit" primary={true} style={{margin: 12}}>Log In</RaisedButton></Link>
        <Link to="/signup"><RaisedButton type="submit" primary={true} style={{margin: 12}}>Sign Up</RaisedButton></Link>
      </div>
</center>
      </MuiThemeProvider>

      
      </div>
    )
  }
}


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={AppBarExampleIcon}>
      <IndexRoute component={Home} />
      <Route path="/signin" component={Signin}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/main" component={Main}/>
      <Route path="/donateform" component={DonateForm}/>
      <Route path="/thanks" component={Thanks}/>
    </Route>
  </Router>
  ,
  document.getElementById('root')
);
