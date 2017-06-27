import React, {Component} from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';
import './bootstrap/css/bootstrap.min.css'
import {Link} from 'react-router-dom';

export class Navbar extends Component {
    render() {
        return (
            <div>
                    <Link to="/new">new</Link>
                    <Link to="/jobs">Jobs</Link>
            </div>
        );
    }
}
