import { all } from "redux-saga/effects";
import { actionGetTripsPopular } from "./tripsPopularSaga";

export function* rootSaga(){
    yield all([
        actionGetTripsPopular(),
        
    ])
};