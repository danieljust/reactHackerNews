import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import PostsList from './features/posts/list/PostsList';
import Navbar from './components/Navbar';
import PostDetailed from './features/posts/details/PostDetailed';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar/>
                    <Route exact={true} path="/" component={PostsList}/>
                    <Route path="/posts/:postId" component={PostDetailed}/>
                </div>
            </Router>
        );
    }
}

export default connect()(App);
{/*<Route exact={true} path="/new" render={<TopicInfoContainer data={this.props.new}/>}/>*/}
