import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const PlpFooter = () => {
    const {t} = useTranslation()
  return (
    <section className='border-t border-t-[#CCCCCC] ' >
        <div className="container max-w-[1512px] m-auto px-[112px]">
            <div className="footer__wrapper py-[54px]">
                <ul className='text-[#767676] font-abeezee text-[11px] leading-[12px] flex gap-[20px]'>
                    <li>
                        <Link>
                            {t("footer_ul6-1")}
                        </Link>
                    </li>
                    <li>
                        <Link>
                            {t("footer_ul6-2")}
                        </Link>
                    </li>
                    <li>
                        <Link>
                            {t("footer_ul6-3")}
                        </Link>
                    </li>
                    <li>
                        <Link>
                            {t("footer_ul6-4")}
                        </Link>
                    </li>
                    <li>
                        <Link>
                            {t("footer_ul6-5")}
                        </Link>
                    </li>
                    <li>
                        <Link>
                            {t("footer_ul6-6")}
                        </Link>
                    </li>
                    <li>
                        <Link>
                            {t("footer_ul6-7")}
                        </Link>
                    </li>
                    <li>
                        <Link>
                            {t("footer_ul6-8")}
                        </Link>
                    </li>
                    <li>
                        <Link>
                            {t("footer_ul6-9")}
                        </Link>
                    </li>
                </ul>
                <div className='flex pb-[50px] gap-[10px] pt-[30px]' >
                <p className='cursor-default font-abeezee text-[11px] leading-[11px] text-[#41413F]' >
                        {t("copyright1")}
                    </p>
                    <Link className='font-abeezee text-[10px] underline leading-[11px] text-[#707070]' >
                        {t("copyright2")},
                    </Link>
                    <Link className='font-abeezee text-[10px] underline leading-[11px] text-[#707070]' >
                        {t("copyright3")},
                    </Link>
                    <Link className='font-abeezee text-[10px] underline leading-[11px] text-[#707070]' >
                        {t("copyright4")},
                    </Link>
                    <Link className='font-abeezee text-[10px] underline leading-[11px] text-[#707070]' >
                        {t("copyright5")},
                    </Link>
                    <Link className='font-abeezee text-[10px] underline leading-[11px] text-[#707070]' >
                        {t("copyright6")},
                    </Link>
                    <Link className='font-abeezee text-[10px] underline leading-[11px] text-[#707070]' >
                        {t("copyright7")},
                    </Link>
                    <Link className='mx-[-7px] font-abeezee text-[10px] underline leading-[11px] text-[#41413F]' >
                        {t("copyright8")}
                    </Link>
                    <Link className='font-abeezee text-[10px] underline leading-[11px] text-[#707070]' >
                        {t("copyright9")}
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PlpFooter