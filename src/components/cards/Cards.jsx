import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Cards = ({ products }) => {
    const { t } = useTranslation()
    return (
        <div className='grid grid-cols-4 gap-x-[16px] gap-y-[10px] pb-[400px]' >
            {products && products.length > 0 ? (
                products.map((product) => (
                    <Link to={`/pdp/${product.id}`} key={product.id} className=''>
                        <img className='bg-[#0000000D] rounded-lg' src={product.thumbnail} alt="" />
                        <p className='font-abeezee text-[14px] leading-[18px] text-[#111820] pt-[5px] pb-[8px]' >
                            {product.description.slice(0, 47)}
                        </p>
                        <p className='inline pr-[20px] italic font-abeezee text-[#111820] text-[16px]' >
                            ${product.price}
                        </p>
                        <p className='inline font-abeezee italic text-[red]' >
                            {t("discount")} %{product.discountPercentage}
                        </p>
                        <p className='font-abeezee text-[#111820] text-[16px] leading-6' >
                            {t("warranty")} {product.warrantyInformation}
                        </p>
                        <p className='font-abeezee text-[#111820] text-[13px] leading-6' >
                            {t("delivery")} {product.shippingInformation}
                        </p>
                    </Link>
                ))
            ) : (
                <p className="text-center text-gray-500 text-lg font-semibold mt-10 font-jakarta">
                    {t("loading")}
                </p>
            )}
        </div>
    )
}

export default Cards