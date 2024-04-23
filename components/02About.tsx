import Image from "next/image";
import xxx from '../public/img/02About/xxx.svg'
import { KARLO_CHAM } from "@/pages/_app";

export default function About(){
    return(
        <section id="02About" className="_section overflow-hidden py-[15%] ">

            <div className="absolute top-0 left-0 w-full h-full bg-top bg-contain bg-no-repeat bg-[url('/img/00General/delimiter_about_top.svg')]"></div>
            <div className=" absolute bottom-0 left-0 w-full h-full bg-bottom bg-contain bg-no-repeat bg-[url('/img/00General/delimiter_violet.svg')]"></div>

            <div className="_animate-moveDownAbout hidden md:block absolute -z-50 -top-1/4 md:-left-[25%] lg:-left-[15%] w-full h-[150%] bg-left bg-contain bg-no-repeat bg-[url('/img/00General/eclipse.webp')]"></div>
            <div className="_animate-moveUpAbout absolute -z-50 -top-1/4 -right-[15%] md:-right-[25%] lg:-right-[15%] w-full h-[150%] bg-left bg-contain bg-no-repeat bg-[url('/img/00General/eclipse.webp')] scale-x-[-1]"></div>
            
            <div className="hidden md:block absolute top-[20%] left-0 w-full h-[62%] bg-left bg-contain bg-no-repeat bg-[url('/img/02About/bg_left.svg')]"></div>
            <div className="absolute bottom-[5%] right-0 w-full h-[62%] bg-right bg-contain bg-no-repeat bg-[url('/img/02About/bg_right.svg')]"></div>

            <div className="_wrapper ">
                <div className="w-full md:w-2/3 mx-auto flex flex-col justify-center">
                    <div data-aos="fade-right" data-aos-duration="1500" className="w-full flex justify-start md:justify-center">
                        <Image src={xxx} alt="X X X"/>
                    </div>
                    <h2 data-aos="fade-right" data-aos-duration="1500" className={`${KARLO_CHAM} _h2 md:text-center text-_orange`}>
                        Alfadog
                    </h2>
                    <div data-aos="fade-right" data-aos-duration="1500" className="mt-[8%] mr-[25%] md:mr-0 md:text-center _text_16-24 uppercase leading-[115%] text-white">
                        Corgi, the illegitimate son of Thorns, dreamed of becoming big and powerful, and so he grew up and became <span className="text-_orange">Alfadog</span>.
                    </div>
                    <div data-aos="fade-right" data-aos-duration="1500" className="mt-[8%] mr-[15%] md:mr-0 p-5 pr-8 md:p-8 _inset_shadow uppercase _text_20-36 leading-[115%] md:text-center rounded-tr-[80px] md:rounded-bl-[80px] text-white bg-gradient-to-r from-[#8874FF] to-[#6B52FF]">
                        His mission is to unite everyone and become the king of meme coins
                    </div>
                </div>
            </div>
        </section>
    )
}