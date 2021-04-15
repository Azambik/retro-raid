import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { idbPromise } from '../../utils/helpers';
import { useStoreContext } from '../../utils/Globalstate';
import { QUERY_POST } from '../../utils/queries';
import { UPDATE_POST } from '../../utils/actions';
import spinner from "../../assets/spinner.gif"
import ForumItem from '../ForumItem';

const PostList = ({ }) => {
  const [state, dispatch] = useStoreContext();
  const { curentForum } = state;
  const { loading, data } = useQuery(QUERY_POST);
  console.log("this is the data" + data);
  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_POST,
        post: data.Post
      });
      data.post.forEach((post) => {
        idbPromise('posts', 'put', post);
      });
    } else if (!loading) {
      //idb undefind problems orinigaate here. 
      idbPromise('posts', 'get').then((post) => {
        dispatch({
          type: UPDATE_POST,
          post: post
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterPost(){
    if (!curentForum) {
      return state.post
    }
    return state.post.filter(post => post.forum._id === curentForum);
  }

  return (
    <div className="my-2">
      {state.post.length ? (
        <div className="flex-row">
          {filterPost().map(post => (
                <ForumItem 
                  key= {post._id}
                  _id={post._id}
                 
                  name={post.name}
                />
            ))}
        </div>
      ) : (
        <h3>?</h3>
      )}
      { loading ? 
      <img src={spinner} alt="loading" />: null}
    </div>
  );
}

export default PostList;