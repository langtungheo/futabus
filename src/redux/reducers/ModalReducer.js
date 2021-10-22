import { SET_DISIBLE_MODAL, SET_VISIBLE_MODAL } from "../const/modalConst";

const modal = {
    visible : false,
    Component : ''
}

const modalReducer = (state = modal, action)=>{
    switch(action.type){
        case SET_VISIBLE_MODAL:
            state.visible = true;
            state.Component = action.Component
            return {...state}

        case SET_DISIBLE_MODAL:
            state.visible = false;
            state.Component = action.Component;
            return {...state}
        
        default :
            return {...state}
    }
}

export default modalReducer;