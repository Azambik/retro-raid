import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_CATEGORIES } from '../utils/queries';
//import PostList from '../components/Post';
import { UPDATE_POST } from '../utils/actions';
import {useStoreContext } from  '../utils/Globalstate';
import { idbPromise } from "../utils/helpers";

const Forum = ({}) => {
    const [state, dispatch] = useStoreContext();
    const { currentForum } = state;
    const { loading, data: forumData } = useQuery(QUERY_CATEGORIES);
   // const posts = data?.posts || [];
    //console.log(posts);

    useEffect(() => { 
        if (data) {
            dispatch({
                type: UPDATE_POST,
                post: data.post
            });
            //coppying to indexeddb from helper function
            data.posts.forEach((post) => {
                idbPromise('forums', 'put', post);
            });
        } else if (!loading) {
            idbPromise('posts', 'get').then((posts) => {
                //use retrieved data to set global state for offline browsing 
                dispatch({
                    type: UPDATE_POST,
                    posts: posts
                });
            });
        }
    }, [data, loading, dispatch]);

    function filterForum() {
        if (!currentForum) {
          return state.post;
        }
        return state.post.filter(post => post.forum._id === currentForum);
    }

    return (
        <main>
            <div className='flex-row justify-space-between'>
                <div>
                    {filterPost}
                </div>
                
            </div>
        </main>
    );
};

export default Forum;