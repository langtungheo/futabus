import { SET_ALL_PROVINCE } from "../const/provincesConst"

const province = {
    provincesPopular : []
}

const provincesReducer = (state = province, action) => {
    switch (action.type) {

    case SET_ALL_PROVINCE:
        state.provincesPopular = action.provinces
        return { ...state}

    default:
        return state
    }
}

export default provincesReducer;
