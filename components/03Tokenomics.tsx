import Image from "next/image";
import presale from '../public/img/03Tokenomics/presale.svg'
import liquidity from '../public/img/03Tokenomics/liquidity.svg'
import marketing from '../public/img/03Tokenomics/marketing.svg'
import team from '../public/img/03Tokenomics/team.svg'
import cex from '../public/img/03Tokenomics/cex.svg'
import charity from '../public/img/03Tokenomics/charity.svg'
import xxx from '../public/img/03Tokenomics/xxx.svg'
import { KARLO_CHAM } from "@/pages/_app";

export default function Roadmap(){
    return(
        <section id="03Tokemomics" className="_section overflow-hidden pt-[8%]">
            <div className="_wrapper">
                <div className="flex flex-col">
                    <div data-aos="fade-right" data-aos-duration="1500">
                        <Image src={xxx} alt="///////" />
                    </div>
                    <h2 data-aos="fade-right" data-aos-duration="1500" className={`${KARLO_CHAM} _h2 text-white`}>TOKEMOMICS</h2>
                    <div className="mt-[8%] grid grid-cols-1 md:grid-cols-2 md:gap-x-4 gap-y-2.5 md:gap-y-[15px] uppercase text-white">
                        <div data-aos="fade-right" data-aos-duration="1500" className="p-5 md:p-8 flex flex-col md:flex-row justify-between col-span-1 md:col-span-2 bg-_orange rounded-tr-[50px] md:rounded-t-[40px]">
                            <div>Total Supply:</div>
                            <div>1 000 000 000 ALFADOG</div>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1500" className="rounded-br-[40px] md:rounded-br-[0px] md:rounded-tr-[40px] md:rounded-bl-[40px] p-5 md:p-7.5 flex justify-between col-span-1 bg-[#3D308A] _tokemomics_shadow">
                            <div className="flex justify-start gap-x-2.5">
                                <Image src={presale} alt="" />
                                <div>presale</div>
                            </div>
                            <div className="text-_orange">40%</div>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1500" className="rounded-br-[40px] md:rounded-br-[40px] md:rounded-tl-[40px] p-5 md:p-7.5 flex justify-between col-span-1 bg-[#3D308A] _tokemomics_shadow">
                            <div className="flex justify-start gap-x-2.5">
                                <Image src={liquidity} alt="" />
                                <div>liquidity</div>
                            </div>
                            <div className="text-_orange">20%</div>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1500" className="rounded-br-[40px] md:rounded-br-[0px] md:rounded-tr-[40px] md:rounded-bl-[40px] p-5 md:p-7.5 flex justify-between col-span-1 bg-[#3D308A] _tokemomics_shadow">
                            <div className="flex justify-start gap-x-2.5">
                                <Image src={marketing} alt="" />
                                <div>marketing</div>
                            </div>
                            <div className="text-_orange">10%</div>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1500" className="rounded-br-[40px] md:rounded-br-[40px] md:rounded-tl-[40px] p-5 md:p-7.5 flex justify-between col-span-1 bg-[#3D308A] _tokemomics_shadow">
                            <div className="flex justify-start gap-x-2.5">
                                <Image src={team} alt="" />
                                <div>team</div>
                            </div>
                            <div className="text-_orange">10%</div>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1500" className="rounded-br-[40px] md:rounded-br-[0px] md:rounded-tr-[40px] md:rounded-bl-[40px] p-5 md:p-7.5 flex justify-between col-span-1 bg-[#3D308A] _tokemomics_shadow">
                            <div className="flex justify-start gap-x-2.5">
                                <Image src={cex} alt="" />
                                <div>cex</div>
                            </div>
                            <div className="text-_orange">15%</div>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1500" className="rounded-br-[40px] md:rounded-br-[40px] md:rounded-tl-[40px] p-5 md:p-7.5 flex justify-between col-span-1 bg-[#3D308A] _tokemomics_shadow ">
                            <div className="flex justify-start gap-x-2.5">
                                <Image src={charity} alt="" />
                                <div>charity</div>
                            </div>
                            <div className="text-_orange">5%</div>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1500" className="p-5 md:p-8 flex flex-col md:flex-row justify-between col-span-1 md:col-span-2 bg-gradient-to-r from-[#8874FF] to-[#6B52FF] bg-[#755EFF] rounded-br-[40px] md:rounded-bl-[50px]">
                            <div>ALFADOG Token SOL</div>
                            <div>6PH5dNrtGjGkZrHR2MChVQ<wbr/>pA95B2hDUbNTMYPhuRAnmM</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}