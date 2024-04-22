import { Fragment } from "react";
import profile from "../assets/me2.png";
import Typewriter from "typewriter-effect";

const Project = () => {
  return (
    <>
      <section className="" id="experience">
        <div className="mb-8">
          <h2
            className="text-primary-blue font-mono text-lg font-medium aos-init aos-animate"
            data-aos="fade-right"
          >
            My Experience
          </h2>
          <h3
            className="text-white font-sans font-bold text-2xl mt-1 aos-init aos-animate"
            data-aos="fade-up"
          >
            The places I've worked
          </h3>
        </div>
      </section>
    </>
  );
};

export default Project;
