import Image from 'next/image'
import tg from '../public/img/00Social/tg.svg'
import x from '../public/img/00Social/x.svg'
import tg_reverse from '../public/img/00Social/tg_reverse.svg'
import x_reverse from '../public/img/00Social/x_reverse.svg'

export default function Social({ reverse, className }: { reverse?: boolean, className?: string }){
    return(
        <div className={"flex gap-x-1 relative z-30" + " " + className}>
            <a href='https://twitter.com/SOL_ALFADOG'>
                <Image src={ reverse ? x_reverse : x} alt="Twitter" className="block w-[30px] xs:w-auto"/>
            </a>
            <a href='https://t.me/alfa_dog_sol'>
                <Image src={ reverse ? tg_reverse : tg} alt="Telegram" className="block w-[30px] xs:w-auto"/>
            </a>
        </div>
    )
}