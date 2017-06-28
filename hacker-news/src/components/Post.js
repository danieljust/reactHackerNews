import React, {Component} from 'react';
import '../bootstrap/css/bootstrap.min.css';

export class Post extends Component {
    render() {
        return (
            <div className="row panel-default">
                <div className="panel-heading"><a href={this.props.data.url}>{this.props.data.title}</a></div>
                <div className="panel-body">
                    <div className="col-md-6 col-sm-6">
                        {this.props.data.score}
                    </div>
                    <div className="col-md-6 col-sm-6">
                        {this.props.data.by}
                    </div>
                </div>
            </div>
    );
    }
    }
