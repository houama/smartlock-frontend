const initialState = null

const auth = (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS' : 
            return action.payload

        case 'LOGIN_ERROR' :
            return action.payload

        case 'LOGOUT' :
            return null

        default : return state;
    }
}

export default auth