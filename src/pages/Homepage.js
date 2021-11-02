import React, { useEffect } from 'react';
import QualityHonor from '../Components/main/QualityHonor';
import TripsSearch from '../Components/main/TripsSearch';
import SlidesComponent from '../Components/slides/SlidesComponent';
import { Image } from "react-image-and-background-image-fade";
import MoreInfo from '../Components/main/MoreInfo';
import {useDispatch} from 'react-redux'
import { GET_TRIPS_POPULAR_SAT_GA } from '../redux/const/tripsConst';
import ProvincesPopular from '../Components/main/ProvincesPopular';
import PopularTrips from '../Components/main/PopularTrips';

export default function Homepage() {
    const dispatch = useDispatch()
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch({
            type: GET_TRIPS_POPULAR_SAT_GA
        })

    }, [])
    return (
        <div >
            <div className="w-full">
                <Image
                    src={'./images/img/banner.png'}
                    width = "100%"
                    height= "auto"
                />
            </div>
            <TripsSearch />
            <SlidesComponent />
            <PopularTrips />
            <QualityHonor />
            <ProvincesPopular />
            <MoreInfo />

        </div>
    )
}
