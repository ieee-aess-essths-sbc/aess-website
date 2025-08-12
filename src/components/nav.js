"use client";
import { useState } from "react";

import "./nav.css"


export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
	
	return (
	<div >
			<nav className=" bg-black p-12 w-full sm:p-8">
				<div className="w-full flex flex-nowrap lg:justify-between md:justify-between max-sm:justify-start  lg:px-18 max-sm:px-0 sm:px-0">
		
						
	<div className="lg:block md:block sm:hidden max-sm:hidden max-md:hiddden">
				<div className="flex  items-center w-auto  ">		
				
				<a to="/" >
						<img
							loading="lazy"
							src="logo.png"
							className="h-12 sm:h-8 md:h-12 w-full sm:h-auto max-sm-w-[50%]  max-sm:mr-0 "
							alt="IEEE ESSTHS"
						/>
					</a></div>
			</div>
			<div className="lg:block md:block sm:hidden max-sm:hidden max-md:hiddden">
							<div className="nav boxnav flex flex-row justify-between p-4 rounded-3xl gap-14 md:gap-5 lg:gap-14">
								
									<a
										href="#home"
										className="sm:text-sm md:text max-sm:text-sm/6 cursor-pointer"
									
									>
										Home
									</a>
								
									<a
										href="#about"
										className=" sm:text-sm md:text max-sm:text-sm/6"
										aria-current="About"
									>
										About
									</a>
								 	<a
										href="#value"
										className=" sm:text-sm md:text max-sm:text-sm/6"
										
									>
										Values
									</a>
										<a
										href="#activities"
										className=" sm:text-sm md:text max-sm:text-sm/6"
										
									>
										Activities
									</a>
										<a
										href="#drone"
										className="sm:text-sm md:text max-sm:text-sm/6 "
										
									>
										Drone Project
									</a>
									<a
										href="#faq"
										className=" sm:text-sm md:text max-sm:text-sm/6"
										
									>
										FAQ
									</a>
							</div>
						</div>	
				
				<div className="flex gap-2 ">	
					<div className="lg:block md:block sm:hidden max-sm:hidden max-md:hiddden ">
						<div className=" nav boxnav flex flex-row justify-between  rounded-3xl border border-gray-100 p-4 dark:border-gray-700 md:mt-0 md:flex-row md:border-0 md:text-sm md:font-medium gap-5 ">Contact Us</div>
					</div>
					</div>
					<div className="max-lg:hidden max-md:hidden md:hidden max-sm:block sm:block rounded-2xl w-full">	
<div className="flex gap-2 w-full">
		
<div className=" nav boxnav flex w-full justify-between  rounded-4xl p-2"  >

<div className="flex items-center  w-full ">		
				
				<a to="/" >
						<img
							loading="lazy"
							src="logo.png"
							className="h-auto sm:h-8 md:h-12 sm:h-auto w-[50%]  "
							alt="IEEE ESSTHS"
						/>
					</a></div>
<div className="p-4 menu z-10"   onClick={ () => setIsMenuOpen(!isMenuOpen)}><img className=" bg-none  w-full h-auto" src="Menu.svg"  loading="lazy"/></div></div>
</div>
							
				</div>
				
                     {/* <div className="flex items-center gap-2 ">
						<div className="hidden w-auto items-center justify-between lg:flex">
							<ul className="flex flex-col rounded-lg border border-gray-100 p-4 dark:border-gray-700 md:mt-0 md:flex-row md:border-0 md:text-sm md:font-medium">
								
				
								 <li>
									<a
										href="#"
										className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white  md:bg-transparent md:p-0 md:text-blue-700"
										aria-current="page"
									>
										Keynote
									</a>
								</li>
								<li>
									<a
										href="#"
										className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
									>
										Stage 
									</a>
								</li> 
							</ul>
						</div>

			

						
					</div>  */}
				</div>

			</nav>

				{isMenuOpen &&	( <div className="lg:hidden">
							<div className="top-0 navmobile boxnav flex flex-col justify-center p-4   gap-14 z-10 fixed w-full h-full max-sm:justify-center max-sm:items-center backdrop-blur-xl"  onClick={ () => setIsMenuOpen(!isMenuOpen)}>
								
								<a
										href="#home"
										className="sm:text-sm md:text max-sm:text-sm/6 cursor-pointer"
									
									>
										Home
									</a>
								
									<a
										href="#about"
										className=" sm:text-sm md:text max-sm:text-sm/6"
										aria-current="About"
									>
										About
									</a>
								 	<a
										href="#value"
										className=" sm:text-sm md:text max-sm:text-sm/6"
										
									>
										Values
									</a>
										<a
										href="#activities"
										className=" sm:text-sm md:text max-sm:text-sm/6"
										
									>
										Activities
									</a>
										<a
										href="#drone"
										className="sm:text-sm md:text max-sm:text-sm/6 "
										
									>
										Drone Project
									</a>
									<a
										href="#faq"
										className=" sm:text-sm md:text max-sm:text-sm/6"
										
									>
										FAQ
									</a>
							</div>
					</div>)}
		</div>
	);
}
