import axios from 'axios'
import { BASE_URL } from '../../utils/globalConstant/globalConst'

export class provincesServices {
    getAllProvincesPopular =  () => {
        return axios({
            method : "GET",
            url : `${BASE_URL}/provinces`
        })
    }
}

export const ProvincesPopularServices = new provincesServices()