import React from 'react';
import Nav from "../../components/nav/Nav";
import PlpFooter from "../../components/plpFooter/PlpFooter";
import Action from '../../components/user_action-menu/Action';
import vector from "../../assets/vector.svg"
import { useParams } from 'react-router-dom';
import { useFetchWithId } from '../../hooks/useFetchWithId';
import { useTranslation } from 'react-i18next';
import Carousell from '../../components/carousel/Carousel';

const Plp = () => {
  const { id } = useParams();
  const data = useFetchWithId(`/products/${id}`);
  const { t } = useTranslation();


  return (
    <>
      <Nav />
      <Action />
      <section>
        <div className="container max-w-[1512] m-auto w-full px-[132px]">
          <div className="plp__wrapper flex pb-[150px] pt-[70px]">
            <div className='carusel__wrapper w-[600px]'>
              <Carousell id={id}/>
            </div>
            <div className='pl-[18px]' >
              <h2 className='font-inter font-bold text-[#333333] text-[18px] leading-[22px] pb-[10px] text-left  mb-[15px]' >
                {data.title}
              </h2>
              <div className='flex flex-col gap-[13px] pl-[45px] border-t border-t-[#ccc]  border-b pb-[10px] border-b-[#cccccc] pt-[10px] max-w-[560px]' >
                <div className='flex gap-[12px]' >
                  <p className='text-[#191919] font-inter font-normal text-[14px] leading-[22px] w-[100px] text-right ' >
                    {t("pdp1")}
                  </p>
                  <p className='max-w-[420px] font-inter font-normal italic text-[13px] leading-[20px]' >
                    {data.description}
                  </p>
                </div>
                <div className='flex items-center gap-[12px]' >
                  <p className='text-[#191919] font-inter font-normal text-[14px] leading-[22px] w-[100px] text-right' >
                  {t("pdp2")}
                  </p>
                  <p className='w-[190px] bg-[#EFEFEF] border border-[#D3D3D3] px-[2px] rounded-[3px] pl-[5px]' >
                    {data.brand}
                  </p>
                </div>
                <div className='flex items-center gap-[12px]' >
                  <p className='text-[#191919] font-inter font-normal text-[14px] leading-[22px] w-[100px] text-right' >
                  {t("pdp3")}
                  </p>
                  <p className='w-[190px] bg-[#EFEFEF] border border-[#D3D3D3] px-[2px] rounded-[3px] pl-[5px] capitalize' >
                    {data.category}
                  </p>
                </div>
                <div className='flex items-center gap-[12px]' >
                  <p className='text-[#191919] font-inter font-normal text-[14px] leading-[22px] w-[100px] text-right' >
                  {t("pdp4")}
                  </p>
                  <p className='w-[190px] bg-[#EFEFEF] border border-[#D3D3D3] px-[2px] rounded-[3px] pl-[5px] capitalize' >
                    {data.weight} kg
                  </p>
                </div>
                <div className='flex items-center gap-[12px]' >
                  <p className='text-[#191919] font-inter font-normal text-[14px] leading-[22px] w-[100px] text-right' >
                  {t("pdp5")}
                  </p>
                  <p className='w-[190px] bg-[#EFEFEF] border border-[#D3D3D3] px-[2px] rounded-[3px] pl-[5px] capitalize' >
                    {data.rating}
                  </p>
                </div>

              </div>
              <div className='flex pt-[10px]' >
                <div>
                  <div className='flex items-start gap-[12px]' >
                    <p className='text-[#191919] font-inter font-normal text-[14px] leading-[22px] w-[100px] text-right' >
                    {t("pdp6")}
                    </p>
                    <p className='font-inter font-bold text-[#333333] text-[22px] leading-[32px]' >
                      US ${data.price}
                    </p>
                  </div>
                  <div className='flex items-start gap-[12px]' >
                    <p className='text-[#191919] font-inter font-normal text-[14px] leading-[22px] w-[100px] text-right' >
                    </p>
                    <p className='max-w-[188px] underline text-[#3665F3] font-inter font-normal text-[14px] leading-[16px] pt-[12px]' >
                    {t("pdp7")}
                    </p>
                  </div>
                </div>
                <div className='flex flex-col items-center gap-[8px] pl-[20px]' >
                  <button className='py-[10px] bg-[#0053A0] rounded-[20px] text-[#fff] font-inter font-bold text-[13px] leading-[20px] w-[230px]' >
                  {t("pdp8")}
                  </button>
                  <button className='py-[10px] bg-[#3498CA] rounded-[20px] text-[#fff] font-inter font-bold text-[13px] leading-[20px] w-[230px]' >
                  {t("pdp9")}
                  </button>
                  <button  className='flex items-center justify-center py-[10px] bg-[#ffffff] rounded-[20px] text-[#0053A0] border border-[#3665F3] font-inter font-normal text-[13px] leading-[20px] w-[230px]'  >
                    <img src={vector} alt="" />{t("pdp10")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PlpFooter />
    </>
  );
}

export default Plp;
