import { SET_USER } from "../const/userConst"

const user = {
    name : ''
}

const userReducers = (state = user, action)=> {
    switch (action.type) {
        case SET_USER:
            state.name = action.user;
            return {...state}
        
        default :
            return state
    }
}

export default userReducers;