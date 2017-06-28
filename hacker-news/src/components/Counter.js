import React, {Component} from 'react';
import {connect} from 'react-redux';
//https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty
export function loadData(data) {
    return (dispatch) => {
        dispatch({type: 'LOADING'});

        setTimeout(() => dispatch({type: 'LOADED', payload: data}), 1000);
    };
}

export function Counter(props) {
    const {onClick, pending, data} = props;

    return (
        <div >
            <button onClick={onClick}>Click me</button>
            { pending ? 'Loading...' : data }
        </div>
    );
}

export class CounterHOC extends Component {
    handleClick = () => {
        this.props.dispatch(loadData('qwerty'));
    };

    render() {
        return (
            <Counter
                onClick={this.handleClick}
                count={this.props.count}
                data={this.props.data}
                pending={this.props.pending}
            />
        );
    }
}

export default connect(state => ({
    pending: state.test.pending,
    data: state.test.data,
    count: state.count
}))(CounterHOC)
