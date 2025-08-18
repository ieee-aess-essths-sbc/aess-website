'use client';
import './footer.css';
import { HoverIcon } from '@/components/hovericon';
import Image from 'next/image';
import location from '../../public/Location.png';
import email from '../../public/email.png';
import phone from '../../public/Phone.png';
import logo from '../../public/logo.png';

export default function Footer() {
  return (
    <>
      <div className="footer text-white flex flex-col max-md:justify-end max-md:px-10 max-sm:px-10 sm:px-10 md:px-10 lg:justify-between lg:px-16 lg:py-8">
        <div className="item-center flex w-full max-sm:flex-col sm:flex-col sm:justify-center sm:gap-5 md:justify-center lg:flex-row lg:justify-between">
          <div className="flex flex-col items-center sm:justify-center md:justify-center lg:justify-start">
            <div className="flex w-50 flex-col items-center max-sm:h-40 sm:h-40 md:h-40">
              <div className="relative h-20 w-50">
                <div
                  className="flex items-center justify-center"
                  style={{ position: 'relative', width: '100%', height: '100%' }}
                >
                  <a to="/">
                    <Image
                      loading="lazy"
                      src={logo}
                      className=" "
                      alt="IEEE ESSTHS"
                      layout="fill"
                      objectFit="contain"
                    />
                  </a>
                </div>
              </div>
              <div className="flex w-full flex-row justify-between">
                <div className="relative h-5">
                  {' '}
                  <HoverIcon
                    objectfit="lg:p-2 md:p-4 max-sm:p-2 sm:p-3"
                    className="flex cursor-pointer items-center justify-center rounded-full border-1 border-white p-5 hover:bg-white"
                    href="https://github.com/"
                    src="GitHub.svg"
                    hoverSrc="GitHub_colored.svg"
                    alt="GitHub"
                  />
                </div>

                <div className="relative h-5">
                  {' '}
                  <HoverIcon
                    objectfit="lg:p-2 md:p-4 max-sm:p-2 sm:p-3"
                    className="flex cursor-pointer items-center justify-center rounded-full border-1 border-white p-5 hover:bg-white"
                    href="https://www.facebook.com/profile.php?id=61552210194532"
                    src="Facebook.svg"
                    hoverSrc="Facebook_hover.svg"
                    alt="Facebook"
                  />{' '}
                </div>

                <div className="relative h-5">
                  {' '}
                  <HoverIcon
                    objectfit="lg:p-2 md:p-4 max-sm:p-2 sm:p-3"
                    className="flex cursor-pointer items-center justify-center rounded-full border-1 border-white p-5 hover:bg-white"
                    href="https://www.instagram.com/ieee.aess.essths/"
                    src="Instagram.svg"
                    hoverSrc="Instagram_hover.svg"
                    alt="Instagram"
                  />{' '}
                </div>

                <div className="relative h-5">
                  {' '}
                  <HoverIcon
                    objectfit="lg:p-2 md:p-4 max-sm:p-2 sm:p-3"
                    className="flex cursor-pointer items-center justify-center rounded-full border-1 border-white p-5 hover:bg-white"
                    href="https://www.linkedin.com/"
                    src="LinkedIn.svg"
                    hoverSrc="LinkedIn_hover.svg"
                    alt="LinkedIn"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row max-md:justify-between max-sm:w-full max-sm:justify-between sm:w-full sm:justify-between lg:flex-1 lg:justify-evenly lg:gap-5 max-sm:flex-1/2">
            <div className="flex flex-col justify-between gap-5">
              <div>
                <a href="#home" className="cursor-pointer">
                  Home
                </a>
              </div>
              <div>
                <a href="#about" className="cursor-pointer">
                  About
                </a>
              </div>
              <div>
                <a href="#value" className="cursor-pointer">
                  Values
                </a>
              </div>
              <div>
                <a href="#activities" className="cursor-pointer">
                  Activities
                </a>
              </div>
              <div>
                <a href="#drone" className="cursor-pointer">
                  Drone
                </a>{' '}
                Project
              </div>
              <div>
                <a href="#faq" className="cursor-pointer">
                  FAQ
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-start gap-5 w-[80%]">
              <div>Contact</div>
              <div className="    flex lg:gap-2 sm:gap-1 items-center justify-end   max-md:text-sm">
              <div className="flex flex-row text-wrap"
                    
              
              >
              <div className="flex flex-row text-wrap w-8 h-8"
                 >
                     <div className="flex flex-row text-wrap"
                     style={{ position: 'relative', height: '100%',width:'100%', }}>
                <Image
                  className=" p-2"
                  src={location}
                  loading="lazy"
              fill={true}
                  alt="location"
                />
                </div>
                </div>
                </div>
                ESSTHS University - Sousse , Tunisia
              </div>
                 <div className="    flex lg:gap-2  sm:gap-1  items-center justify-end   max-md:text-sm">
              <div className="flex flex-row text-wrap"
                    
              
              >
              <div className="flex flex-row text-wrap w-8 h-8"
                 >
                     <div className="flex flex-row text-wrap"
                     style={{ position: 'relative', height: '100%',width:'100%', }}>
                <Image
                  alt="email"
                  className="p-2"
                  src={email}
                  loading="lazy"
                fill={true}
                />
                  </div>
                </div>
                </div>
                ieee.aess.essths.sbc@gmail.com
              </div>
               <div className="    flex lg:gap-2  sm:gap-1  items-center justify-start   max-md:text-sm">
              <div className="flex flex-row text-wrap"
                    
              
              >
              <div className="flex flex-row text-wrap w-8 h-8"
                 >
                     <div className="flex flex-row text-wrap"
                     style={{ position: 'relative', height: '100%',width:'100%', }}>
                <Image
                  className="rounded-full bg-none p-2"
                  src={phone}
                  loading="lazy"
                  alt="phone"
                  width={30}
                  height={10}
                />
                   </div>
                </div>
                </div>
                +216 - 99 999 999
              </div>
            </div>
          </div>
        </div>
        <div className="item-center text-center">2025 © All Rights Reserved</div>
      </div>
    </>
  );
}
