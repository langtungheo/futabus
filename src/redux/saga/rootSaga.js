import { all } from "redux-saga/effects";
import { actionGetAllProvince } from "./provincesPopularSaga";
import { actionGetFindTheBus, actionGetSchedule, actionGetSearchTrips, actionGetToSchedule, actionGetTripsPopular } from "./tripsPopularSaga";

export function* rootSaga(){
    yield all([
        actionGetTripsPopular(),
        actionGetSchedule(),
        actionGetToSchedule(),
        actionGetSearchTrips(),
        actionGetFindTheBus(),
        actionGetAllProvince(),
        

        
    ])
};