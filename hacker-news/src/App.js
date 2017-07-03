import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import getComponent from './utils/getComponent';
import {Navbar} from './components/Navbar';
import PostDetailed from './features/posts/details/PostDetailed';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar/>
                    <Route path="/posts/:postId" component={PostDetailed}/>
                    <Route path="/new" component={getComponent('new')}/>
                    <Route path="/comments" component={getComponent('comments')}/>
                    <Route path="/show" component={getComponent('show')}/>
                    <Route path="/ask" component={getComponent('ask')}/>
                    <Route path="/jobs" component={getComponent('jobs')}/>
                </div>
            </Router>
        );
    }
}

export default connect()(App);
