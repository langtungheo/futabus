const trips = {
    tripsPopular : ""
}

const tripsReducers = (state = trips, action) => {
    switch (action.type) {
        case "SET_TRIPS_POPULAR":
            state.tripsPopular = action.trips;
            return {...state}
            
            
    
        default:
            return state;
    }
}

export default tripsReducers;