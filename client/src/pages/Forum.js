import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_FORUM } from '../utils/queries';
//import PostList from '../components/Post';
import { UPDATE_FORUM, UPDATE_CURRENT_FORUM } from '../utils/actions';
import {useStoreContext } from  '../utils/Globalstate';
import { idbPromise } from "../utils/helpers";

const Forum = ({}) => {
    const [state, dispatch] = useStoreContext();
    const { forum } = state;
    console.log(forum);
    const { loading, data } = useQuery(QUERY_FORUM);
   // const posts = data?.posts || [];
    //console.log(posts);

    useEffect(() => { 
        if (data) {
            console.log(data);
            dispatch({
                type: UPDATE_FORUM,
                forum: data.Forums
                
            });
            //console.log(forumData);
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
            currentCategory: id
        });
    };

    return (
        <main>
            <div className='flex-row justify-space-between'>
                <div>
                   <h2>Chose your dungeon</h2>
                   {forum.map(item => (
                    <button
                    key={item._id}
                    onClick={() => {
                        handleClick(item._id);
                    }}
                    >
                     {item.name}
                    </button>
                   ))}
                </div>
                
            </div>
        </main>
    );
};

export default Forum;