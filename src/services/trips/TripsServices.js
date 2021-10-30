import axios from "axios"
import { BASE_URL } from "../../utils/globalConstant/globalConst";

export class tripsServices {
    getTripsPopularAPI = ()=>{
        return axios({
            url : `${BASE_URL}/trips/gettrippopular`,
            method : "GET"
        })
    }

    /**GET SCHEDULE */
    getScheduleAPI = (keyword) => {
        return axios({
            url : `${BASE_URL}/trips?schedule=${keyword}`,
            method : "GET"
        })
    }

    getToScheduleAPI = (keyword) => {
        return axios({
            url : `${BASE_URL}/trips?toschedule=${keyword}`,
            method : "GET"
        })
    }

    getSearchTripsAPI = (keyword) => {
        return axios({
            url : `${BASE_URL}/trips/searchtrips?from=${keyword}`,
            method : "GET"
        })
    }

    getFindTheBusAPI = (from, to) => {
        return axios({
            url : `${BASE_URL}/trips//searchtrips?from=${from}&to=${to}`,
            method : "GET"
        })
    }

}

export const TripsServices = new tripsServices()