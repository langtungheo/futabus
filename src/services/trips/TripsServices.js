import axios from "axios"
import { BASE_URL } from "../../utils/globalConstant/globalConst";

export class tripsServices {
    getTripsPopularAPI = ()=>{
        return axios({
            url : `${BASE_URL}/trips`,
            method : "GET"
        })
    }
}

export const TripsServices = new tripsServices()