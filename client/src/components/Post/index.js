import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { idbPromise } from '../../utils/helpers';
import { useStoreContext } from '../../utils/Globalstate';
import { QUERY_POSTS } from '../../utils/queries';
import { UPDATE_POST } from '../../utils/actions';
import spinner from "../../assets/spinner.gif"
//import ForumItem from '../ForumItem';


const PostList = ({ }) => {
  const [state, dispatch] = useStoreContext();
  const { currentForum } = state;
  const { loading, data } = useQuery(QUERY_POSTS);
 console.log(currentForum);
 console.log(data);
  useEffect(() => {
    //console.log(data);
    if (data) {
      dispatch({
        type: UPDATE_POST,
        posts: data.posts
      });
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
    if (!currentForum) {
      return state.posts
    }
    return state.posts.filter(posts => posts.forum._id === currentForum);
  }
  console.log(state)
//console.log(state);
  return (
    <div className="my-2">
      <h2>Our Products:</h2>
      {state.posts.length ? (
        <div className="flex-row">
            {filterPost().map(posts => (
                <p>{posts.name}test</p>
                
            ))}
        </div>
      ) : (
        <h3>You haven't selected a forum yet!</h3>
      )}
      { loading ? 
      <img src={spinner} alt="loading" />: null}
    </div>
  );
}

export default PostList;