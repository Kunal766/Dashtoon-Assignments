export const initialState = false;

export const waitReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGETOFALSE':
            return false
        case 'CHANGETOTRUE':
            return true
        default:
            return state
    }
};