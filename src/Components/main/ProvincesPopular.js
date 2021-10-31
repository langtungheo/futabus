import React, { useState, useEffect, memo } from 'react';
import Slider from 'react-slick';
import { useSelector, useDispatch } from 'react-redux';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import leftArrow from '../../assets/arrowSlie/left-arrow.svg';
import rightArrow from '../../assets/arrowSlie/right-arrow.svg';
import { GET_ALL_PROVINCES_POPULAR } from '../../redux/const/provincesConst';
import { Link } from 'react-router-dom';
import { translationsEn, translationsVi } from '../../utils/globalConstant/translates';

i18n
    .use(initReactI18next) 
    .init({
        resources: {
            en: { translation: translationsEn },
            vi: { translation: translationsVi },
        },
        lng: "vi",
        fallbackLng: "vi",
        interpolation: { escapeValue: false },
    });

const ProvincesPopular = () => {
	const {t} = useTranslation()
	const [slideIndex, setSlideIndex] = useState(0);
	const { provincesPopular } = useSelector((state) => state.provinces);
	const dispatch = useDispatch();

	const SlickArrowLeft = ({ currentSlide, slideCount, onClick }) => (
		<div
			className="cursor-pointer w-12 h-12 absolute top-1/2 left-1/4 transform -translate-y-1/2 sm:left-1/4 z-10 shadow-2xl border-2 border-gray-300 flex justify-center items-center bg-gray-300"
			style={{ borderRadius: '50%' }}
			onClick={onClick}
		>
			<img src={leftArrow} alt="prevArrow" />
		</div>
	);
	const SlickArrowRight = ({ currentSlide, slideCount, onClick }) => (
		<div
			className=" cursor-pointer w-12 h-12 absolute top-1/2 right-1/4 transform -translate-y-1/2 shadow-2xl border-2 border-gray-300 flex justify-center items-center bg-gray-300"
			style={{ borderRadius: '50%' }}
			onClick={onClick}
		>
			<img src={rightArrow} alt="nextArrow" />
		</div>
	);
	const settings = {
		className: 'center',
		centerMode: true,
		infinite: true,
		centerPadding: '0px',
		autoplay: true,
		slidesToShow: 7,
		slidesToScroll: 1,
		speed: 1000,
		prevArrow: <SlickArrowLeft />,
		nextArrow: <SlickArrowRight />,
		beforeChange: (prev, next) => {
			setSlideIndex(next);
		},
		responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
				},
			},
		],
	};

	useEffect(() => {
		dispatch({ type: GET_ALL_PROVINCES_POPULAR });
	});
	return (
		<>
			<div className="w-full flex flex-col justify-center items-center">
				<p
					className="uppercase text-xl md:text-3xl font-extrabold tracking-widest mb-2"
					style={{ color: '#ee5222' }}
				>
					{t('destinations')}
				</p>
				<p
					className="tracking-wide"
					style={{ color: '#004a2f', fontSize: 'min(22px,3.5vw)' }}
				>
					{t('tourist')}
				</p>
			</div>
			<div className="relative slide-provine">
				<Slider {...settings}>
					{provincesPopular
						? provincesPopular.map((province, index) => {
								return (
									<Link
										to={`/lich-trinh?dest=${province.DESNAME}`}
										className={
											slideIndex === index
												? ''
												: 'pointer-events-none'
										}
										key={index}
                                        
									>
										<div
											className={
												slideIndex === index
													? 'slideShow'
													: 'slideHide'
											}
										>
											<img
												className="w-full h-64 rounded-xl object-cover"
												src={province.img}
												alt={province.DESNAME}
											/>
											<div className="flex absolute justify-center items-center gap-2 transform translate-x-1/2  bottom-5 right-1/2">
												<i
													className="fas fa-map-marker-alt"
													style={{ color: 'white' }}
												></i>
												<span className="text-white text-xl">
													{province.DESNAME}
												</span>
											</div>
										</div>
									</Link>
								);
						  })
						: ''}
				</Slider>
			</div>
		</>
	);
};

export default memo(ProvincesPopular);
