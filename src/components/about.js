import "./header.css"

export default function About() {

	return (
	
  <div id="about"  className="flex flex-col items-center justify-center gap-4">

	<div className="content">About</div>
		<section className="grid items-center md:grid-cols-16 align-center lg:justify-center lg:px-12 max-md:text-center md:text-center  sm:text-center max-sm:text-center">
			
				<div className="col-span-8  ">
					<h1 className=" fontheader text-4xl  font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none ">
IEEE AESS ESSTHS SBC					</h1>
					<h1 className=" text-md font-medium   lg:mb-7 lg:text-start lg:text-xl lg:font-normal md:text-center sm:text-center max-sm:text-center">
						The IEEE AESS ESSTHS Student Branch Chapter focuses on aerospace and electronic systems, with a hands-on approach to learning and innovation. We actively engage students through technical workshops, projects, and collaborations, including our flagship drone-building program that combines mechanical design, embedded systems, and software development. Beyond projects, we host expert-led sessions, technical talks, and peer learning circles to build practical skills and foster collaboration. Our mission is to empower students at our IEEE ESSTHS student branch to explore, create, and contribute to the evolving fields of aerospace and electronic technologies.
					</h1>
		
				</div>
                	<div className="col-span-8 w-full h-full">
					<img
                 
						src="momos.png"
				
						alt="TSYP 11"
						loading="lazy"
					/>
				</div>
			</section>
         
  </div>
    )
}