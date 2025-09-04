import './header.css';

export default function About() {
  return (
    <div id="about" className=" text-white flex flex-col items-center justify-center p-10">
      <div className="content">About</div>
      <section className="align-center grid items-center max-md:text-center max-sm:text-center sm:text-center md:grid-cols-16 md:text-center lg:justify-center lg:px-12">
        <div className="col-span-8">
          <h1 className="fontheader text-4xl font-bold tracking-tight lg:mb-7 lg:text-start lg:text-5xl lg:leading-none lg:font-extrabold">
            IEEE AESS ESSTHS SBC{' '}
          </h1>
          <h1 className="text-md font-medium max-sm:text-center sm:text-center md:text-center lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
            The IEEE AESS ESSTHS Student Branch Chapter focuses on aerospace and electronic systems,
            with a hands-on approach to learning and innovation. We actively engage students through
            technical workshops, projects, and collaborations, including our flagship drone-building
            program that combines mechanical design, embedded systems, and software development.
            Beyond projects, we host expert-led sessions, technical talks, and peer learning circles
            to build practical skills and foster collaboration. Our mission is to empower students
            at our IEEE ESSTHS student branch to explore, create, and contribute to the evolving
            fields of aerospace and electronic technologies.
          </h1>
        </div>
        <div className="col-span-8 h-full w-full">
          <img src="momos.png" alt="TSYP 11" loading="lazy" />
        </div>
      </section>
    </div>
  );
}
