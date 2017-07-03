import React, {Component} from 'react';
import '../bootstrap/css/bootstrap.min.css'
import {Link} from 'react-router-dom';

export const Navbar = () => (
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-1 col-md-2">
                <Link to="/new">| new |</Link>
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
        </div>
    </div>
);

