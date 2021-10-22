import {call, put, takeLatest} from 'redux-saga/effects';
import { TripsServices } from '../../services/trips/TripsServices';
import { GET_SCHEDULE_SAGA, GET_TO_SCHEDULE_SAGA, GET_TRIPS_POPULAR_SAT_GA, GET_SEARCH_TRIP_SAGA,SET_SEARCH_TRIPS,SET_SCHEDULE, SET_TRIPS_POPULAR, GET_FIND_BUS_SAGA } from '../const/tripsConst';
import {history} from '../../utils/globalConstant/historyGlobal'

function* getTripsPopular(action){
    try {
        const {data, status} = yield call(()=>(TripsServices.getTripsPopularAPI()))
        if(status === 200){
            yield put({
                type : SET_TRIPS_POPULAR,
                trips : data
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export function* actionGetTripsPopular(){
    yield takeLatest(GET_TRIPS_POPULAR_SAT_GA, getTripsPopular)
}

function* getScheduleSaga(action){
    try {
        const {data, status} = yield call(()=>(TripsServices.getScheduleAPI(action.keyWord)))
        if(status === 200){
            yield put({
                type : SET_SCHEDULE,
                schedule : data
            })
        }
        
    } catch (error) {
        console.log(error)
    }
}

export function* actionGetSchedule(){
    yield takeLatest(GET_SCHEDULE_SAGA, getScheduleSaga)
}

function* getToScheduleSaga(action){
    try {
        const {data, status} = yield call(()=>(TripsServices.getToScheduleAPI(action.keyWord)))
        if(status === 200){
            yield put({
                type : SET_SCHEDULE,
                schedule : data
            })
        }
        
    } catch (error) {
        console.log(error)
    }
}

export function* actionGetToSchedule(){
    yield takeLatest(GET_TO_SCHEDULE_SAGA, getToScheduleSaga)
}


function* getSearchTripsSaga(action){
    try {
        const {data, status} = yield call(()=>(TripsServices.getSearchTripsAPI(action.keyWord)))
        if(status === 200){
            yield put({
                type : SET_SEARCH_TRIPS,
                province : data
            })
        }
        
    } catch (error) {
        console.log(error)
    }
}

export function* actionGetSearchTrips(){
    yield takeLatest(GET_SEARCH_TRIP_SAGA, getSearchTripsSaga)
}

function* getFindTheBusSaga(action){
    try {
        const {data, status} = yield call(()=>(TripsServices.getFindTheBusAPI(action.from, action.to)))
        if(status === 200){
            yield put({
                type : SET_SEARCH_TRIPS,
                province : data
            })
            yield localStorage.setItem("trips", JSON.stringify(data))
            yield history.push('/mua-ve')
        }
        
    } catch (error) {
        console.log(error)
    }
}

export function* actionGetFindTheBus(){
    yield takeLatest(GET_FIND_BUS_SAGA, getFindTheBusSaga)
}

