import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { idbPromise } from '../../utils/helpers';
import { useStoreContext } from '../../utils/Globalstate';
import { QUERY_POSTS } from '../../utils/queries';
import { UPDATE_POST } from '../../utils/actions';
import { Link, BrowserRouter as Router } from "react-router-dom";
import DisplayPost from '../DisplayPost'
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'

  }
};


const PostList = () => {
   
  const [state, dispatch] = useStoreContext();
  const { currentForum } = state;
  const { loading, data } = useQuery(QUERY_POSTS);
  const [modalIsOpen,setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
   
  }
  function closeModal(){
    setIsOpen(false);
  }
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
    console.log(posts)
  //  console.log(currentForum.id);
    if (currentForum) {
      posts = posts.filter(post => post.forum._id == currentForum.id);
     // console.log(posts)
    }
//console.log(posts) // confirm it made it this far with data. Otherwise currentForm and posts.forum._id might not actually match like we think.
    return posts.map(post => (<div><button key={post._id} onClick={openModal} ><p >{post.name}</p></button><Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel= {post.name}
      style={{
        overlay:{
          backgroundColor: 'rgba(0, 0, 0, 0'
        },
        content: {
          background: 'rgba(0, 0, 0, 0.75'
        }
      }}
    >
    
      <button onClick={closeModal}>Go back</button>
        <div>
          <DisplayPost></DisplayPost>
        </div>
        </Modal>
    </div>))
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

