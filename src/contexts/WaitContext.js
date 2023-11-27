import { createContext, useReducer, useContext } from 'react';

import { initialState, waitReducer } from './WaitReducer';

const WaitContext = createContext();

export const WaitProvider = ({ children }) => {
    const [state, dispatchwait] = useReducer(waitReducer, initialState);

    return (
        <WaitContext.Provider value={{ state, dispatchwait }}>
            {children}
        </WaitContext.Provider>
    );
};

export const useWait = () => {
    const context = useContext(WaitContext);
    if (!context) {
        throw new Error('useWait must be used within a WaitProvider');
    }
    console.log("I am from useWait");
    return context;
};
