import React from 'react'
import back from "../../assets/back.svg"
import { Link, useParams,  } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Action = () => {
    const {t} = useTranslation()

    return (
        <section>
            <div className="container w-full max-w-[1512px] pt-[10px] m-auto px-[132px]">
                <div className="flex justify-between">
                    <Link to={"/plp"} className='flex items-center gap-[8px] text-[#0654BA] text-[8px] leading-[13px] font-abeezee' >
                        <img src={back} alt="" />
                        {t("action1")}
                    </Link>
                    <div>
                        <Link className='text-[#0654BA] font-abeezee text-[11px] leading-[13px] pr-[10px] mr-[10px] border-r border-r-[#333333]'   >
                        {t("action2")}
                        </Link>
                        <Link className='text-[#0654BA] font-abeezee text-[11px] leading-[13px]'   >
                        {t("action3")}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Action