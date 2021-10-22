import React,{useState} from 'react'
import PhoneInput from 'react-phone-input-2';
import {useDispatch} from 'react-redux';
import 'react-phone-input-2/lib/style.css';
import { SET_DISIBLE_MODAL } from '../../redux/const/modalConst';
import { SET_USER } from '../../redux/const/userConst';
import { openNotificationWithIcon } from '../../utils/libs/openNotification';


export default function PhoneNumberLogin() {
    const [isActive, setActive] = useState(true);
    const [user, setUser] = useState('')
    const dispatch = useDispatch()
    const handeChangePhone = (phone) => {
        if(phone.length === 11){
            setActive(false)
            phone = phone.slice(-9);
            phone = '0' + phone;
            setUser(phone)
            
        }
        else{
            setActive(true)
        }
    }
    const handleClickNext = ()=>{
        localStorage.setItem('user', user);
        dispatch({
            type : SET_DISIBLE_MODAL,
            Component : ''
        })
        dispatch({
            type : SET_USER,
            user : user
        })
        openNotificationWithIcon('success', `Xin chào ${user}`)
    }
    
    return (
        <div className="m-5 flex flex-col justify-center items-center" style={{ maxWidth: "400px" }}>
            <div className="flex justify-center items-center">
                <img className='w-1/2' src="./images/logo/logo-footer_1.png" alt='' />
            </div>
            <div className="phone-login mt-5 flex flex-col justify-center items-center">
                <p className="font-semibold mb-1">Đăng nhập bằng số điện thoại</p>
                <PhoneInput
                    country={'vn'}
                    onChange={handeChangePhone}
                />
                <p className="text-center mt-5 mb-8">
                    Bằng việc nhấn nút Tiếp tục bạn đã đồng ý với các Điều khoản của FUTA
                </p>
            </div>
            <button style={isActive ?{backgroundColor: "#f2f2f2", cursor : 'unset', borderRadius : "24px", maxWidth : '320px'} : { backgroundColor: "#ef5222", borderRadius : "24px", maxWidth : '320px' }}
                className="w-full text-white text-lg h-12"
                disabled={isActive}
                type="button"
                onClick={()=>{handleClickNext()}}
            >
                Tiếp tục
            </button>
        </div>
    )
}
