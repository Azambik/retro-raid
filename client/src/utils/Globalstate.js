import React, { createContext, useContext } from "react";
import { useForumReducer } from './reducers';
const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
    //create forum reducer 
    const [state, dispatch] = useForumReducer({
        //get things that need to be monitored for change and make a default array for them. 
        forum: [],
        posts: [],
        currentForum: '',
        displayPost: false
        
    })
    // used to confirm if working
   // console.log(state);
    return <Provider value={[ state, dispatch]} {...props} />
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };