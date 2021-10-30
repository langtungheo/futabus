import {call, put, takeLatest} from 'redux-saga/effects';
import { GET_ALL_PROVINCES_POPULAR, SET_ALL_PROVINCE } from '../const/provincesConst';
import {ProvincesPopularServices} from '../../services/provincespopular/ProvincesService';

function* getAllProvincesPopularSaga(){
    try {
        const {data, status} = yield call(()=>(ProvincesPopularServices.getAllProvincesPopular()))
        if(status === 200){
            yield put({
                type : SET_ALL_PROVINCE,
                provinces : data
            })
        }
    } catch (error) {
        console.log(error)
        return error
    }
}

export function* actionGetAllProvince(){
    yield  takeLatest(GET_ALL_PROVINCES_POPULAR, getAllProvincesPopularSaga)
}