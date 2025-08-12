import "./footer.css"

export default function Footer() { 


    return (
        <>
        <div className="footer lg:py-8 lg:px-16 max-sm:px-10 sm:px-10 max-md:px-10 md:px-10">
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
			<img className=" p-2 border-white border-1 bg-white rounded-full " src="GitHub_colored.svg"  loading="lazy"/>
	<img className="p-2 border-white border-1 bg-none rounded-full " src="Facebook.svg"  loading="lazy"/>
		<img className="p-2 border-white border-1 bg-none rounded-full " src="Instagram.svg"  loading="lazy"/>
			<img className="p-2 border-white border-1 bg-none rounded-full " src="LinkedIn.svg"  loading="lazy"/>
			
			</div>
                </div>
                <div className="flex flex-row flex-1 lg:justify-evenly lg:gap-5 max-md:justify-between sm:justify-between max-sm:justify-between sm:w-full max-sm:w-full">
                <div className="flex flex-col justify-between gap-5">
<div>Home</div>
<div>About</div>
<div>Values</div>
<div>Activities</div>
<div>Drone Project</div>
<div>FAQ</div>
</div>

 <div className="flex flex-col justify-start gap-5 ">
 
 <div>Contact</div>
<div   className="flex flex-row"><img className="p-2  bg-none rounded-full " src="Location.png"  loading="lazy"/>ESSTHS University - Sousse , Tunisia</div>
<div  className="flex flex-row  "><img className="p-2  bg-none rounded-full " src="email.png"  loading="lazy"/>ieee.aess.essths.sbc@gmail.com</div>
<div  className="flex flex-row  "><img className="p-2 bg-none rounded-full " src="Phone.png"  loading="lazy"/>+216 - 99 999 999</div>
</div>

                </div>
            </div>
            </div>
        </>
    )
}