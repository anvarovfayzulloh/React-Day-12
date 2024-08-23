import React from 'react'
import { useTranslation } from 'react-i18next'
import plpHero from "../../assets/plpHero.png"
import Cards from '../cards/Cards'
import { useFetch } from '../../hooks/useFetch'

const Hero = () => {
    const {t} = useTranslation()

    const data = useFetch("/products?limit=20");
    const products = data || [];

  return (
    <section>
        <div className="container max-w-[1512px] m-auto px-[242px] pb=">
            <div className='border-b pt-[52px] border-b-[#E5E5E5] pb-[24px] mb-[50px]' >
            <h2 className='text-[#333333] italic font-abeezee text-[24px] leading-[32px]' >
                {t("plphero-1")}    
            </h2>
            <img className='w-full pt-[17px] pb-[25px]' src={plpHero} alt="" />           
            <p className='text-[#333333] text-[17px] leading-[20px] font-abeezee' >
                {t("plphero-2")}    
            </p>  
            <p className='text-[#707070] font-abeezee text-[14px] leading-[16px] pt-[5px]' >
                {t("plphero-3")}    
            </p>    
            </div>    
            <Cards products={products} />
        </div>
    </section>
  )
}

export default Hero