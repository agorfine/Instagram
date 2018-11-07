import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavBar from './NavBar';
import Footer from './Footer';
import NewsFeed from './NewsFeed';
import ProfilePage from './ProfilePage';
import AddPhoto from './AddPhoto';
import Explore from './ExplorePage';
import Comments from './Comments'


class Main extends Component {

render(){
    const username = this.props.location && this.props.location.state.referrer

    return (
      <Router>
        <div className="newsFeed">
          <NavBar/>
          <div className="scroll">
            <Switch>
              <Route path='/Newsfeed' component= { NewsFeed } />
              <Route path='/AddPhoto' component= { AddPhoto } />
              <Route path='/Explore' component= { Explore } />
              <Route path='/ProfilePage/:id' />
              <Route path='/Comments' component = { Comments } />
              <Route path='/Main' component={ NewsFeed } />
            </Switch>
          </div>
          <Footer username= { username } />
        </div>
      </Router>
    )
  }
}
export default Main;
