import React, {Component} from 'react';
import logo from './logo.svg';
import {connect} from 'react-redux';
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
                    <Route exact={true} path="/new" render={<TopicInfoContainer data={this.props.new}/>}/>
                </div>
            </Router>
        );
    }
}
function mapStateToProps(state) {
    return {
        new: state.topics.new
    }
}
export default connect(mapStateToProps)(App);
