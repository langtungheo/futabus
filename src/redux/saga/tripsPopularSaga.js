import {call, put, takeLatest} from 'redux-saga/effects';
import { TripsServices } from '../../services/trips/TripsServices';


function* getTripsPopular(action){
    try {
        const {data, status} = yield call(()=>(TripsServices.getTripsPopularAPI()))
        if(status === 200){
            yield put({
                type : "SET_TRIPS_POPULAR",
                trips : data
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export function* actionGetTripsPopular(){
    yield takeLatest("GET_TRIPS_POPULAR_SAT_GA", getTripsPopular)
}