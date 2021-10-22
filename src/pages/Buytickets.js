import React, { useEffect } from 'react'
import { Tabs, Table } from 'antd'
import { openNotificationWithIcon } from '../utils/libs/openNotification';
import TripsSearch from '../Components/main/TripsSearch';
export default function Buytickets() {
    let trips = localStorage.getItem('trips')
    trips = JSON.parse(trips);
    const disctance = [];
    trips && trips.map(item => disctance.push(item.Distance))
    const minDisc = Math.min(...disctance)
    const maxDisc = Math.max(...disctance)
    const { TabPane } = Tabs;

    const columns = [
        {
            title: 'Tuyến xe',
            dataIndex: 'Name',
            width: "25%",
            className: "w-1/2",
            render: (text, record, index) => {
                return <span key={Date.now()} className="text-lg" style={{ color: "#ef5222" }}>{text}</span>
            }
        },
        {
            title: 'Loại xe',
            dataIndex: 'Kind',
        },
        {
            title: 'Quãng đường',
            dataIndex: 'Distance',
            render: (text, record, index) => {
                return <span key={Date.now()}>{Math.ceil(parseInt(text) / 1000)} km</span>
            },
            responsive: ["md"]
        },
        {
            title: 'Thời gian hành trình',
            dataIndex: 'Duration',
            render: (text, record, index) => {
                const hour = Math.floor(parseInt(text) / 3600);
                const minute = Math.ceil((parseInt(text) / 3600 - hour) * 60)
                return <span key={Date.now()}>{`${hour} giờ ${minute} phút`}</span>
            },
            responsive: ["md"]
        },
        {
            title: 'Giá vé',
            dataIndex: 'Price',
            render: (text, record, index) => {
                return <span key={Date.now()}>{parseInt(text).toLocaleString()} đ</span>
            },
            responsive: ["lg"]
        },
        {
            title: '',
            render: () => {
                return <button onClick={() => { handleClick() }} key={Date.now()}
                    className="btn-ticket px-3 rounded-xl flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="39" viewBox="0 0 38 39" fill="#ef5222" fillRule="evenodd" className="ticket"><path fillRule="nonzero" d="M23.833 11.25v-4.5c0-1.249-.975-2.25-2.166-2.25H4.333c-1.191 0-2.155 1.001-2.155 2.25v4.5c1.191 0 2.155 1.012 2.155 2.25s-.964 2.25-2.166 2.25v4.5c0 1.238.975 2.25 2.166 2.25h17.334c1.191 0 2.166-1.012 2.166-2.25v-4.5c-1.191 0-2.166-1.012-2.166-2.25s.975-2.25 2.166-2.25zm-9.75 8.438h-2.166v-2.25h2.166v2.25zm0-5.063h-2.166v-2.25h2.166v2.25zm0-5.063h-2.166v-2.25h2.166v2.25z" transform="rotate(-45 23.243 9.257)"></path></svg>
                    <span>Đặt vé</span>
                </button>
            }
        },

    ];

    const handleClick = () => {
        openNotificationWithIcon('warning', <span className="text-red-500">Xin lỗi</span>, "Chức năng đang trong qúa trình xây dựng !")
    }

    useEffect(() => {
        return () => {
            localStorage.removeItem('trips')
        }
    })
    return (
        <div className="container-cs" >
            <div className="row">
                {trips ? <div className="mt-4">
                    <div className="">
                        <span className="text-xl">Tìm thấy {trips.length} chuyến đi từ
                            <span style={{ color: "#ef5222" }}> {trips[0].OriginName} </span>
                            đến
                            <span style={{ color: "#ef5222" }}> {trips[0].DestName}</span></span>
                    </div>
                    <div className="border-2 border-gray-500 rounded-b-md border-opacity-50 mb-10 shadow-md">
                        <Table columns={columns} dataSource={trips} pagination={false}
                            locale={{ emptyText: <h1 className={'text-white font-semibold text-xl'}>Không tìm thấy chuyến đi !</h1> }}
                            scroll={{ y: 500 }} />
                    </div>
                </div>
                    : <TripsSearch />}
                <div className="mt-10 mb-5  md:my-5 tab-ticket">
                    <Tabs defaultActiveKey="1" centered>
                        <TabPane tab={<span className="uppercase font-bold">thông tin chung</span>} key="1">
                            {trips ? <div className="">
                                <p className="mb-0 font-bold text-xl" style={{ color: '#ef5222' }}>{trips[0].OriginName} ⇒ {trips[0].DestName}</p>
                                <p className="mb-0">Khoảng cách: <span className="font-bold text-black">{Math.floor(minDisc / 1000)} km ~ {Math.floor(maxDisc / 1000)} km</span></p>
                                <p className="mb-0">Thời gian: <span className="font-bold text-black">{Math.floor(parseInt(trips[0].Duration) / 3600)} h</span></p>
                                <p className="mb-0">* Lưu ý: thời gian đón và trung chuyển xe có thể thay đổi phụ thuộc vào mật độ giao thông tại từng thời điểm. Kính mong quý hành khách thông cảm!</p>
                            </div>
                                : <div className="">
                                    <p className="mb-0 font-bold text-xl" style={{ color: '#ef5222' }}></p>
                                    <p className="mb-0">Khoảng cách: <span className="font-bold text-black">0 km</span></p>
                                    <p className="mb-0">Thời gian: <span className="font-bold text-black">0 h</span></p>
                                    <p className="mb-0">* Lưu ý: thời gian đón và trung chuyển xe có thể thay đổi phụ thuộc vào mật độ giao thông tại từng thời điểm. Kính mong quý hành khách thông cảm!</p>
                                </div>}
                        </TabPane>
                        <TabPane tab={<span className="uppercase font-bold">điểm đón xe</span>} key="2">
                            Đang cập nhật...
                        </TabPane>
                        <TabPane tab={<span className="uppercase font-bold">điểm trung chuyển</span>} key="3">
                            Đang cập nhật...
                        </TabPane>
                    </Tabs>
                </div>
            </div>

        </div>
    )
}
