import Image from "next/image";
import xxx from '../public/img/02About/xxx.svg'

export default function About(){
    return(
        <section className="_section overflow-hidden py-[15%] ">

            <div className="absolute top-0 left-0 w-full h-full bg-top bg-contain bg-no-repeat bg-[url('/img/00General/delimiter_about_top.png')]"></div>
            <div className="absolute bottom-0 left-0 w-full h-full bg-bottom bg-contain bg-no-repeat bg-[url('/img/00General/delimiter_violet.png')]"></div>

            <div className="hidden md:block absolute -z-50 -top-1/4 md:-left-[25%] lg:-left-[15%] w-full h-[150%] bg-left bg-contain bg-no-repeat bg-[url('/img/00General/eclipse.png')]"></div>
            <div className="absolute -z-50 -top-1/4 -right-[15%] md:-right-[25%] lg:-right-[15%] w-full h-[150%] bg-left bg-contain bg-no-repeat bg-[url('/img/00General/eclipse.png')] scale-x-[-1]"></div>
            
            <div className="hidden md:block absolute top-[20%] left-0 w-full h-[62%] bg-left bg-contain bg-no-repeat bg-[url('/img/02About/bg_left.png')]"></div>
            <div className="absolute bottom-[5%] right-0 w-full h-[62%] bg-right bg-contain bg-no-repeat bg-[url('/img/02About/bg_right.png')]"></div>



            <div className="_wrapper ">
                <div className="w-full md:w-2/3 mx-auto flex flex-col justify-center">
                    <div className="w-full flex justify-start md:justify-center">
                        <Image src={xxx} alt="X X X"/>
                    </div>
                    <h2 className={`_h2 md:text-center text-_orange`}>
                        Alfadog
                    </h2>
                    <div className="mt-[4%] md:text-center _text_16-24 uppercase leading-none text-white">
                        Corgi, the illegitimate son of Thorns, dreamed of becoming big and powerful, and so he grew up and became Alfadog.
                    </div>
                    <div className="mt-[4%] p-5 pr-8 md:p-8 _inset_shadow uppercase _text_20-36 leading-none md:text-center rounded-tr-[100px] md:rounded-bl-[100px] text-white bg-gradient-to-r from-[#8874FF] to-[#6B52FF]">
                        His mission is to unite everyone and become the king of meme coins
                    </div>
                </div>
            </div>
        </section>
    )
}