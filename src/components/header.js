"use client"
import "./header.css"
import { useState } from "react";

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
	return (
		<div className="">
			<header className=" background  lg:justify-center  flex flex-row  sm:flex-wrap-reverse max-sm:flex-wrap  lg:flex-nowrap lg:px-16  max-lg:flex-wrap-reverse max-md:flex-wrap-reverse">

		<div className=" p-8  sm:p-2 flex 	lg:flex-col lg:justify-between md:justify-start sm:justify-start  sm:flex-row max-md:flex-row">
		
		<div className="flex flex-col flex-1 lg:justify-between sm:justify-center ">
		<div className=" lg:flex-1 sm:flex-0 flex flex-col lg:justify-center sm:item-center">	<span className=" leading-20 fontheader animated-title mb-8 lg:text-left text-6xl   lg:mb-8 sm:text-center max-sm:text-center  lg:text-8xl z-5">
			IEEE AESS ESSTHS SBC
				
			</span>
			<div className="sm:flex-col-reverse max-sm:flex-col-reverse flex justify-between ">

			<div className="w-full flex lg:justify-start max-sm:justify-center sm:justify-center"> <div className="button_join">JOIN US</div></div>
				<div className="mb-4 lg:text-left text-xl lgleading-20   lg:mb-7 sm:text-center max-sm:text-center  lg:text-md  sm:leading-none">
			“Innovating Aerospace and Electronic Systems, Shaping the Future.”
			</div>
			</div>
			 </div>
		
	
		
			</div>
        

	<div className=" flex  gap-2 lg:flex-row lg:justify-start md:justify-center sm:flex-col max-md:flex-col max-md:justify-center max-sm:justify-center  sm:justify-center ">

	  <HoverIcon
        href="https://github.com/"
        src="GitHub.svg"
        hoverSrc="GitHub_colored.svg"
        alt="GitHub"
        className="p-4 border-white  hover:bg-white border-1 rounded-full  w-14  cursor-pointer"
      />
      <HoverIcon
        href="https://www.facebook.com/profile.php?id=61552210194532"
        src="Facebook.svg"
        hoverSrc="Facebook_hover.svg"
        alt="Facebook"
        className="p-4 border-white hover:bg-white border-1 rounded-full  w-14 cursor-pointer"
      />
      <HoverIcon
        href="https://www.instagram.com/ieee.aess.essths/"
        src="Instagram.svg"
        hoverSrc="Instagram_hover.svg"
        alt="Instagram"
        className="p-4 border-white hover:bg-white border-1 rounded-full w-14  cursor-pointer"
      />
      <HoverIcon
        href="https://www.linkedin.com/"
        src="LinkedIn.svg"
        hoverSrc="LinkedIn_hover.svg"
        alt="LinkedIn"
        className="p-4 border-white hover:bg-white border-1 rounded-full w-14  cursor-pointer"
      />
		
			
			</div>
		</div>
 <div className=" max-lg:hidden"> 
	<img className=" bg-none  w-full h-auto" src="astro.svg"  loading="lazy"/>

</div> 

	

	</header>
    </div>
    )
}

function HoverIcon({ href, src, hoverSrc, alt, className }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img
          src={isHovered ? hoverSrc : src}
          alt={alt}
          loading="lazy"
        />
      </a>
    </div>
  );
}