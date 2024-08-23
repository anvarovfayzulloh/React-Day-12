import React from 'react'
import logo from "../../assets/logo.png"
import arrowrightblack from "../../assets/arrow-right_black.svg"
import featured from "../../assets/featured.png"
import featured2 from "../../assets/featured2.png"
import { useTranslation } from 'react-i18next'

const Featured = () => {
  const {t} = useTranslation()
  return (
    <section>
        <div className="container w-full max-w-[1512px] m-auto px-[132px]">
            <div className="featured__wrapper flex  mb-[64px]">
                <div className='pl-[24px] pt-[20px] max-w-[452px] w-full border-y border-y-[#CCCCCC] border-l'>
                  <p className='font-abeezee pb-[4px] text-[11px] leading-[11px] text-[#707070]' > 
                  {t("featured1")}
                  </p>
                  <img src={logo} alt="" />
                  <p className='font-abeezee text-[#191919] italic text-[20px] leading-[26px] pt-[16px] pb-[7px]' >
                  {t("featured2")}
                  </p>
                  <p className='font-abeezee text-[#707070] text-[14px] leading-[20px] pb-[12px]' >
                  {t("featured3")}
                  </p>
                  <button className='flex gap-[8px] items-center pt-[10px] pb-[13px] px-[20px] border border-[#000000]' >
                  {t("featured4")}
                  <img  src={arrowrightblack} alt="" />
                  </button>
                </div>
                <img className='w-[478px] h-[248px]' src={featured} alt="" />
                <img className='w-[300px] h-[250px] pl-[16px]' src={featured2} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Featured 