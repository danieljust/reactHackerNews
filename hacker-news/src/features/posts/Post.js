import React, {Component} from 'react';
import '../../bootstrap/css/bootstrap.min.css';

export const Post = (props) => (
    <div className="row panel-default">
        <div className="panel-heading">{props.data.url ?
            <a href={props.data.url}>{props.data.title}</a> : props.data.title}</div>
        <div className="panel-body">
            <div class="row">
                <div className="col-md-6 col-sm-6">
                    {props.data.score}
                </div>
                <div className="col-md-6 col-sm-6">
                    {props.data.by}
                </div>
            </div>
            <div class="row">
                {props.data.text}
            </div>
        </div>
    </div>
);


