import React from 'react'
import { useTranslation } from 'react-i18next'
import facebook from "../../assets/facebook.svg"
import twitter from "../../assets/twtitter.svg"
import { Link } from 'react-router-dom'

const Footerv1 = () => {
    const { t } = useTranslation()
    return (
        <footer className=' border-t border-t-[#cccccc]' >
            <div className="container max-w-[1512px] m-auto px-[123px] ">
                <div className="footer__wrapper flex justify-between w-full pt-[70px] pb-[75px]">
                    <ul className='font-abeezee text-[11px] leading-[12px] text-[#767676] flex flex-col gap-[12px]' >
                        <Link className='text-[16px] italic leading-4 pt-[4px]' >
                            {t("footer1v1")}
                        </Link>
                        <Link>
                            {t("footer1v2")}
                        </Link>
                        <Link>
                            {t("footer1v3")}
                        </Link>
                        <Link>
                            {t("footer1v4")}
                        </Link>
                        <Link>
                            {t("footer1v5")}
                        </Link>
                        <Link>
                            {t("footer1v6")}
                        </Link>
                        <Link>
                            {t("footer1v7")}
                        </Link>
                        <Link>
                            {t("footer1v8")}
                        </Link>
                    </ul>
                    <ul className='font-abeezee text-[11px] leading-[12px] text-[#767676] flex flex-col gap-[12px]' >
                        <Link className='text-[16px] italic leading-4 pt-[4px]' >
                            {t("footer1v9")}
                        </Link>
                        <Link>
                            {t("footer1v10")}
                        </Link>
                        <Link>
                            {t("footer1v11")}
                        </Link>
                        <Link>
                            {t("footer1v12")}
                        </Link>
                        <Link>
                            {t("footer1v13")}
                        </Link>
                        <ul className='font-abeezee pt-[28px] text-[11px] leading-[12px] text-[#767676] flex flex-col gap-[12px]' >
                            <Link className='text-[16px] italic leading-4 pt-[4px]' >
                                {t("footer1v14")}
                            </Link>
                            <Link>
                                {t("footer1v15")}
                            </Link>
                            <Link>
                                {t("footer1v16")}
                            </Link>
                            <Link>
                                {t("footer1v17")}
                            </Link>
                        </ul>
                    </ul>
                    <ul className='font-abeezee text-[11px] leading-[12px] text-[#767676] flex flex-col gap-[12px]' >
                        <Link className='text-[16px] italic leading-4 pt-[4px]' >
                            {t("footer_ul3-1")}
                        </Link>
                        <Link className='flex items-center gap-[5px]' >
                            <img src={facebook} alt="" />
                            {t("footer_ul3-2")}
                        </Link>
                        <Link className='flex items-center gap-[5px]' >
                            <img src={twitter} alt="" />
                            {t("footer_ul3-3")}
                        </Link>
                    </ul>
                    <ul className='font-abeezee text-[11px] leading-[12px] text-[#767676] flex flex-col gap-[12px]' >
                        <Link className='text-[16px] italic leading-4 pt-[4px]' >
                            {t("footer_ul4-1")}
                        </Link>
                        <Link>
                            {t("footer_ul4-2")}
                        </Link>
                        <Link>
                            {t("footer_ul4-3")}
                        </Link>
                        <Link>
                            {t("footer_ul4-4")}
                        </Link>
                        <Link>
                            {t("footer_ul4-5")}
                        </Link>
                        <Link>
                            {t("footer_ul4-6")}
                        </Link>
                        <Link>
                            {t("footer_ul4-7")}
                        </Link>
                        <Link>
                            {t("footer_ul4-8")}
                        </Link>
                        <Link>
                            {t("footer_ul4-9")}
                        </Link>
                        <Link>
                            {t("footer_ul4-10")}
                        </Link>
                        <Link>
                            {t("footer_ul4-11")}
                        </Link>
                        <Link>
                            {t("footer_ul4-12")}
                        </Link>
                    </ul>
                    <ul className='font-abeezee text-[11px] leading-[12px] text-[#767676] flex flex-col gap-[12px]' >
                        <Link className='text-[16px] italic leading-4 pt-[4px]' >
                            {t("footer_ul5-1")}
                        </Link>
                        <Link>
                            {t("footer_ul5-2")}
                        </Link>
                        <Link>
                            {t("footer_ul5-3")}
                        </Link>
                        <Link>
                            {t("footer_ul5-4")}
                        </Link>
                        <ul className='font-abeezee pt-[20px] text-[11px] leading-[12px] text-[#767676] flex flex-col gap-[12px]' >
                            <Link className='text-[16px] italic leading-4 pt-[4px]' >
                                {t("footer_ul5-5")}
                            </Link>
                            <Link>
                                {t("footer_ul5-6")}
                            </Link>
                            <Link>
                                {t("footer_ul5-7")}
                            </Link>
                            <Link>
                                {t("footer_ul5-8")}
                            </Link>
                        </ul>
                        <ul className='font-abeezee pt-[20px] text-[11px] leading-[12px] text-[#767676] flex flex-col gap-[12px]' >
                            <Link className='text-[16px] italic leading-4 pt-[4px]' >
                                {t("footer_ul5-9")}
                            </Link>
                        </ul>
                    </ul>
                </div>
                <div className='flex pb-[50px] gap-[10px]' >
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
        </footer>
    )
}

export default Footerv1