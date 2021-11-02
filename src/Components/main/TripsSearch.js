import React, { useEffect, useState, useRef } from 'react';
import _ from 'lodash'
import { Radio, Select, Form, DatePicker } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { SearchOutlined } from '@ant-design/icons';
import moment from 'moment';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';
import {
	GET_FIND_BUS_SAGA,
	GET_SCHEDULE_SAGA,
	GET_SEARCH_TRIP_SAGA,
} from '../../redux/const/tripsConst';
import { openNotificationWithIcon } from '../../utils/libs/openNotification';
import {
	translationsEn,
	translationsVi,
} from '../../utils/globalConstant/translates';
function uniqByKeepFirst(a, key) {
	let seen = new Set();
	return a.filter((item) => {
		let k = key(item);
		return seen.has(k) ? false : seen.add(k);
	});
}

i18n.use(initReactI18next).init({
	resources: {
		en: { translation: translationsEn },
		vi: { translation: translationsVi },
	},
	lng: 'vi',
	fallbackLng: 'vi',
	interpolation: { escapeValue: false },
});

export default function TripsSearch(props) {
	const { t } = useTranslation();
	const [isVisibleDate, setVisibleDate] = useState(true);
	const [valueFrom, setValueFrom] = useState('TPHCM');
	const [form] = Form.useForm();

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

	const fromRef = useRef(null);
	const toRef = useRef(null);

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
		}
	};
	const handleClickArrow = async () => {
		dispatch({
			type: GET_SEARCH_TRIP_SAGA,
			keyWord: toRef.current.props.value,
		});
		_.delay(()=>{
			form.setFieldsValue({
				from : toRef.current.props.value,
				to : fromRef.current.props.value
			})
		}, 300)
		
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
						<span className="font-semibold ">{t('oneWay')}</span>
					</Radio>
					<Radio value={1}>
						<span className="font-semibold ">{t('roundTrip')}</span>
					</Radio>
				</Radio.Group>
				<Form
					form={form}
					onFinish={onFinished}
					layout="vertical"
					style={{ padding: '24px 0px' }}
					className="grid grid-cols-1 gap-2 md:grid-cols-2"
				>
					<div className="grid grid-cols-2 gap-4 relative">
						<Form.Item
							name="from"
							label={t('origin')}
							className="form-trips"
						>
							<Select
								className="w-full text-xl font-bold"
								placeholder={t('chooseOrigin')}
								onSelect={handleSelect}
								ref={fromRef}
								notFoundContent={
									<span className="text-red-700">
										Không tìm thấy điểm đi
									</span>
								}
							>
								{provineFrom}
							</Select>
						</Form.Item>
						<img
							className="form-trips__arrow"
							onClick={() => {
								handleClickArrow();
							}}
							src="./images/icon/arrowtrip.png"
							alt=""
						/>
						<Form.Item
							name="to"
							label={t('dest')}
							className="form-trips"
						>
							<Select
								notFoundContent={
									<span className="text-red-700">
										Vui lòng chọn điểm đi
									</span>
								}
								placeholder={t('chooseDestination')}
								className="text-xl font-bold"
								ref={toRef}
							>
								{provineTo}
							</Select>
						</Form.Item>
					</div>
					<div className="grid grid-cols-2 gap-4">
						<Form.Item
							name="from-date"
							label={t('departure')}
							className="form-trips"
							initialValue={moment(new Date(), 'YYYY-MM-DD')}
						>
							<DatePicker format={'DD-MM-YYYY'} />
						</Form.Item>
						<Form.Item
							name="to-date"
							label={t('return')}
							className="form-trips"
							initialValue={moment(new Date(), 'YYYY-MM-DD')}
						>
							<DatePicker
								disabled={isVisibleDate}
								format={'DD-MM-YYYY'}
							/>
						</Form.Item>
					</div>
					<button
						type="submit"
						className="btn-submit-trips flex justify-center items-center shadow-lg w-40"
					>
						<SearchOutlined style={{ color: '#fff' }} />
						<span className="uppercase text-white">
							{t('findBus')}
						</span>
					</button>
				</Form>
			</div>
		</div>
	);
}
