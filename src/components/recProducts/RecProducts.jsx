import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import arrowrightblack from "../../assets/arrow-right_black.svg"
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const RecProducts = () => {
    const data = useFetch("/products?limit=7&skip=47");
    const products = data || [];
    const { t } = useTranslation();
    return (
        <section>
            <div className="container max-w-[1512px] m-auto w-full px-[132px]">
                <div className="flex px-[25px] justify-between w-full py-[48px]">
                    {products && products.length > 0 ? (
                        products.map((product) => (
                            <div key={product.id} className='flex flex-col items-center'>
                                <img className='w-[150px]' src={product.thumbnail} alt="" />
                                <p className='font-abeezee text-[14px] leading-[17px] text-center max-w-[122px]' >
                                    {product.title}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500 text-lg font-semibold mt-10 font-jakarta">
                            {t("loading")}
                        </p>
                    )}
                </div>
                <div className='flex gap-[40px] mb-[48px]' >
                    <p className='text-[#191919] font-abeezee italic text-[24px] leading-[32px]' >
                    {t("recproducts1")}
                    </p>
                    <Link to={"/plp"} className='text-[#191919] font-abeezee italic text-[20px] leading-[18px] flex items-center gap-[8px]' >
                    {t("recproducts2")}
                    <img src={arrowrightblack} alt="" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default RecProducts;
