import React, { createContext, useContext } from 'react';
const storeContext = createContext();
const { provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
    //create forum reducer 
    const {state, dispatch} = useForumReducer({
        //get states needed
    })
    // used to confirm if working
    console.log(state);
    return <Provider value={[ state, dispatch]} {...props} />
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };