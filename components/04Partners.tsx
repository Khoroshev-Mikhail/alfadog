import Image from "next/image";
import xxx from "../public/img/04Partners/xxx.svg"
import partner_1 from "../public/img/04Partners/1.webp"
import partner_2 from "../public/img/04Partners/2.webp"
import partner_3 from "../public/img/04Partners/3.webp"
import partner_4 from "../public/img/04Partners/4.webp"
import partner_5 from "../public/img/04Partners/5.webp"
import partner_6 from "../public/img/04Partners/6.webp"
import { KARLO_CHAM } from "@/pages/_app";

export default function Partners(){
    return(
        <section id="04Partners" className="_section mt-[10%] pb-[10%]">

            <div className="absolute top-0 right-0 w-2/3 h-2/3 md:w-full md:h-full bg-contain bg-no-repeat bg-right bg-[url('/img/04Partners/bg_right.svg')]"></div>
            <div className="md:hidden scale-[-1] absolute top-1/3 left-0 w-2/3 h-2/3 bg-contain bg-no-repeat bg-right bg-[url('/img/04Partners/bg_right.svg')]"></div>

            <div className="_wrapper">
                <div className="flex flex-col">
                    <div data-aos="fade-right" data-aos-duration="1500" className="flex justify-center">
                        <Image className="block" src={xxx} alt="X X X" />
                    </div>
                    <h2 data-aos="fade-right" data-aos-duration="1500" className={`${KARLO_CHAM} _h2 text-_orange text-center uppercase`}>Partners</h2>
                    <div className="mt-[5%] flex flex-col gap-y-5 mx-[10%] md:mx-0">
                        <div className="flex flex-col md:flex-row gap-x-[5%]">
                            <div data-aos="fade-right" data-aos-duration="1500" className="flex flex-col justify-center w-full md:w-1/3">
                                <Image className="w-[70%] md:mx-auto" src={partner_1} alt="Raydium" />
                            </div>
                            <div data-aos="fade-right" data-aos-duration="1500" className="flex flex-col justify-center w-full md:w-1/3">
                                <Image className="w-[70%] ml-auto md:mx-auto" src={partner_2} alt="CoinMarketCup" />
                            </div>
                            <div data-aos="fade-right" data-aos-duration="1500" className="flex flex-col justify-center w-full md:w-1/3">
                                <Image className="w-[70%] md:mx-auto" src={partner_3} alt="Solana" />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-y-5 gap-x-[5%] ">
                            <div data-aos="fade-right" data-aos-duration="1500" className="flex flex-col justify-center w-full md:w-1/3">
                                <Image className="w-[70%] ml-auto mx-auto" src={partner_4} alt="CoinGecko" />
                            </div>
                            <div data-aos="fade-right" data-aos-duration="1500" className="flex flex-col justify-center w-full md:w-1/3">
                                <Image className="w-[70%] md:mx-auto" src={partner_5} alt="InterFi Network" />
                            </div>
                            <div data-aos="fade-right" data-aos-duration="1500" className="flex flex-col justify-center w-full md:w-1/3">
                                <Image className="w-[70%] ml-auto mx-auto" src={partner_6} alt="PinkSale" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}