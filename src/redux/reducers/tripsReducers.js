import { SET_SCHEDULE, SET_SEARCH_TRIPS, SET_TRIPS_POPULAR } from "../const/tripsConst";

const trips = {
    tripsPopular : "",
    schedule : "",
    province : ""
}

const tripsReducers = (state = trips, action) => {
    switch (action.type) {
        case SET_TRIPS_POPULAR:
            state.tripsPopular = action.trips;
            return {...state}
            
        case SET_SCHEDULE:
            state.schedule = action.schedule;
            return {...state}
        case SET_SEARCH_TRIPS :
            state.province = action.province
            return {...state}
    
        default:
            return state;
    }
}

export default tripsReducers;