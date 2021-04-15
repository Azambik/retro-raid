import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_FORUM } from '../utils/queries';
//import PostList from '../components/Post';
import { UPDATE_FORUM, UPDATE_CURRENT_FORUM } from '../utils/actions';
import {useStoreContext } from  '../utils/Globalstate';
import { idbPromise } from "../utils/helpers";
import Post from '../components/Post'; 


const Forum = ({}) => {
    const [state, dispatch] = useStoreContext();
    const { forum } = state;
    const { loading, data } = useQuery(QUERY_FORUM);

    useEffect(() => { 
        if (data) {
            dispatch({
                type: UPDATE_FORUM,
                forum: data.Forums
                
            });
            data.Forums.forEach(forum => {
                idbPromise('forum', 'put', forum);
              });
        } else if (!loading) {
            idbPromise('forum', 'get').then((forum) => {
                //use retrieved data to set global state for offline browsing 
                dispatch({
                    type: UPDATE_FORUM,
                    forum: forum 
                });
            });
        }
    }, [data, dispatch]);

    const handleClick = id => {
        dispatch({
            type: UPDATE_CURRENT_FORUM,
            currentForum: {id}
        });
       
    };

    return (
        <main>
            <div className='flex-row justify-space-between'>
                <div>
                   <h2>Chose your dungeon</h2>
                   {forum.map(forum => (
                    <button
                    key={forum._id}
                    onClick={() => {
                        handleClick(forum._id);
                    }}
                    >
                     {forum.name}
                    </button>
                   ))}
                </div>
                
            </div>

            <Post/>
        </main>
    );
};

export default Forum;