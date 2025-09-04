'use client';

import Navigation from '@/components/nav';

import './header.css';

import { HoverIcon } from '@/components/hovericon';

export default function Header() {
  return (
    <div className="background">
      <Navigation />
      <header className="flex flex-row p-8 max-lg:flex-wrap-reverse max-md:flex-wrap-reverse max-sm:flex-wrap sm:flex-wrap-reverse md:justify-center lg:flex-nowrap lg:justify-center lg:px-16">
        <div className="flex flex-1 max-md:flex-row sm:flex-row sm:justify-start sm:p-2 md:justify-start md:p-14 lg:w-[50%] lg:flex-col lg:justify-between">
          <div className="flex flex-1 flex-col gap-2 sm:justify-center lg:w-[50%] lg:justify-between">
            <div className="sm:item-center flex gap-5 max-sm:flex-row md:flex-1 md:flex-col lg:flex-1 lg:flex-col lg:justify-center">
              {' '}
              {/* Title */}
              <div className="sm:item-center flex flex-col max-sm:items-center max-sm:justify-end md:justify-center lg:flex-1 lg:justify-center">
                <span className="fontheader animated-title z-5 text-7xl leading-20 max-md:text-center max-sm:mb-4 max-sm:w-full max-sm:text-4xl md:mb-4 md:text-center lg:mb-8 lg:text-left lg:text-8xl">
                  <p>IEEE AESS ESSTHS SBC</p>
                </span>
                {/* Solang +join us */}
                <div className="flex max-sm:flex-col-reverse max-sm:items-center max-sm:justify-center sm:flex-col-reverse lg:justify-between">
                  <div className="flex w-full max-sm:w-90 max-sm:justify-center sm:justify-center lg:justify-start">
                    {' '}
                    <a
                      href="https://www.facebook.com/profile.php?id=61552210194532"
                      target="_blank"
                      className="button_join max-sm:text-sm"
                    >
                      JOIN US
                    </a>
                  </div>
                  <div className="font-light max-sm:w-80 max-sm:text-center max-sm:text-sm sm:text-center sm:text-sm sm:leading-none lg:mb-5 lg:w-150 lg:text-left lg:text-2xl lg:leading-10">
                    “Innovating Aerospace and Electronic Systems, Shaping the Future.”
                  </div>
                </div>
              </div>
              {/* media icons */}
              <div className="md:bottom-0 md:z-0 md:relative sm:z-10 max-sm:z-10 sm:right-0 max-sm:right-0  sm:bottom-10 max-sm:bottom-10 sm:absolute  max-sm:absolute flex gap-2 max-md:flex-col max-md:justify-center max-sm:flex-1/7 max-sm:items-center max-sm:justify-end sm:flex-col sm:justify-start md:flex-row md:justify-center lg:flex-row lg:items-start lg:justify-start ">
                <div className="relative flex flex-col items-center justify-center ">
                  {' '}
                  <HoverIcon
                    objectfit="lg:p-2 md:p-4 max-sm:p-1 sm:p-3"
                    className="flex cursor-pointer items-center justify-center rounded-full border-1 border-white hover:bg-white max-sm:p-4 sm:p-5 md:p-9 lg:p-7"
                    href="https://github.com/ieee-aess-essths-sbc"
                    src="GitHub.svg"
                    hoverSrc="GitHub_colored.svg"
                    alt="GitHub"
                  />
                </div>

                <div className="relative flex flex-col items-center justify-center">
                  {' '}
                  <HoverIcon
                    objectfit="lg:p-2 md:p-4 max-sm:p-1 sm:p-3"
                    className="flex cursor-pointer items-center justify-center rounded-full border-1 border-white hover:bg-white max-sm:p-4 sm:p-5 md:p-9 lg:p-7"
                    href="https://www.facebook.com/profile.php?id=61552210194532"
                    src="Facebook.svg"
                    hoverSrc="Facebook_hover.svg"
                    alt="Facebook"
                  />
                </div>

                <div className="relative flex flex-col items-center justify-center">
                  {' '}
                  <HoverIcon
                    objectfit="lg:p-2 md:p-4 max-sm:p-1 sm:p-3"
                    className="flex cursor-pointer items-center justify-center rounded-full border-1 border-white hover:bg-white max-sm:p-4 sm:p-5 md:p-9 lg:p-7"
                    href="https://www.instagram.com/ieee.aess.essths/"
                    src="Instagram.svg"
                    hoverSrc="Instagram_hover.svg"
                    alt="Instagram"
                  />{' '}
                </div>

                <div className="relative flex flex-col items-center justify-center">
                  {' '}
                  <HoverIcon
                    objectfit="lg:p-2 md:p-2 max-sm:p-1 sm:p-3"
                    className="flex cursor-pointer items-center justify-center rounded-full border-1 border-white hover:bg-white max-sm:p-4 sm:p-5 md:p-9 lg:p-7"
                    href="https://www.linkedin.com/"
                    src="LinkedIn.svg"
                    hoverSrc="LinkedIn_hover.svg"
                    alt="LinkedIn"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="astro content-right items-right w-full bg-amber-900 max-lg:hidden">
            <div className="relative h-100">
              <div
                className="items-right flex"
                style={{ position: 'relative', width: '100%', height: '100%' }}
              >
                <Image
                  className="astro h-auto w-500 bg-none"
                  src={astro}
                  loading="lazy"
                  alt="icon"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div> */}
      </header>
    </div>
  );
}
