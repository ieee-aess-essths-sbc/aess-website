
"use client"
import "./footer.css"
import {HoverIcon } from '@/components/hovericon'
export default function Footer() { 


    return (
        <>
        <div className="footer flex flex-col justify-between lg:py-8 lg:px-16 max-sm:px-10 sm:px-10 max-md:px-10 md:px-10">
            <div className="flex lg:flex-row w-full lg:justify-between sm:justify-center md:justify-center item-center   sm:flex-col max-sm:flex-col sm:gap-5">
                <div className=" flex flex-col 
                lg:justify-start sm:justify-center md:justify-center items-center">

	<img
							loading="lazy"
							src="logo.png"
							className="h-auto  w-50 "
							alt="IEEE ESSTHS"
						/>
                        	<div className=" flex  gap-2 flex-row ">
			  <HoverIcon
                    href="https://github.com/"
                    src="GitHub.svg"
                    hoverSrc="GitHub_colored.svg"
                    alt="GitHub"
                 className="p-2 border-white hover:bg-white border-1 rounded-full w-10 cursor-pointer"
                  />
                  <HoverIcon
                    href="https://www.facebook.com/profile.php?id=61552210194532"
                    src="Facebook.svg"
                    hoverSrc="Facebook_hover.svg"
                    alt="Facebook"
                   className="p-2 border-white hover:bg-white border-1 rounded-full w-10 cursor-pointer"
                  />
                  <HoverIcon
                    href="https://www.instagram.com/ieee.aess.essths/"
                    src="Instagram.svg"
                    hoverSrc="Instagram_hover.svg"
                    alt="Instagram"
                    className="p-2 border-white hover:bg-white border-1 rounded-full w-10 cursor-pointer"
                  />
                  <HoverIcon
                    href="https://www.linkedin.com/"
                    src="LinkedIn.svg"
                    hoverSrc="LinkedIn_hover.svg"
                    alt="LinkedIn"
                      className="p-2 border-white hover:bg-white border-1 rounded-full w-10 cursor-pointer"
                  />
			
			</div>
                </div>
                <div className="flex flex-row flex-1 lg:justify-evenly lg:gap-5 max-md:justify-between sm:justify-between max-sm:justify-between sm:w-full max-sm:w-full">
                <div className="flex flex-col justify-between gap-5">
<div><a href="#home"
										className="cursor-pointer">Home</a></div>
<div><a 	href="#about"
										className="cursor-pointer">About</a></div>
<div><a href="#value"
										className="cursor-pointer">Values</a></div>
<div><a href="#activities"
										className="cursor-pointer">Activities</a></div>
<div><a 	href="#drone"
										className="cursor-pointer">Drone</a> Project</div>
<div><a 	href="#faq"
										className="cursor-pointer">FAQ</a></div>
</div>

 <div className="flex flex-col justify-start gap-5 ">
 
 <div>Contact</div>
<div   className="flex flex-row"><img className="p-2  bg-none rounded-full " src="Location.png"  loading="lazy"/>ESSTHS University - Sousse , Tunisia</div>
<div  className="flex flex-row  "><img className="p-2  bg-none rounded-full " src="email.png"  loading="lazy"/>ieee.aess.essths.sbc@gmail.com</div>
<div  className="flex flex-row  "><img className="p-2 bg-none rounded-full " src="Phone.png"  loading="lazy"/>+216 - 99 999 999</div>
</div>

                </div>
            </div>
<div className="item-center text-center"> 
            
            2025 © All Rights Reserved
            
            </div>
            </div>
            
        </>
    )
}