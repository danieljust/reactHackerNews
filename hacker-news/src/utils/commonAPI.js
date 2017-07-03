const P = require('promise');

export const getLastestId = () => fetch('https://hacker-news.firebaseio.com/v0/maxitem.json')
    .then(response => response.json());
