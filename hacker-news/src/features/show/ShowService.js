const P = require('promise');

export const fetchNewShows = () => fetch('https://hacker-news.firebaseio.com/v0/showstories.json')
    .then(response => response.json())
    .then(result => {
        const arrayOfIds = result;
        const futurePromises = [];
        for (let i = 0; i < 10; i++) {
            futurePromises.push(fetch(`https://hacker-news.firebaseio.com/v0/item/${arrayOfIds[i]}.json`));
        }
        return P.all(futurePromises);
    })
    .then(arrayOfPosts => {
        const myPosts = [];
        if (arrayOfPosts) {
            arrayOfPosts.map(singleResponse => {
                myPosts.push(singleResponse.json());
            })
        }
        return P.all(myPosts);
    });
