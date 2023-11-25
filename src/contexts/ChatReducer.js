// ChatReducer.js
export const initialState = [];

export const chatReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return [...state, action.message]
        case 'EDIT_LAST_MASSAGE':
            state.splice(-1)
            return [...state, action.message]
        default:
            return state
    }
};
