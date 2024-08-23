import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import notification from "../../assets/notification.svg"
import logo_ebay from "../../assets/logo__ebay.png"
import basket from "../../assets/basket.svg"
import arrow from "../../assets/arrow.svg"

const Nav = () => {
	const [t, i18n] = useTranslation()
	const handleChangeLanguage = (e) => {
		i18n.changeLanguage(e.target.value);
	}
	return (
		<section>
			<div className="container w-full max-w-[1512px] m-auto px-[132px]">
				<div className="nav__wrapper pb-[0px] flex flex-col gap-[13px] ">
					<div className='flex justify-between items-center font-abeezee font-normal text-[12px] leading-[12px] py-[5px] border-b border-[#E5E5E5]' >
						<div className='flex gap-[14px] items-center' >
							<div className='flex' >
								<p>
									{t("nav_top1")} &nbsp;
								</p>
								<Link to={"/signin"} className='text-[#0654BA] underline' >{t("nav_top2")}</Link>
								&nbsp;
								<p>
									{t("nav_top3")}&nbsp;
								</p>
								<Link className='text-[#0654BA] underline' >{t("nav_top4")}</Link>
								&nbsp;
							</div>
							<p className='pl-[10px]' >
								{t("nav_top5")}
							</p>
							<p	>
								{t("nav_top6")}
							</p>
							<p	>
								{t("nav_top7")}
							</p>
						</div>
						<div className='flex gap-[20px] items-center' >
							<p>
								{t("nav_top8")}
							</p>
							<p className='flex items-center gap-[5px]' >
								{t("nav_top9")}
								<img src={arrow} alt="" />
							</p>
							<select defaultValue={i18n.language} onClick={handleChangeLanguage} className='border-none outline-none flex items-center' >
								<option value="en">EN</option>
								<option value="uz">UZ</option>
								<option value="ru">RU</option>
							</select>
							<img src={notification} alt="" />
							<img src={basket} alt="" />
						</div>
					</div>
					<div className='flex items-center font-abeezee' >
						<Link to={"/"} >
							<img src={logo_ebay} alt="" />
						</Link>
						<select className='outline-none ml-[30px] mr-[16px]' >
							<option value="category">{t("nav_b10")}</option>
						</select>
						<input placeholder={t("nav_b11")} className='outline-none search__url w-[600px] pl-[40px] py-[10px] border-y-2 border-l-2 border-r border-[#41413f] border-r-[#C7C7C7]' type="text" />
						<select className='max-w-[160px] pl-[15px] w-full pt-[12px] pb-[12px]  outline-none border-y-2 border-r-2 border-l border-l-[#C7C7C7] border-[#41413F] ' >
							<option value="all">{t("nav_b12")}</option>
						</select>
						<button className='text-center max-w-[169px] ml-[5px] py-[12px] pl-[58px] pr-[62px] bg-[#3665F3] text-[#FFFFFF]' >
							{t("nav_b13")}
						</button>
						<p className='text-[10px] leading-[10px] text-[#767676] pl-[5px]' >
							Advanced
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Nav