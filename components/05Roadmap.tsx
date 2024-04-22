import Image from "next/image";
import arrow from "../public/img/05Roadmap/arrow.png"
import xxx from "../public/img/05Roadmap/xxx.svg"

export default function Roadmap(){
    return(
        <section className="_section">
            <div className="_wrapper">
                <div className="flex flex-col">
                    <div>
                        <Image src={xxx} alt="//////" />
                    </div>
                    <h2 className={`_h2 text-white`}>Roadmap</h2>
                    <div className=" flex flex-col gap-y-2.5 md:gap-y-[15px] text-white [&>div>div>ul>li]:pl-1 [&>div>div>ul]:list-image-[url(/img/05Roadmap/list_image.svg)]">
                        <div className="gap-x-2 py-5 md:py-10 px-5 md:px-[45px] relative flex flex-col md:flex-row bg-gradient-to-r from-[#3E318E] to-[#110E28] _roadmap_bg_bl_tr">
                            <div className={`w-[25%] uppercase text-_orange _text_20-36`}>PHASE 1</div>
                            <div className="w-[30%]">
                                <ul>
                                    <li className="_text_16-24">Launch project Alfadog</li>
                                    <li className="_text_16-24">Collaboration with influencers</li>
                                    <li className="_text_16-24">Presale</li>

                                </ul>
                            </div>
                            <div className="w-[30%]">
                                <ul>
                                    <li className="_text_16-24">Trending on Dextools</li>
                                    <li className="_text_16-24">Listing on Exchanges</li>
                                </ul>
                            </div>
                            <div className="w-[15%] absolute md:static right-[5%] bottom-[5%]">
                                <Image src={arrow} alt="->" />
                            </div>
                        </div>
                        <div className="gap-x-2 py-5 md:py-10 px-5 md:px-[45px] relative flex flex-col md:flex-row bg-gradient-to-r from-[#3E318E] to-[#110E28] _roadmap_bg_tl_br rounded-br-[100px]">
                            <div className={`w-[25%] uppercase text-_orange _text_20-36`}>PHASE 2</div>
                            <div className="w-[30%]">
                                <ul>
                                    <li className="_text_16-24">Listed on Coinmarketcap</li>
                                    <li className="_text_16-24">Listed on Coingecko</li>
                                    <li className="_text_16-24">Partnership</li>
                                </ul>
                            </div>
                            <div className="w-[30%]">
                                <ul>
                                    <li className="_text_16-24">Aggressive Marketing</li>
                                    <li className="_text_16-24">5,000+ holders</li>
                                </ul>
                            </div>
                            <div className="w-[15%] absolute md:static right-[5%] bottom-[5%]">
                                <Image className="md:scale-x-[-1]" src={arrow} alt="->" />
                            </div>
                        </div>
                        <div className="gap-x-2 py-5 md:py-10 px-5 md:px-[45px] relative flex flex-col md:flex-row bg-gradient-to-r from-[#3E318E] to-[#110E28] _roadmap_bg_bl_tr">
                            <div className={`w-[25%] uppercase text-_orange _text_20-36`}>PHASE 3</div>
                            <div className="w-[30%]">
                                <ul> 
                                    <li className="_text_16-24">New Partnerships</li>
                                    <li className="_text_16-24">Integration into various platforms</li>
                                    <li className="_text_16-24">International expansion.</li>
                                </ul>
                            </div>
                            <div className="w-[30%]">
                                <ul>
                                    <li className="_text_16-24">Listing CEX</li>
                                    <li className="_text_16-24">10,000+ holders</li>
                                </ul>
                            </div>
                            <div className="w-[15%] absolute md:static right-[5%] bottom-[5%]">
                                <Image src={arrow} alt="->" />
                            </div>
                        </div>
                        <div className="gap-x-2 py-5 md:py-10 px-5 md:px-[45px] relative flex flex-col md:flex-row bg-gradient-to-r from-[#3E318E] to-[#110E28] _roadmap_bg_tl_br">
                            <div className={`w-[25%] uppercase text-_orange _text_20-36`}>PHASE 4</div>
                            <div className="w-[30%]">
                                <ul>
                                    <li className="_text_16-24">New Listing CEX</li>
                                    <li className="_text_16-24">NFT marketplace.</li>
                                    <li className="_text_16-24">Website v2 release</li>
                                </ul>
                            </div>
                            <div className="w-[30%]">
                                <ul>
                                    <li className="_text_16-24">20,000+ holders.</li>
                                    <li className="_text_16-24">Construction of dog kennels</li>
                                </ul>
                            </div>
                            <div className="w-[15%] absolute md:static right-[5%] bottom-[5%]">
                                <Image className="md:scale-x-[-1]" src={arrow} alt="->" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}