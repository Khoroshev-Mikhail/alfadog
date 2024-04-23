import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import localFont from 'next/font/local'

const CRAZY_FONT = localFont({ src: '../public/fonts/crazy.ttf' })
export const CRAZY = CRAZY_FONT.className
const KARLO_CHAM_FONT = localFont({ src: '../public/fonts/karlo_cham.otf' }) //Найти woff2
export const KARLO_CHAM = KARLO_CHAM_FONT.className

export default function App({ Component, pageProps }: AppProps) {
  useEffect(()=>{
      AOS.init({
          once: true
      })
  }, [])
  
  return (
        <main className={`${CRAZY}`}>
            <Component {...pageProps} />
        </main>
  )
}