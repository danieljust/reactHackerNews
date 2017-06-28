import React, {Component} from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';
import '../bootstrap/css/bootstrap.min.css'
import {Link} from 'react-router-dom';

export class Navbar extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-1 col-md-2">
                        <Link to="/new">| new |</Link>
                    </div>
                    <div className="col-lg-1 col-md-2">
                        <Link to="/comments">| comments |</Link>
                    </div>
                    <div className="col-lg-1 col-md-2">
                        <Link to="/show">| show |</Link>
                    </div>
                    <div className="col-lg-1 col-md-2">
                        <Link to="/ask">| ask |</Link>
                    </div>
                    <div className="col-lg-1 col-md-2">
                        <Link to="/jobs">| jobs |</Link>
                    </div>
                    <div className="col-lg-1 col-md-2">
                        <Link to="/submit">| submit |</Link>
                    </div>
                </div>
            </div>);
    }
}
