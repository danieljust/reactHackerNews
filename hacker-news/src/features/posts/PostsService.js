// var root = 'http://jsonplaceholder.typicode.com';
//
// $.ajax({
//     url: root + '/posts/1',
//     method: 'GET'
// }).then(function(data) {
// });
// console.log(data);

export const fetchPosts = () => fetch('http://jsonplaceholder.typicode.com/posts')
    .then(response => response.json());
export const fetchPost = (id) => fetch(`http://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json());
