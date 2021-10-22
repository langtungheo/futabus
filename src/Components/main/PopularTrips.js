import React, {memo} from 'react';
import { useSelector } from "react-redux"

function PopularTrips() {
    const arrIndex = [1, 2, 5, 6];
    const { tripsPopular } = useSelector(state => state.trips)
    const renderTripsPopular = tripsPopular ? tripsPopular?.map((trip, index) => {
        return <button key={index} className="transform scale-95 mb-5 hover:scale-100 duration-300 flex items-center shadow-lg rounded-md border-2 boder-gray-200">
            <div>
                <img style={{ minWidth: "160px", minHeight: "76px" }} src={trip.img} alt={trip.router} />
            </div>
            <div className="w-full" style={{ width: "-webkit-fill-available" }}>
                <p className={"text-md sm:text-xl md:text-2xl text-center font-extrabold mb-0"}
                    style={arrIndex.includes(index) ? { color: "#00613d" } : { color: "#ef5222" }}
                >{trip.router}</p>
                <div className="grid grid-cols-2 xs:grid-cols-3">
                    <div className="flex gap-1 justify-center items-center">
                        <i className="fas fa-map-marker-alt"></i>
                        <span className="text-gray-500">{trip.desc} km</span>
                    </div>
                    <div className="hidden xs:flex gap-1 justify-center items-center">
                        <i className="far fa-clock"></i>
                        <span className="text-gray-500">{trip.time} h</span>
                    </div>
                    <div className="flex gap-1 justify-center items-center">
                        <i className="fas fa-dollar-sign"></i>
                        <span className="text-yellow-700 font-bold">{trip.price}đ</span>
                    </div>
                </div>
            </div>
        </button>
    }) : ""
    return (
        <div className="container-cs" style={{ margin: "20px 0px" }}>
            <div className="row">
                <h2 className="uppercase font-bold text-lg text-pre pl-4 sm:pl-0">Tuyến phổ biến</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 px-5 md:px-0">
                    {renderTripsPopular}
                </div>
            </div>
        </div>
    )
}

export default memo(PopularTrips)