import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavBar from './NavBar';
import Footer from './Footer';
import NewsFeed from './NewsFeed';
import ProfilePage from './ProfilePage';
import AddPhoto from './AddPhoto';
import Explore from './ExplorePage';
import Comments from './Comments';
import EditProfile from './EditProfile'


class Main extends Component {

render(){

    return (
      <Router>
        <div className="newsFeed">
          <NavBar/>
          <div className="scroll">
            <Switch>
              <Route path='/EditProfile' component= { EditProfile } />
              <Route path='/Newsfeed' component= { NewsFeed } />
              <Route path='/AddPhoto' component= { AddPhoto } />
              <Route path='/Explore' component= { Explore } />
              <Route path='/ProfilePage/:id' component = { ProfilePage }/>
              <Route path='/Comments' component = { Comments } />
              <Route path='/Main' component={ NewsFeed } />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}
export default Main;
