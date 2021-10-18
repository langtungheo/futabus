import React from 'react'
import { Radio } from 'antd';

export default function TripsSearch() {
    return (
        <div className="container-cs" style={{ margin: "20px 0px" }}>
            <div className="row h-64 shadow-xl rounded-xl border-2 border-gray-50 px-10 py-5">
                <Radio.Group name="radiogroup" defaultValue={1}>
                    <Radio value={1}><span className="font-semibold ">Một chiều</span></Radio>
                    <Radio value={2}><span className="font-semibold ">Khứ hồi</span></Radio>
                </Radio.Group>
            </div>
        </div>
    )
}
