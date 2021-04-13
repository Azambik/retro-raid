import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ALL_FORUM } from '../utils/queries';
//import PostList from '../components/Post';
import {useStoreContext } from  '../utils/Globalstate';
import { idbPromise } from "../utils/helpers";

const Forum = () => {
    //const [state, dispatch] = useStoreContext();
    //const { loading, data } = useQuery(QUERY_ALL_FORUM);
   // const posts = data?.posts || [];
    //console.log(posts);

    return (
        <main>
            <div className='flex-row justify-space-between'>
                
            </div>
        </main>
    );
};

export default Forum;