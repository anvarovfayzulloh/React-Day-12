import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import pause from "../../assets/pause.svg"
import hero1 from "../../assets/hero1.png"
import hero2 from "../../assets/hero2.png"
import hero3 from "../../assets/hero3.png"
import arrowright from "../../assets/arrow-right.svg"

const Hero = () => {
  const [t] = useTranslation()
  return (
    <section>
      <div className="container w-full m-auto max-w-[1512px] px-[100px] ">
        <div className="pt-[52px] hero__wrapper border-t border-t-[#DDDDDD]">
          <div className='flex justify-between px-[40px] py-[10px] font-abeezee font-normal text-[12px] leading-[16px] ' >
            <Link className='italic border-b-2 border-b-[#555555] h-full' >
              {t("categories1")}
            </Link>
            <Link>
              {t("categories2")}
            </Link>
            <Link>
              {t("categories3")}
            </Link>
            <Link>
              {t("categories4")}
            </Link>
            <Link>
              {t("categories5")}
            </Link>
            <Link>
              {t("categories6")}
            </Link>
            <Link>
              {t("categories7")}
            </Link>
            <Link>
              {t("categories8")}
            </Link>
            <Link>
              {t("categories9")}
            </Link>
            <Link>
              {t("categories10")}
            </Link>
            <Link>
              {t("categories11")}
            </Link>
            <Link>
              {t("categories12")}
            </Link>
            <Link>
              {t("categories13")}
            </Link>

          </div>
          <div className='flex  bg-[#FEB786] w-full h-[330px] relative' >
            <div className='flex-1 pt-[15px] pl-[32px]' >
              <h2 className='max-w-[292px] italic text-[36px] leading-[46px] font-abeezee text-[#5C1B05]' >
                {t("categories14")}
              </h2>
              <p className='font-abeezee text-[17px] leading-[22px] pt-[8px] pb-[24px]' >
                {t("categories15")}
              </p>
              <button className='flex items-center font-abeezee text-[16px] leading-[20px] pl-[21px] pr-[18px] py-[10px] border gap-[9px] border-[#5C1B05]' >
                {t("categories16")}
                <img src={arrowright} alt="" />
              </button>
            </div>
            <Link className='relative' >
            <p className='absolute font-helvetica text-[#5C1B05] text-[30px] leading-[38px] flex items-center gap-[9px] top-[25px] left-[20px]' >
                {t("categories17")} <img src={arrowright} alt="" />
            </p>
            <img src={hero1} alt="" />
            </Link>
            <Link className='relative' >
            <p className='absolute font-helvetica text-[#5C1B05] text-[30px] leading-[38px] flex items-center gap-[9px] top-[25px] left-[20px]' >
                {t("categories18")} <img src={arrowright} alt="" />
            </p>
            <img src={hero2} alt="" />
            </Link>
            <Link className='relative' >
            <p className='absolute font-helvetica text-[#5C1B05] text-[30px] leading-[38px] flex items-center gap-[9px] top-[25px] left-[20px]' >
                {t("categories19")} <img src={arrowright} alt="" />
            </p>
            <img src={hero3} alt="" />
            </Link>
            <img className='absolute bottom-[19px] right-[19px] cursor-pointer' src={pause} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero