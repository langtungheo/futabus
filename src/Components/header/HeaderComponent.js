import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Gravatar from 'react-gravatar';
import { useDispatch, useSelector } from "react-redux";
import { SET_VISIBLE_MODAL } from '../../redux/const/modalConst';
import PhoneNumberLogin from '../phoneInput/PhoneNumberLogin';
import { SET_USER } from '../../redux/const/userConst';

const arrMenu = [
    { title: "trang chủ", link: "/" },
    { title: "lịch trình", link: "/lich-trinh" },
    { title: "tin tức", link: "/" },
    { title: "tuyển dụng", link: "/" },
    { title: "liên hệ", link: "/" },
    { title: "hóa đơn", link: "/" },
    { title: "về chúng tôi", link: "/" },
]

export default function HeaderComponent() {
    const dispatch = useDispatch();
    const isMenu = sessionStorage.getItem("isMenu")
    const [isVisible, setVisible] = useState(false)
    const [activeMenu, setActiveMenu] = useState(parseInt(isMenu) || 0);
    const { name } = useSelector(state => state.user);
    const user = localStorage.getItem('user')

    const handleClick = () => {
        dispatch({
            type: SET_VISIBLE_MODAL,
            Component: <PhoneNumberLogin />
        })
    }

    const handlSignout = ()=>{
        dispatch({
            type : SET_USER,
            user : ""
        })
        localStorage.removeItem("user")
    }

    return (
        <>
            <div className="top-bar bg-white sticky top-0 shadow-lg md:shadow-xl flex-col items-center justify-center z-50">
                <div style={{ backgroundColor: "#26613c" }} className="w-full h-9 hidden sm:block overflow-hidden">
                    <div className="h-full flex items-center justify-center px-3 lg:px-0">
                        <div style={{
                            maxWidth: "936px",
                            width: "100vw"
                        }} className="h-full flex items-center">
                            <ul style={{
                                display: "flex",
                                alignItems: "center",
                                height: "100%",
                                marginBottom: "0px"
                            }}>
                                <li className="h-full flex items-center p-0 mr-5">
                                    <img src="./images/icon/telephone.png" alt="" className="h-3/4 w-3/4 mr-2" />
                                    <a className="text-white hover:text-white" href="tel:19006067">19006067</a>
                                </li>
                                <li className="h-full flex items-center p-0">
                                    <img src="./images/icon/email.png" alt="" className="h-3/4 w-3/4 mr-2" />
                                    <a className="hover:text-white text-white " href="mailto:hotro@futabus.vn">Hotro@futabus.vn</a>
                                </li>

                            </ul>
                            <div className="flex flex-end items-center h-full ml-auto" style={{ maxWidth: "100%" }}>
                                <a target="_blank" rel="noreferrer" className="h-full flex items-center" href="https://www.facebook.com/xephuongtrang" >
                                    <img className="h-3/4" src="./images/icon/facebook.png" alt="" />
                                </a>
                                <a target="_blank" rel="noreferrer" className="h-full flex items-center ml-4" href="https://www.youtube.com/channel/UCs32uT002InnxFnfXCRN48A?view_as=subscriber" >
                                    <img className="h-3/4" src="./images/icon/youtube.png" alt="" />
                                </a>
                                <div className="flex items-center h-full ml-4">
                                    <button className="h-full flex items-center">
                                        <img className="h-3/4" src="./images/icon/vietnam.png" alt="" />
                                        <span className="text-white">VN</span>
                                    </button>
                                    <button className="h-full flex items-center ml-6">
                                        <img className="h-3/4" src="./images/icon/united-kingdom.png" alt="" />
                                        <span className="text-white">EN</span>
                                    </button>

                                    <div style={{ padding: "2px 0px" }} className="h-full flex items-center">
                                        {name || user ? <div className="h-full">
                                            <div className="h-full flex items-center gap-2 ml-5">
                                                <Gravatar size={30} style={{borderRadius : "50%"}} email="langtungheo093@gmail.com" />
                                                <span className="text-white text-md ">{name || user}</span>
                                                <div onClick={() => {handlSignout()}} className="">
                                                <i className="text-white fas fa-sign-out-alt cursor-pointer"></i>
                                                </div>
                                            </div>
                                        </div>
                                            : <button onClick={() => { handleClick() }} className="h-full flex items-center gap-2 bg-red-500 ml-5 px-3 rounded-md">
                                                <img className="h-3/4" src="./images/icon/user.png" alt="" />
                                                <span className="text-white text-xs font-semibold">Đăng nhập</span>
                                            </button>

                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex py-3 relative items-center mx-auto" style={{ maxWidth: "936px", width: '100%' }}>
                    <a className="h-12 w-48" href="/">
                        <img className="h-12 w-48" src="./images/logo/logo.png" alt="" />
                    </a>
                    <div className="md:flex w-full justify-around items-center hidden" style={{ width: "-webkit-fill-available" }}>
                        {arrMenu.map((menu, index) => {
                            return <NavLink key={index} to={menu.link} style={activeMenu === index ? { color: "#ef5222" } : {}}
                                className="text-gray-500 menu-top duration-150  uppercase font-semibold "
                                onClick={() => {
                                    setActiveMenu(index);
                                    sessionStorage.setItem("isMenu", index)
                                }}
                            >{menu.title}</NavLink>
                        })}
                    </div>
                    <div className="md:hidden flex-end px-3" style={{ width: "-webkit-fill-available" }}>
                        {!isVisible ? <img onClick={() => {
                            setVisible(!isVisible)
                        }} className="h-10 ml-auto cursor-pointer" src="./images/icon/square.png" alt="" />
                            : <img onClick={() => {
                                setVisible(!isVisible)
                            }} className="h-8 ml-auto cursor-pointer" src="./images/icon/cancel.png" alt="" />
                        }
                    </div>
                </div>
                {isVisible
                    ? <div className="md:hidden flex-row flex-end visible-menu absolute bg-white w-full shadow-2xl duration-300">

                        <ul className="flex flex-col items-center duration-200">
                            {arrMenu.map((menu) => {
                                return <li>
                                    <NavLink onClick={() => { setVisible(false) }} to={menu.link} className="text-gray-500 uppercase font-semibold  items-end" >{menu.title}</NavLink>
                                </li>
                            })}
                            <li onClick={() => { handleClick() }} className="text-gray-500 uppercase font-semibold  items-end cursor-pointer" >Đăng nhập</li>
                        </ul>

                    </div>
                    : ""}
            </div>
        </>
    )
}
