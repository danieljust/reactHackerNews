import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar} from './components/Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import TopicInfoContainer from "./containers/TopicInfoContainer";
class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                    </div>
                    <Navbar/>
                    <Route exact={true} path="/" render={() =>
                        <h1>MAIN PAGE</h1>
                    }/>
                    <Route exact={true} path="/new" component={TopicInfoContainer}/>
                </div>
            </Router>
        );
    }
}

export default App;
