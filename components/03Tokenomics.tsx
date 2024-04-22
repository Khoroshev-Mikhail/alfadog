import Image from "next/image";
import presale from '../public/img/03Tokenomics/presale.svg'
import liquidity from '../public/img/03Tokenomics/liquidity.svg'
import marketing from '../public/img/03Tokenomics/marketing.svg'
import team from '../public/img/03Tokenomics/team.svg'
import cex from '../public/img/03Tokenomics/cex.svg'
import charity from '../public/img/03Tokenomics/charity.svg'
import xxx from '../public/img/03Tokenomics/xxx.svg'

export default function Roadmap(){
    return(
        <section className="_section overflow-hidden">
            <div className="_wrapper">
                <div className="flex flex-col">
                    <div>
                        <Image src={xxx} alt="///////" />
                    </div>
                    <h2 className={`_h2 text-white`}>TOKEMOMICS</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4 gap-y-2.5 md:gap-y-[15px] uppercase text-white">
                        <div className="p-5 md:p-8 flex flex-col md:flex-row justify-between col-span-1 md:col-span-2 bg-_orange rounded-tr-[50px] md:rounded-t-[40px]">
                            <div>Total Supply:</div>
                            <div>1 000 000 000 ALFADOG</div>
                        </div>
                        <div className="rounded-br-[40px] md:rounded-tr-[40px] md:rounded-bl-[40px] p-5 md:p-7.5 flex justify-between col-span-1 bg-[#3D308A] _tokemomics_shadow rounded">
                            <div className="flex justify-start gap-x-2.5">
                                <Image src={presale} alt="" />
                                <div>presale</div>
                            </div>
                            <div></div>
                        </div>
                        <div className="rounded-br-[40px] md:rounded-br-[40px] md:rounded-tl-[40px] p-5 md:p-7.5 flex justify-between col-span-1 bg-[#3D308A] _tokemomics_shadow rounded">
                            <div className="flex justify-start gap-x-2.5">
                                <Image src={liquidity} alt="" />
                                <div>liquidity</div>
                            </div>
                            <div></div>
                        </div>
                        <div className="rounded-br-[40px] md:rounded-tr-[40px] md:rounded-bl-[40px] p-5 md:p-7.5 flex justify-between col-span-1 bg-[#3D308A] _tokemomics_shadow rounded">
                            <div className="flex justify-start gap-x-2.5">
                                <Image src={marketing} alt="" />
                                <div>marketing</div>
                            </div>
                            <div></div>
                        </div>
                        <div className="rounded-br-[40px] md:rounded-br-[40px] md:rounded-tl-[40px] p-5 md:p-7.5 flex justify-between col-span-1 bg-[#3D308A] _tokemomics_shadow rounded">
                            <div className="flex justify-start gap-x-2.5">
                                <Image src={team} alt="" />
                                <div>team</div>
                            </div>
                            <div></div>
                        </div>
                        <div className="rounded-br-[40px] md:rounded-tr-[40px] md:rounded-bl-[40px] p-5 md:p-7.5 flex justify-between col-span-1 bg-[#3D308A] _tokemomics_shadow rounded">
                            <div className="flex justify-start gap-x-2.5">
                                <Image src={cex} alt="" />
                                <div>cex</div>
                            </div>
                            <div></div>
                        </div>
                        <div className="rounded-br-[40px] md:rounded-br-[40px] md:rounded-tl-[40px] p-5 md:p-7.5 flex justify-between col-span-1 bg-[#3D308A] _tokemomics_shadow rounded">
                            <div className="flex justify-start gap-x-2.5">
                                <Image src={charity} alt="" />
                                <div>charity</div>
                            </div>
                            <div></div>
                        </div>
                        <div className="p-5 md:p-8 flex flex-col md:flex-row justify-between col-span-1 md:col-span-2 bg-gradient-to-r from-[#8874FF] to-[#6B52FF] bg-[#755EFF] rounded-br-[50px] md:rounded-t-[40px]">
                            <div>ALFADOG Token SOL</div>
                            <div>хххххххххххххххххх</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}