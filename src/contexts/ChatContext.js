import { createContext, useReducer, useContext } from 'react';

// Initial state and reducer from ChatReducer.js
import { initialState, chatReducer } from './ChatReducer';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [state, dispatch] = useReducer(chatReducer, initialState);

    return (
        <ChatContext.Provider value={{ state, dispatch }}>
            {children}
        </ChatContext.Provider>
    );
};

export const useChat = () => {
    const context = useContext(ChatContext);
    if (!context) {
        throw new Error('useChat must be used within a ChatProvider');
    }
    console.log("I am from useChat");
    return context;
};
