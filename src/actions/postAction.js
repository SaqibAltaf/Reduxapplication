import {FETCH_POSTS, NEW_POSTS} from './types';

export const fetchPosts = () => dispatch =>{
    console.log('fetching')
    fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(data => {
          dispatch({
              type : FETCH_POSTS,
              payload : data
          })
      })
}
