import Image from "next/image";
import arrow from "../public/img/05Roadmap/arrow.svg"
import xxx from "../public/img/05Roadmap/xxx.svg"
import { KARLO_CHAM } from "@/pages/_app";

export default function Roadmap(){
    return(
        <section id="05Roadmap" className="_section pt-[10%] pb-[12%] overflow-hidden">

            <div className="absolute top-0 left-0 w-full h-full bg-top bg-contain bg-no-repeat bg-[url('/img/00General/delimiter_orange.svg')]"></div>
            <div className="absolute scale-x-[-1] md:scale-x-[1] bottom-0 left-0 w-full h-full bg-bottom bg-contain bg-no-repeat bg-[url('/img/00General/delimiter_violet.svg')]"></div>

            <div className="_animate-moveDown absolute -z-50 -top-1/4 md:-left-[25%] lg:-left-[15%] w-full h-[100%] bg-left bg-contain bg-no-repeat bg-[url('/img/00General/eclipse.webp')]"></div>
            <div className="_animate-moveUp scale-x-[-1] absolute -z-50 -bottom-1/4 -right-[15%] md:-right-[25%] lg:-right-[15%] w-full h-[100%] bg-left bg-contain bg-no-repeat bg-[url('/img/00General/eclipse.webp')]"></div>

            <div className="_wrapper">
                <div className="flex flex-col">
                    <div data-aos="fade-right" data-aos-duration="1500">
                        <Image src={xxx} alt="//////" />
                    </div>
                    <h2 data-aos="fade-right" data-aos-duration="1500" className={`${KARLO_CHAM} _h2 text-white`}>Roadmap</h2>
                    <div className="mt-[5%] flex flex-col gap-y-2.5 md:gap-y-[15px] text-white [&>div>div>ul>li]:pl-1 [&>div>div>ul]:list-image-[url(/img/05Roadmap/list_image.svg)]">
                        <div className="gap-x-2 py-5 md:py-10 px-5 md:px-[45px] relative flex flex-col md:flex-row bg-gradient-to-r from-[#3E318E] to-[#110E28] _roadmap_bg_bl_tr">
                            <div className={`w-[20%] pb-[1%] uppercase text-_orange _text_20-36`}>PHASE 1</div>
                            <div className="w-full md:w-[37.5%]">
                                <ul className="pl-5">
                                    <li className="_text_16-24">Launch project Alfadog</li>
                                    <li className="_text_16-24">Collaboration with influencers</li>
                                    <li className="_text_16-24">Presale</li>

                                </ul>
                            </div>
                            <div className="w-full md:w-[37.5%]">
                                <ul className="pl-5">
                                    <li className="_text_16-24">Trending on Dextools</li>
                                    <li className="_text_16-24">Listing on Exchanges</li>
                                </ul>
                            </div>
                            <div className="w-[5%] absolute md:static right-[5%] bottom-[10%]">
                                <Image className="w-5 sm:w-8 md:w-10 ml-auto" src={arrow} alt="->" />
                            </div>
                        </div>
                        <div className="gap-x-2 py-5 md:py-10 px-5 md:px-[45px] relative flex flex-col md:flex-row bg-gradient-to-r from-[#3E318E] to-[#110E28] _roadmap_bg_tl_br">
                            <div className={`w-[20%] pb-[1%] uppercase text-_orange _text_20-36`}>PHASE 2</div>
                            <div className="w-full md:w-[37.5%]">
                                <ul className="pl-5">
                                    <li className="_text_16-24">Listed on Coinmarketcap</li>
                                    <li className="_text_16-24">Listed on Coingecko</li>
                                    <li className="_text_16-24">Partnership</li>
                                </ul>
                            </div>
                            <div className="w-full md:w-[37.5%]">
                                <ul className="pl-5">
                                    <li className="_text_16-24">Aggressive Marketing</li>
                                    <li className="_text_16-24">5,000+ holders</li>
                                </ul>
                            </div>
                            <div className="w-[5%] absolute md:static right-[5%] bottom-[10%]">
                                <Image className="w-5 sm:w-8 md:w-10 ml-auto md:scale-x-[-1]" src={arrow} alt="->" />
                            </div>
                        </div>
                        <div className="gap-x-2 py-5 md:py-10 px-5 md:px-[45px] relative flex flex-col md:flex-row bg-gradient-to-r from-[#3E318E] to-[#110E28] _roadmap_bg_bl_tr">
                            <div className={`w-[20%] pb-[1%] uppercase text-_orange _text_20-36`}>PHASE 3</div>
                            <div className="w-full md:w-[37.5%]">
                                <ul className="pl-5"> 
                                    <li className="_text_16-24">New Partnerships</li>
                                    <li className="_text_16-24">Integration into various platforms</li>
                                    <li className="_text_16-24">International expansion.</li>
                                </ul>
                            </div>
                            <div className="w-full md:w-[37.5%]">
                                <ul className="pl-5">
                                    <li className="_text_16-24">Listing CEX</li>
                                    <li className="_text_16-24">10,000+ holders</li>
                                </ul>
                            </div>
                            <div className="w-[5%] absolute md:static right-[5%] bottom-[10%]">
                                <Image className="w-5 sm:w-8 md:w-10 ml-auto" src={arrow} alt="->" />
                            </div>
                        </div>
                        <div className="gap-x-2 py-5 md:py-10 px-5 md:px-[45px] relative flex flex-col md:flex-row bg-gradient-to-r from-[#3E318E] to-[#110E28] _roadmap_bg_tl_br">
                            <div className={`w-[20%] pb-[1%] uppercase text-_orange _text_20-36`}>PHASE 4</div>
                            <div className="w-full md:w-[37.5%]">
                                <ul className="pl-5">
                                    <li className="_text_16-24">New Listing CEX</li>
                                    <li className="_text_16-24">NFT marketplace.</li>
                                    <li className="_text_16-24">Website v2 release</li>
                                </ul>
                            </div>
                            <div className="w-full md:w-[37.5%]">
                                <ul className="pl-5">
                                    <li className="_text_16-24">20,000+ holders.</li>
                                    <li className="_text_16-24">Construction of dog kennels</li>
                                </ul>
                            </div>
                            <div className="w-[5%] absolute md:static right-[5%] bottom-[10%]">
                                <Image className="w-5 sm:w-8 md:w-10 ml-auto md:scale-x-[-1]" src={arrow} alt="->" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}