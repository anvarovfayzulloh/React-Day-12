import React, { useState, useEffect } from 'react';
import logo__ebay from "../../assets/logo__ebay.png";
import info from "../../assets/info.svg";
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const handleChangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  }

  const notify = (message) => toast(message);

  const handleAuth = (e) => {
    e.preventDefault();

    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data?.token) {
          localStorage.setItem("token", data.token);
          navigate("/");
        } else {
          notify(t("invalid"));
        }
      })
  };

  const handleCheck = (e) => {
    setIsChecked(e.target.checked);
    setShowNotif(e.target.checked);
  }

  useEffect(() => {
    let timer;
    if (showNotif) {
      timer = setTimeout(() => setShowNotif(false), 2000); 
    }
    return () => clearTimeout(timer); 
  }, [showNotif]);

  return (
    <section className="relative">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <div className="container max-w-[1512px] w-full m-auto">
        <div className='flex items-start pt-[40px] px-[16px] justify-between'>
          <Link to={"/"}>
            <img src={logo__ebay} alt="eBay Logo" />
          </Link>
          <div className='flex items-center'>
            <select defaultValue={i18n.language} onChange={handleChangeLanguage} className='border-none outline-none flex items-center text-[14px]'>
              <option value="en">EN</option>
              <option value="uz">UZ</option>
              <option value="ru">RU</option>
            </select>
            <p className='text-[#0654BA] font-abeezee text-[13px] leading-[16px]'>
              {t("tell")}
            </p>
          </div>
        </div>
        <div className='px-[578.5px] flex flex-col items-center'>
          <h2 className='font-abeezee italic text-[#151E27] text-[32px] leading-[32px] pb-[5px]'>
            {t("signin1")}
          </h2>
          <p className='font-abeezee text-[14px] leading-[17px] pb-[45px]'>
            {t("signin2")}&nbsp;
            <span className='text-[#3665F3] underline'>
              {t("signin3")}
            </span>
          </p>
          <form onSubmit={handleAuth} className='flex flex-col gap-[16px]'>
            <input onChange={(e) => setUserName(e.target.value)} placeholder='Username' className='bg-[#F7F7F7] border pl-[16px] placeholder:text-[#191919] pb-[9px] pt-[12px] rounded-[8px] w-[355px] border-[#8F8F8F] text-[#191919] font-abeezee text-[14px] leading-[16px]' type="text" value={username} />
            <input onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='bg-[#F7F7F7] border pl-[16px] placeholder:text-[#191919] pb-[9px] pt-[12px] rounded-[8px] w-[355px] border-[#8F8F8F] text-[#191919] font-abeezee text-[14px] leading-[16px]' type="password" value={password} />
            <button type="submit" className='pt-[15px] pb-[13px] w-[355px] bg-[#3665F3] rounded-[20px] text-white font-abeezee text-[16px] leading-[22px] italic'>
              {t("signin4")}
            </button>
          </form>
          <div className='flex flex-col items-center justify-center w-full'>
            <div className="checkbox-wrapper-46 pt-[272px]">
              <input onChange={handleCheck} className="inp-cbx" id="cbx-46" type="checkbox" />
              <label className="cbx" htmlFor="cbx-46">
                <span>
                  <svg width="12px" height="10px" viewBox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span className='font-abeezee text-[13px] leading-[16px]'>
                  {t("signin5")}
                </span>
              </label>
            </div>
            <p className='font-abeezee text-[13px] leading-[16px] pt-[7px]'>
              {t("signin6")}
            </p>
            <p className='font-abeezee text-[13px] leading-[16px]'>
              {t("signin7")}
            </p>
            <Link className='font-abeezee text-[13px] leading-[16px] pt-[13px] underline text-[#3665F3] pb-[35px]'>
              {t("signin8")}
            </Link>
          </div>
          {showNotif && (
            <div className='notif fixed bottom-[25px] transition-[120ms] left-0 right-0 mx-auto max-w-[355px] w-full bg-[#3665F3] flex justify-center items-center pt-[26px] pb-[24px]'>
              <img className='absolute top-[20px] left-[17px]' src={info} alt="" />
              <p className='text-[#ffffff] font-abeezee text-[12px] leading-[14px] max-w-[266px]'>
                {t("signin9")}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className='max-w-[1512px] m-auto px-[123px] flex justify-center border-t border-t-[#CCCCCC] pt-[45px]'>
        <div className='flex pb-[50px] gap-[10px]'>
          <p className='cursor-default font-abeezee text-[11px] leading-[11px] text-[#41413F]'>
            {t("copyright1")}
          </p>
          <Link className='font-abeezee text-[10px] underline leading-[11px] text-[#707070]'>
            {t("copyright2")}
          </Link>
          <Link className='font-abeezee text-[10px] underline leading-[11px] text-[#707070]'>
            {t("copyright3")}
          </Link>
          <Link className='font-abeezee text-[10px] underline leading-[11px] text-[#707070]'>
            {t("copyright4")}
          </Link>
          <Link className='font-abeezee text-[10px] underline leading-[11px] text-[#707070]'>
            {t("copyright5")}
          </Link>
          <Link className='font-abeezee text-[10px] underline leading-[11px] text-[#707070]'>
            {t("copyright6")}
          </Link>
          <Link className='font-abeezee text-[10px] underline leading-[11px] text-[#707070]'>
            {t("copyright7")}
          </Link>
          <Link className='mx-[-7px] font-abeezee text-[10px] underline leading-[11px] text-[#41413F]'>
            {t("copyright8")}
          </Link>
          <Link className='font-abeezee text-[10px] underline leading-[11px] text-[#707070]'>
            {t("copyright9")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Signin;
