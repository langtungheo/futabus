import React from 'react'

export default function FooterComponent() {
    return (
        <div className="footer" style={{ backgroundColor: "#f6f6f6" }}>
            <div className="w-full flex py-10 sm:justify-center border-t-2 border-gray-500 border-opacity-70" >
                <div
                    style={{
                        maxWidth: "936px",
                        width: "100vw"
                    }}
                    className="md:grid md:grid-cols-3 lg:grid-cols-2">
                    <div className="pl-4 lg:pl-0 pr-8 md:col-span-2 lg:col-span-1">
                        <h2 className="uppercase text-gray-600 font-semibold">tổng đài đặt vé và cskh</h2>
                        <div className="flex md:justify-between">
                            <a href="tel:19001067" className="hover:text-red-600 text-3xl font-bold text-pre" >1900 6067</a>
                            <a href="/" >
                                <img className="ml-4 xs:ml-32 md:ml-0" src="./images/icon/DaDangKy.png" alt="" />
                            </a>
                        </div>
                        <div className="desc mb-5">
                            <p className="font-medium text-gray-600 tracking-tight mb-0">CÔNG TY CỔ PHẦN XE KHÁCH PHƯƠNG TRANG FUTA BUS LINES</p>
                            <p className="font-medium text-gray-600 mb-0"> Địa chỉ: 468-468A Lê Văn Lương, P.Tân Phong, Q.7, TP Hồ Chí Minh. </p>
                            <p className="font-medium text-gray-600">
                                Email : <a href="email:hotro@futabus.vn" className="hover:text-pre text-pre">hotro@futabus.vn</a>
                            </p>
                            <div className="flex justify-items-start">
                                <span >
                                    Điện thoại : <a className="text-green-500 hover:text-green-500" href="tel:028 3838 6852">028 3838 6852</a>
                                </span>&nbsp;&nbsp;&nbsp;
                                <span>
                                    Fax : <a className="text-green-500 hover:text-green-500" href="tel:028 3838 6853" >028 3838 6853</a>
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-items-center lg:justify-between">
                            <div className="">
                                <h2 className="uppercase font-semibold text-pre">kết nối với chúng tôi</h2>
                                <div className="flex">
                                    <a href="https://www.facebook.com/xephuongtrang" target="_blank" rel="noreferrer" className="mr-4">
                                        <img className="h-6 w-6" src="./images/icon/facebook.png" alt="" />
                                    </a>
                                    <a href="https://www.youtube.com/channel/UCs32uT002InnxFnfXCRN48A?view_as=subscriber" target="_blank" rel="noreferrer" className="">
                                        <img className="h-6 w-6" src="./images/icon/youtube.png" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="lg:ml-0">
                                <h2 className="uppercase font-semibold text-pre">tải app futa</h2>
                                <div className="flex justify-between">
                                    <a href="http://onelink.to/futa.ios" target="_blank" rel="noreferrer" className="mr-3 bg-gray-900 flex items-center justify-center py-1 px-3 rounded-xl text-white hover:text-white" >
                                        <img className="mr-1" src="./images/icon/apple.png" alt="" />
                                        <span className="">APP Store</span>
                                    </a>
                                    <a href="http://onelink.to/futa.android" target="_blank" rel="noreferrer" style={{ backgroundColor: "#4db515" }} className="flex items-center justify-center py-1 px-3 rounded-xl text-white hover:text-white" >
                                        <img className="mr-1" src="./images/icon/chplay.png" alt="" />
                                        <span>CH Play</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:grid-cols-1 px-4">
                        <h2 className="text-pre font-semibold">FUTA Bus Line</h2>
                        <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                            <div className="list-item1">
                                <div className="py-1">
                                    <a href="/" className="flex gap-1 items-center text-gray-500 hover:text-gray-500">
                                        <img className="w-2 h-3" src="./images/icon/double-right-arrow.png" alt="" />
                                        <span>Về chúng tôi</span>
                                    </a>
                                </div>
                                <div className="py-1">
                                    <a href="/" className="flex gap-1 items-center text-gray-500 hover:text-gray-500">
                                        <img className="w-2 h-3" src="./images/icon/double-right-arrow.png" alt="" />
                                        <span>Lịch trình</span>
                                    </a>
                                </div>
                                <div className="py-1">
                                    <a href="/" className="flex gap-1 items-center text-gray-500 hover:text-gray-500">
                                        <img className="w-2 h-3" src="./images/icon/double-right-arrow.png" alt="" />
                                        <span>Tin tức</span>
                                    </a>
                                </div>
                                <div className="py-1">
                                    <a href="/" className="flex gap-1 items-center text-gray-500 hover:text-gray-500">
                                        <img className="w-2 h-3" src="./images/icon/double-right-arrow.png" alt="" />
                                        <span>Tuyển dụng</span>
                                    </a>
                                </div>
                                <div className="py-1">
                                    <a href="/" className="flex gap-1 items-center text-gray-500 hover:text-gray-500">
                                        <img className="w-2 h-3" src="./images/icon/double-right-arrow.png" alt="" />
                                        <span>Tra cứu thông tin đặt vé</span>
                                    </a>
                                </div>
                            </div>
                            <div className="list-item2">
                            <div className="py-1">
                                    <a href="/" className="flex gap-1 items-center text-gray-500 hover:text-gray-500">
                                        <img className="w-2 h-3" src="./images/icon/double-right-arrow.png" alt="" />
                                        <span>Điều khoản sử dụng</span>
                                    </a>
                                </div><div className="py-1">
                                    <a href="/" className="flex gap-1 items-center text-gray-500 hover:text-gray-500">
                                        <img className="w-2 h-3" src="./images/icon/double-right-arrow.png" alt="" />
                                        <span>Hỏi đáp</span>
                                    </a>
                                </div><div className="py-1">
                                    <a href="/" className="flex gap-1 items-center text-gray-500 hover:text-gray-500">
                                        <img className="w-2 h-3" src="./images/icon/double-right-arrow.png" alt="" />
                                        <span>Hướng dẫn đặt vé trên Web</span>
                                    </a>
                                </div><div className="py-1">
                                    <a href="/" className="flex gap-1 items-center text-gray-500 hover:text-gray-500">
                                        <img className="w-2 h-3" src="./images/icon/double-right-arrow.png" alt="" />
                                        <span>Hướng dẫn đặt vé trên App</span>
                                    </a>
                                </div><div className="py-1">
                                    <a href="/" className="flex gap-1 items-center text-gray-500 hover:text-gray-500">
                                        <img className="w-2 h-3" src="./images/icon/double-right-arrow.png" alt="" />
                                        <span>Mạng lưới văn phòng</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="w-full flex justify-center">
                <div style={{
                    maxWidth: "936px",
                    width: "100%"
                }} className="border-b-2 border-opacity-70 border-gray-500 pb-4 mb-4 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="w-full flex xs:justify-center">
                        <img className="w-1/2 md:w-3/4" src="./images/logo/logo-footer_1.png" alt="" />
                    </div>
                    <div className="w-full flex xs:justify-center">
                        <img className="w-1/2 md:w-3/4" src="./images/logo/logo-footer_2.png" alt="" />
                    </div>
                    <div className="w-full flex xs:justify-center">
                        <img className="w-1/2 md:w-3/4" src="./images/logo/logo-footer_3.png" alt="" />
                    </div>
                    <div className="w-full flex xs:justify-center">
                        <img className="w-1/2 md:w-3/4" src="./images/logo/logo-footer_4.png" alt="" />
                    </div>
                </div>
               
            </div>
            <div className="w-full flex justify-center items-center mb-4">
            <div style={{
                    maxWidth: "936px",
                    width: "100%"
                }} className="flex items-center flex-col justify-center px-2">
                    <p className="license text-gray-500 tracking-tight text-center">© 2021 | Bản quyền thuộc về Công ty Cổ Phần Xe Khách Phương Trang FUTA Bus Lines | www.futabus.vn | Chịu trách nhiệm nội dung: Đinh Văn Huỳnh</p>
                    <p className="license text-gray-500 tracking-tight">
                        Hao_Nguyen clone với mục đích học tập !
                    </p>
                </div>
            </div>
        </div>
    )
}
