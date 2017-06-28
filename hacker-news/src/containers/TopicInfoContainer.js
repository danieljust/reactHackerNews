import React, {Component} from 'react';
import 'whatwg-fetch';
import axios from 'axios';
import {Post} from '../components/Post';
const P = require('promise');

export default class TopicInfoContainer extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            fetching: true
        }
    }

    componentDidMount() {
        this.setState({fetching: true});
        axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
            .then(response => {
                const arrayOfIds = response.data;
                const futurePromises = [];
                for (let i = 0; i < 10; i++) {
                    futurePromises.push(axios.get(`https://hacker-news.firebaseio.com/v0/item/${arrayOfIds[i]}.json`));
                }
                return P.all(futurePromises);
            })
            .then(result => {
                const myPosts = [];
                if (result) {
                    result.map(singleResponse => {
                        myPosts.push(singleResponse.data);
                    })
                }
                this.setState({posts: myPosts, fetching: false})
            })
    }

    render() {
        const fetching = this.state.fetching;
        const jsxPosts = [];
        this.state.posts.map(post => {
            jsxPosts.push(<Post data={post}/>);
        });
        return (
            <div>
                {fetching ?
                    <h1>loading...</h1> :
                    (<div>{jsxPosts}</div>)
                }
            </div>)
    }
}
