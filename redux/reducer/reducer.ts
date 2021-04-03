
const initialState = {
    number : 0,


};

export const _reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'LoginToggle':
            return {
                ...state,
                loginScreen: !state.loginScreen,
            };
        case 'LoginSuccess' :
            return {
                ...state,
                isAuthenticated : true
            }
        case 'LoginOut' :
            return {
                ...state,
                isAuthenticated : false
            }
        default:
            return state;
    }
}
