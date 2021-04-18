import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { idbPromise } from '../../utils/helpers';
import { useStoreContext } from '../../utils/Globalstate';
import { QUERY_POSTS } from '../../utils/queries';
import { UPDATE_POST } from '../../utils/actions';
import spinner from "../../assets/spinner.gif"
import ForumItem from '../ForumItem';
//import { port } from '../../../../server/config/connection';


const PostList = ({ }) => {
  const [state, dispatch] = useStoreContext();
  const { currentForum } = state;
  const { loading, data } = useQuery(QUERY_POSTS);
 //console.log(currentForum);
 //console.log(data.posts[0].forum._id);
 //console.log(state)
 //console.log(currentForum);
  useEffect(() => {
    //console.log(data);
    if (data) {
      dispatch({
        type: UPDATE_POST,
        posts: data.posts
      });
      //console.log(data);
      data.posts.forEach((posts) => {
        idbPromise('posts', 'put', posts);
      });
    } else if (!loading) {
      //idb undefind problems orinigaate here. 
      idbPromise('posts', 'get').then((posts) => {
        dispatch({
          type: UPDATE_POST,
          posts: posts
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterPost(){
    let posts = state.posts;
   // console.log(posts[0].forum._id)
  //  console.log(currentForum.id);
    if (currentForum) {
      posts = posts.filter(post => post.forum._id == currentForum.id);
    //  console.log(posts)
    }
//console.log(posts) // confirm it made it this far with data. Otherwise currentForm and posts.forum._id might not actually match like we think.
    return posts.map(post => (<p key={post._id}>{post.name}</p>))
  }
//console.log(state);
  return (
    <div className="my-2">
      <h2>Available dungeon!:</h2>
        <div className="flex-row">
            {filterPost()}
        </div>
     
    </div>
  );
}

export default PostList;