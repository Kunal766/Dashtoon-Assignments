// ChatReducer.js
export const initialState = [
];

export const chatReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return [...state, action.message];
        default:
            return state;
    }
};
