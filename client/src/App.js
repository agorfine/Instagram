import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import './css/login.css'

import LogInPage from './components/LogInPage';
import NewAccount from './components/NewAccount';
import NewsFeed from './components/NewsFeed';
import AddPhoto from './components/AddPhoto';
import Explore from './components/ExplorePage';
import ProfilePage from './components/ProfilePage'
import Comments from './components/Comments'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/CreateAccount' component= { NewAccount } />
          <Route path='/Newsfeed' component= { NewsFeed } />
          <Route path='/AddPhoto' component= { AddPhoto } />
          <Route path='/Explore' component= { Explore } />
          <Route path='/ProfilePage/:id' component = { ProfilePage } />
          <Route path='/Comments' component = { Comments } />
          <Route path='/' component= { LogInPage } />

          <Redirect to='/' />
        </Switch>
      </div>
    );
  }
}

export default App;
