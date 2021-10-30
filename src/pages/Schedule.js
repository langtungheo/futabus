import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { Table, Input } from 'antd'
import { SearchOutlined } from "@ant-design/icons"
import SlidesComponent from '../Components/slides/SlidesComponent';
import { GET_SCHEDULE_SAGA, GET_TO_SCHEDULE_SAGA } from '../redux/const/tripsConst';
import { openNotificationWithIcon } from '../utils/libs/openNotification';

export default function Schedule(props) {
  const destcode = props.location.search.slice(6);
  const dispatch = useDispatch();
  const searchRef = useRef(null);
  const onChange = (e) => {
    if (searchRef.current) {
      clearTimeout(searchRef.current)
    }
    searchRef.current = setTimeout(() => {
      dispatch({
        type: GET_SCHEDULE_SAGA,
        keyWord: e.target.value
      })
    }, 500)
  }
  const onChangeTo = (e) => {
    if (searchRef.current) {
      clearTimeout(searchRef.current)
    }
    searchRef.current = setTimeout(() => {
      dispatch({
        type: GET_TO_SCHEDULE_SAGA,
        keyWord: e.target.value
      })
    }, 500)
  }

  const handleClick = () => {
      openNotificationWithIcon('warning', <span className="text-red-500">Xin lỗi</span>, "Chức năng đang trong qúa trình xây dựng !")
  }

  const { schedule } = useSelector(state => state.trips);
  const suffix = <SearchOutlined style={{ fontSize: "16px", color: "#ef5222", cursor: "pointer" }} />

  const columns = [
    {
      title: 'Tuyến xe',
      dataIndex: 'Name',
      width: "35%",
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
        return <button onClick={()=>{ handleClick() }} key={Date.now()} 
        className="btn-ticket px-1 sm:px-3 rounded-xl flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="38" height="39" viewBox="0 0 38 39" fill="#ef5222" fillRule="evenodd" className="ticket"><path fillRule="nonzero" d="M23.833 11.25v-4.5c0-1.249-.975-2.25-2.166-2.25H4.333c-1.191 0-2.155 1.001-2.155 2.25v4.5c1.191 0 2.155 1.012 2.155 2.25s-.964 2.25-2.166 2.25v4.5c0 1.238.975 2.25 2.166 2.25h17.334c1.191 0 2.166-1.012 2.166-2.25v-4.5c-1.191 0-2.166-1.012-2.166-2.25s.975-2.25 2.166-2.25zm-9.75 8.438h-2.166v-2.25h2.166v2.25zm0-5.063h-2.166v-2.25h2.166v2.25zm0-5.063h-2.166v-2.25h2.166v2.25z" transform="rotate(-45 23.243 9.257)"></path></svg>
          <span>Đặt vé</span>
        </button>
      }
    },

  ];


  useEffect(() => {
    window.scrollTo(0, 0);
    destcode
      ?dispatch({
      type: GET_TO_SCHEDULE_SAGA,
      keyWord: destcode
    })
    :dispatch({
      type: "GET_SCHEDULE_SAGA",
      keyWord: ""
    })
  }, [])
  return (
    <div className="container-cs overflow-hidden">
      <div className="row">
        <SlidesComponent />
        <div className="grid grid-cols-2 mt-5 mb-1 gap-3 px-2 lg:px-0">
          <Input suffix={suffix} onChange={onChange} placeholder="Nhập điểm đi" style={{ width: "100%", borderRadius: "20px" }} />
          <Input suffix={suffix} onChange={onChangeTo} placeholder="Nhập điểm đến" style={{ width: "100%", borderRadius: "20px" }} />
        </div>
        <div className="border-2 border-gray-500 rounded-b-md border-opacity-50 mb-10 shadow-md">
          <Table columns={columns} dataSource={schedule} pagination={false} 
          locale={{ emptyText: <h1 className={'text-white font-semibold text-xl'}>Không tìm thấy chuyến đi !</h1> }}
           scroll={{ y: 500 }} />
        </div>
      </div>
    </div>
  )
}
