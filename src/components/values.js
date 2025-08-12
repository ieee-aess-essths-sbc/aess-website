
import './values.css'

export default function Values() {

	return (
    <section id="value">
	  <div  className="lg:px-14 max-sm:p-0 sm:p-0 flex flex-col items-center content-center gap-10 ">
    <div><h2 className="content ">Values</h2></div>
		
		<div className="grid  max-sm:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 
    sm:gap-6
    max-sm:gap-6 lg:gap-6 max-w-6xl mx-auto max-sm:max-w-full sm:max-w-full">
		  {values.map((value, index) => (
			
			  <div
              key={index}
				className={` card relative flex flex-col items-left lg:p-16 sm:p-4 max-sm:p-4 rounded-2xl justify-between lg:gap-8 sm:gap-4 max-sm:gap-2`}
			  >
				<div className='font-bold lg:text-4xl sm:text-2xl text-wrap '>{value.title}</div>
                	<div className='text-2xl sm:text-md max-sm:text-sm'>{value.content}</div>
			
			  </div>
		
		  ))}
		</div>
	  </div>
    </section>
	);
  }
  

  export const values=[{
    title:"Excellence in complex systems ",
    content:"We focus on advancing the design, development, and operation of complex systems used in space, air, ocean, and ground environments."
  },{
    title:"Diversity and inclusion ",
    content:"We welcome people of all ages, cultures, and backgrounds, whether they work in theory, management, or practical applications."
  },{
    title:"Innovation and leadership",
    content:"We promote new ideas and technical excellence through conferences, publications, and industry partnerships."
  },{
    title:"Member support and engagement ",
    content:"We work to involve and help our members through useful activities and a strong professional network."
  }]