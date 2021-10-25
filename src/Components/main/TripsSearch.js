import React, { useEffect, useState, useRef } from 'react';
import { Radio, Select, Form, DatePicker } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { SearchOutlined } from '@ant-design/icons';
import moment from 'moment';
import {
	GET_FIND_BUS_SAGA,
	GET_SCHEDULE_SAGA,
	GET_SEARCH_TRIP_SAGA,
} from '../../redux/const/tripsConst';
import { openNotificationWithIcon } from '../../utils/libs/openNotification';
function uniqByKeepFirst(a, key) {
	let seen = new Set();
	return a.filter((item) => {
		let k = key(item);
		return seen.has(k) ? false : seen.add(k);
	});
}

export default function TripsSearch(props) {
	const [isVisibleDate, setVisibleDate] = useState(true);
	const { Option } = Select;
	const dispatch = useDispatch();
	const { schedule, province } = useSelector((state) => state.trips);
	const dataFrom = schedule
		? uniqByKeepFirst(schedule, (item) => item.OriginCode)
		: [];
	const dataTo = province
		? uniqByKeepFirst(province, (item) => item.DestCode)
		: [];
	const provineFrom = dataFrom.map((origin, index) => {
		return (
			<Option key={index} value={origin.OriginCode}>
				{origin.OriginName}
			</Option>
		);
	});
	const provineTo = dataTo.map((origin, index) => {
		return (
			<Option key={index} value={origin.DestCode}>
				{origin.DestName}
			</Option>
		);
	});

	const searchRef = useRef(null);

	const onchaneRadio = (e) => {
		setVisibleDate(!isVisibleDate);
	};

	const handleSelect = (value) => {
		dispatch({
			type: GET_SEARCH_TRIP_SAGA,
			keyWord: value,
		});
	};

	const onFinished = (values) => {
		const { from, to } = values;
		if (from && to) {
			dispatch({
				type: GET_FIND_BUS_SAGA,
				from: from,
				to: to,
			});
		} else {
			openNotificationWithIcon('error', 'vui lòng chọn các trường !');
			console.log(searchRef.current);
			searchRef.current.focus();
		}
	};

	useEffect(() => {
		dispatch({
			type: GET_SCHEDULE_SAGA,
			keyWord: '',
		});
	}, []);
	return (
		<div className="container-cs" style={{ margin: '20px 0px' }}>
			<div className="row shadow-xl rounded-xl border-2 border-gray-50 px-10 py-5 relative">
				<Radio.Group
					name="radiogroup"
					onChange={onchaneRadio}
					defaultValue={0}
				>
					<Radio value={0}>
						<span className="font-semibold ">Một chiều</span>
					</Radio>
					<Radio value={1}>
						<span className="font-semibold ">Khứ hồi</span>
					</Radio>
				</Radio.Group>
				<Form
					onFinish={onFinished}
					layout="vertical"
					style={{ marginTop: '20px' }}
					className="grid grid-cols-1 gap-2 md:grid-cols-2"
				>
					<div className="grid grid-cols-2 gap-1">
						<Form.Item
							name="from"
							label="Điểm đi"
							className="form-trips"
						>
							<Select
								className="w-full"
								placeholder="Chọn điểm đi"
								showSearch={true}
								onSelect={handleSelect}
								ref={searchRef}
                                notFoundContent={
									<span className="text-red-700">
										Không tìm thấy điểm đi
									</span>
								}
							>
								{provineFrom}
							</Select>
						</Form.Item>
						<Form.Item
							name="to"
							label="Điểm đến"
							className="form-trips"
						>
							<Select
								notFoundContent={
									<span className="text-red-700">
										Vui lòng chọn điểm đi
									</span>
								}
								placeholder="Chọn điểm đến"
                                showSearch={true}
							>
								{provineTo}
							</Select>
						</Form.Item>
					</div>
					<div className="grid grid-cols-2 gap-1">
						<Form.Item
							name="from-date"
							label="Ngày đi"
							className="form-trips"
						>
							<DatePicker
								defaultValue={moment('2021-10-21', 'DD-MM-YYY')}
							/>
						</Form.Item>
						<Form.Item
							name="to-date"
							label="Ngày về"
							className="form-trips"
						>
							<DatePicker
								disabled={isVisibleDate}
								defaultValue={moment('2021-10-20', 'DD-MM-YYY')}
							/>
						</Form.Item>
					</div>
					<button
						type="submit"
						className="btn-submit-trips flex justify-center items-center shadow-lg"
					>
						<SearchOutlined style={{ color: '#fff' }} />
						<span className="uppercase text-white">
							Tìm chuyến xe
						</span>
					</button>
				</Form>
			</div>
		</div>
	);
}
