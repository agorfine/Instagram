import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavBar from './NavBar';
import Footer from './Footer';
import NewsFeed from './NewsFeed';
import ProfilePageSingle from './ProfilePageSingle';
import ProfilePage from './ProfilePage';
import AddPhoto from './AddPhoto';
import Explore from './ExplorePage';
import CommentsList from './CommentsList';
import EditProfile from './EditProfile';
import WebCam from './WebCam';
import LikesList from './LikesList'
import axios from 'axios';


class Main extends Component {

state={
  apiDataLoaded: false,
  apiData: [],
}

componentDidMount() {
    axios.get('/newsfeed')
    .then( res => {
      this.setState(prevState => ({
        apiDataLoaded: true,
        apiData: res.data.data
      }))
      console.log('this is res.data.data:', res.data.data)
    })
  }

render(){

    return (
      <Router>
        <div className="newsFeed">
          <NavBar/>
          <div className="scroll">
            <Switch>
              <Route path='/EditProfile' component= { EditProfile } />
              <Route path='/Newsfeed' render={(props)=> (<NewsFeed {...props} {...this.state.apiData} />) } />
              <Route path='/AddPhoto' component= { AddPhoto } />
              <Route path='/WebCam' component= { WebCam } />
              <Route path='/Explore' component= { Explore } />
              <Route path='/ProfilePage/:id' component = { ProfilePage } />
              <Route path='/ProfilePageSingle/:id' component = { ProfilePageSingle } />
              <Route path='/CommentsList' component = { CommentsList } />
              <Route path='/Likes' component = { LikesList } />
              <Route path='/Main' component={ NewsFeed } />
            </Switch>
          </div>
          <Footer data={this.state.apiData}/>
        </div>
      </Router>
    )
  }
}
export default Main;
