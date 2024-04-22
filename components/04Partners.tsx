import Image from "next/image";
import xxx from "../public/img/04Partners/xxx.svg"
import partner_1 from "../public/img/04Partners/1.png"
import partner_2 from "../public/img/04Partners/2.png"
import partner_3 from "../public/img/04Partners/3.png"
import partner_4 from "../public/img/04Partners/4.png"
import partner_5 from "../public/img/04Partners/5.png"
import partner_6 from "../public/img/04Partners/6.png"

export default function Partners(){
    return(
        <section className="_section">
            <div className="_wrapper">
                <div className="flex flex-col">
                    <div className="flex justify-center">
                        <Image className="block" src={xxx} alt="X X X" />
                    </div>
                    <h2 className={`_h2 text-_orange text-center uppercase`}>Partners</h2>
                    <div className="flex flex-col gap-y-5">
                        <div className="flex flex-col md:flex-row gap-x-[5%]">
                            <div className="flex flex-col justify-center w-full md:w-1/3">
                                <Image className="w-[70%] md:mx-auto" src={partner_1} alt="" />
                            </div>
                            <div className="flex flex-col justify-center w-full md:w-1/3">
                                <Image className="w-[70%] ml-auto md:mx-auto" src={partner_2} alt="" />
                            </div>
                            <div className="flex flex-col justify-center w-full md:w-1/3">
                                <Image className="w-[70%] md:mx-auto" src={partner_3} alt="" />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-x-[5%]">
                            <div className="flex flex-col justify-center w-full md:w-1/3">
                                <Image className="w-[70%] ml-auto mx-auto" src={partner_4} alt="" />
                            </div>
                            <div className="flex flex-col justify-center w-full md:w-1/3">
                                <Image className="w-[70%] md:mx-auto" src={partner_5} alt="" />
                            </div>
                            <div className="flex flex-col justify-center w-full md:w-1/3">
                                <Image className="w-[70%] ml-auto mx-auto" src={partner_6} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}