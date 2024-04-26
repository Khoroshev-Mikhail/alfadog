import Image from "next/image";
import alfadog from "../public/img/01Header/alfadog.webp";
import alfadog_mobile from "../public/img/01Header/alfadog_mobile.webp";
import click from "../public/img/01Header/click.svg";
import xxx from "../public/img/01Header/xxx.svg";
import cross from "../public/img/01Header/cross.svg";
import Social from "./00Social";
import { KARLO_CHAM } from "@/pages/_app";
import { useState } from "react";


export default function Header(){
    const [ isHidden, setIsHidden ] = useState(true)
    return(
        <section id="01Header" className="_section bg-[#312B5A]">

        <div className="hidden md:block -z-0 opacity-30 absolute top-0 left-0 w-full h-full bg-center bg-cover bg-no-repeat bg-[url('/img/01Header/bg.webp')]"></div>
        <div className="md:hidden -z-0 opacity-30 absolute top-0 left-0 w-full h-full bg-center bg-cover bg-no-repeat bg-[url('/img/01Header/bg_mobile.webp')]"></div>
        
        <div className="md:hidden absolute top-0 left-0 w-[3%] h-full bg-[left_bottom_30%] bg-contain bg-no-repeat bg-[url('/img/00General/bg_slash_left.svg')]"></div>
        <div className="scale-x-[-1] md:hidden absolute top-0 right-0 w-[3%] h-full bg-[right_bottom_5%] bg-contain bg-no-repeat bg-[url('/img/00General/bg_slash_left.svg')]"></div>
        <div className="hidden md:block absolute top-0 left-0 w-[85%] h-full bg-bottom bg-contain bg-no-repeat bg-[url('/img/01Header/bg_bottom.svg')]"></div>
        <div className="hidden xl:block absolute top-1/4 left-0 w-[50%] h-[50%] bg-left bg-contain bg-no-repeat bg-[url('/img/01Header/bg_left.svg')]"></div>

            {/* Выдвижное меню */}
            <div className={`${isHidden ? 'hidden' : 'block'} absolute z-50 top-0 left-0 w-full  bg-gradient-to-br to-_violet from-[#AB9DFF] rounded-b-2xl `}>
                <div className="relative py-10 sm:py-10 md:py-12 xl:py-20 flex flex-col md:flex-row _wrapper">
                    <Image className="absolute top-[3%] md:top-[3%] right-5 cursor-pointer w-[30px] h-[30px] sm:w-[49px] sm:h-[49px]" src={ cross } alt="menu-toggle" onClick={()=> setIsHidden(true) }/>
                    
                    <menu className={`uppercase block md:w-1/2 w-full relative z-50 text-[16px] xs:text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] mt-10 text-black`}>
                        <li className="flex justify-center md:justify-start w-full" onClick={()=> setIsHidden(true) }><a href="#01Header">HOME</a></li>
                        <li className="flex justify-center md:justify-start w-full mt-3 md:mt-5"><a href="#02About">About</a></li>
                        <li className="flex justify-center md:justify-start w-full mt-3 md:mt-5"><a href="#03Tokemomics">Tokemomics</a></li>
                        <li className="flex justify-center md:justify-start w-full mt-3 md:mt-5"><a href="#04Partners">Partners</a></li>
                        <li className="flex justify-center md:justify-start w-full mt-3 md:mt-5"><a href="#05Roadmap">Roadmap</a></li>
                        <li className="flex justify-center md:justify-start w-full mt-3 md:mt-5"><a href="#06Footer">CONTACTS</a></li>
                        <li className="flex justify-center md:justify-start w-full mt-3 md:mt-5 py-[60px] xl:py-[100px] ">
                            <Social reverse/>
                        </li>
                    </menu>
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        {/* <Image src={alfadog} alt="" className="block  bottom-0 right-0 w-full" /> */}
                    </div>
                    
                </div>
            </div>   

            <div className="_wrapper relative">

            <div className="hidden md:block absolute top-0 left-5 xl:left-0 w-[15%] h-full bg-top bg-contain bg-no-repeat bg-[url('/img/00General/bg_slash.svg')]"></div>

                <div className="flex flex-col">

                    <div className="py-[2%] flex flex-row justify-between w-full">
                        <div>
                            <Social /> 
                        </div>
                        <div className="cursor-pointer relative z-20 flex flex-col justify-center" onClick={()=> setIsHidden(false) }>
                            <svg className="w-10 md:w-[67px] fill-_orange md:fill-white" width="67" height="22" viewBox="0 0 67 22" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 0.480011H67V3.45001H0V0.480011ZM0 9.39002H67V12.36H0V9.39002ZM67 18.3H0V21.27H67V18.3Z" />
                            </svg>
                        </div>
                    </div>

                    <div className="relative z-30 pt-[7%] md:pb-[14%] flex flex-col justify-center">
                        <div data-aos="fade-right" data-aos-duration="1500">
                            <Image className="" src={xxx} alt="X X X" />
                        </div>
                        <h1 data-aos="fade-right" data-aos-duration="1500" className={`${KARLO_CHAM} _h2 leading-none  text-white uppercase`}>Alfadog</h1>
                        <div data-aos="fade-right" data-aos-duration="1500" className="_text_16-24 mt-[5%] md:mt-[3%] w-full md:w-1/3 xl:w-[35%] leading-none text-white ">
                            Alfadog is a rapidly growing community aiming to become one of the most popular in the crypto world. 
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1500" className="flex flex-row mt-[8%] md:mt-[4%] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] uppercase gap-x-2.5 md:gap-x-4">
                            <a className="flex flex-row w-auto justify-between rounded-[100px] bg-white" href="">
                                <div className="pl-5 md:pl-10 flex flex-col justify-center">
                                    Presale
                                </div>
                                <div className="p-2.5 flex flex-col justify-center">
                                    <Image src={click} alt="->" />
                                </div>
                            </a>
                            <a className="flex flex-col justify-center px-10 py-4 md:py-7.5 rounded-[100px] bg-_orange text-center" href="https://app.analytixaudit.com/alfadog">
                                Audit
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            <div className="relative z-20 md:hidden">
                <Image className="w-full" src={alfadog_mobile} alt="Alfadog" />
            </div>
            <div className="absolute top-0 right-0 hidden md:block md:h-3/4 lg:h-full pb-[5%] w-auto">
                <Image className="w-auto h-full aspect-[921/795]" src={alfadog} alt="Alfadog" />
            </div>
        </section>
    )
}