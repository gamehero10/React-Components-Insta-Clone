/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

// Import the state hook
import React, {useState} from 'react';
// Import the Posts (plural!) and SearchBar components, since they are used inside App component
import Posts from './components/Posts/Posts';
import SearchBar from './components/SearchBar/SearchBar';
// Import the dummyData
import './App.css';
import dummyData from './dummy-data';

const App = () => {
  // Create a state called `posts` to hold the array of post objects, **initializing to dummyData**.
  // This state is the source of truth for the data inside the app. You won't be needing dummyData anymore.
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.
  const [posts,setPosts] = useState(dummyData);


  const likePost = postId => {
    /*
      This function serves the purpose of increasing the number of likes by one, of the post with a given id.

      The state of the app lives at the top of the React tree, but it wouldn't be fair for nested components not to be able to change state!
      This function is passed down to nested components through props, allowing them to increase the number of likes of a given post.

      Invoke `setPosts` and pass as the new state the invocation of `posts.map`.
      The callback passed into `map` performs the following logic:
        - if the `id` of the post matches `postId`, return a new post object with the desired values (use the spread operator).
        - otherwise just return the post object unchanged.
     */

        const updatedPosts = posts.map(post => {
          if(post.id === postId) {
            return {...post, likes: post.likes + 1};
          } else {
            return post;
          }
        })

        setPosts(updatedPosts);
  };

  

  /* 
  List of Higher Order Functions:
  1) Map -> Loop over an array, do something to each element, and return a new array.
  2) Filter -> Loop over an array, based on a certain condition, return particular elements into a new array
  3) Reduce -> Loop over an array and reduce it to a singular value.
  4) Find -> Loop over an array, based on a condition, return the first element it finds that matches that condition. 
  */

  return (
    <div className='App'> 
      {/* Add SearchBar and Posts here to render them */}
      <SearchBar />
      <Posts posts = {posts} likePost = {likePost}/>
      {/* Check the implementation of each component, to see what props they require, if any! */}
    </div>
  );
};

export default App;
