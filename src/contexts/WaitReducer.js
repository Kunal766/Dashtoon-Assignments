export const initialState = false;

export const waitReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGETOTRUE':
            return true
        case 'CHANGETOFALSE':
            return false
        default:
            return state
    }
};