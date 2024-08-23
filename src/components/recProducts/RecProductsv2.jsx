import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import arrowrightblack from "../../assets/arrow-right_black.svg"
import { useTranslation } from 'react-i18next';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const RecProductsv2 = () => {
    const data = useFetch("/products?limit=10&skip=54");
    const products = data || [];
    const { t } = useTranslation();

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5, // Отображение 5 элементов за раз
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024, // Адаптация для среднего экрана
                settings: {
                    slidesToShow: 5,
                }
            },
        ]
    };

    return (
        <section>
            <div className="container max-w-[1512px] m-auto w-full px-[132px]">
                <div className='flex gap-[40px] mb-[48px]' >
                    <p className='text-[#191919] font-abeezee italic text-[24px] leading-[32px]' >
                        {t("recproducts3")}
                    </p>
                    <Link to={"/plp"} className='text-[#191919] font-abeezee italic text-[20px] leading-[18px] flex items-center gap-[8px]' >
                        {t("recproducts2")}
                        <img src={arrowrightblack} alt="" />
                    </Link>
                </div>
                <div className="product-carousel pb-[48px]">
                    <Slider {...settings}>
                        {products.map((product) => (
                            <div key={product.id} className="product-item outline-none">
                                <img src={product.thumbnail} className='bg-[#00000005] p-[5p]' />
                                <p className="price  font-abeezee pt-[10px] pb-[4px]">${product.price}</p>
                                {product.discountPercentage && <p className="discount font-abeezee text-[#707070] text-[14px] leading-[16px]">{t("discount")} {product.discountPercentage}%</p>}
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default RecProductsv2;
