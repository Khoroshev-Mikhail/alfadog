import Image from "next/image";
import xxx from "../public/img/06Footer/xxx.svg"
import dog from "../public/img/06Footer/dog.webp"
import Social from "./00Social";
import { KARLO_CHAM } from "@/pages/_app";

export default function Footer(){
    return(
        <section id="06Footer" className="_section overflow-hidden pt-[10%]">

            <div className="hidden md:block absolute top-0 left-0 w-full h-full bg-center bg-contain bg-no-repeat bg-[url('/img/06Footer/bg.png')]"></div>
            
            <div className="_wrapper relative">

                <div className="md:hidden absolute left-0 top-0 w-full h-full bg-center bg-contain bg-no-repeat bg-[url('/img/06Footer/bg_mobile.svg')]"></div>

                <div className="pl-5 md:pl-[7%] md:pt-[5%] grid grid-cols-1 md:grid-cols-3 md:rounded-tr-[60px] rounded-tr-[80px] md:rounded-bl-[60px] rounded-bl-none bg-gradient-to-tr from-[#FFB178] to-[#FF6B00]">
                    <div className="col-span-1 md:col-span-2 w-full py-[10%] flex flex-col">
                        <div data-aos="fade-right" data-aos-duration="1500" className="flex justify-start">
                            <Image src={xxx} alt="X X X" />
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1500" className={`${KARLO_CHAM} relative z-50 pr-5 leading-none text-[40px] xs:text-[50px] sm:text-[60px] md:text-[70px] lg:text-[90px] xl:text-[100px] uppercase`}>
                            join our 
                            <span className="text-white"> community</span>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1500" className="mt-[5%] md:mt-[20%]">
                            <Social reverse />
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-1 relative z-40 h-full w-full">
                        <Image className="md:absolute md:bottom-[26%] md:right-[40%] md:scale-[1.8] w-full h-auto rounded-bl-[60px] md:rounded-none " src={dog} alt="" />
                    </div>
                </div>
                <div className="my-[5%] w-full text-center text-white">
                    Alfadog 2024 Copyright © All Right Reserved
                </div>
            </div>
        </section>
    )
}