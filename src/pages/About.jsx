import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/js.svg";
import react from "../assets/react.svg";
import tailwind from "../assets/tailwind.svg";
import firebase from "../assets/firebase.svg";
import angular from "../assets/angular.svg";
import getbootstrap from "../assets/getbootstrap.svg";
import resume from "../assets/MohdResume.pdf";
const About = () => {
  return (
    <>
      <div className="hero h-[88vh] bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="hero-img"></div>
          {/* <img src={pix} className="max-w-sm rounded-lg shadow-2xl" /> */}
          <div className="text-intro">
            <h1 className="text-5xl font-bold">Web Developer 👋🏻</h1>
            <p className="py-6">
              Hi, I am Mohd Hassan. A passionate Web Developer.
            </p>
            <div className="flex social-intro gap-3">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/killshotxd"
              >
                <BsGithub size={30} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/mohd-hassan-11707a223/"
              >
                {" "}
                <BsLinkedin size={30} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/ihassanansari"
              >
                <BsInstagram size={30} />
              </a>
            </div>
            <div className="mt-8 flex gap-8 items-center">
              <p className="text-xl font-semibold w-fit pr-6 border-r-2 border-black">
                Tech Stack
              </p>

              <div className="logos">
                <ul>
                  <li>
                    <img src={html} alt="" />
                  </li>
                  <li>
                    <img src={css} alt="" />
                  </li>
                  <li>
                    <img src={js} alt="" />
                  </li>
                  <li>
                    <img src={react} alt="" />
                  </li>
                  <li>
                    <img src={firebase} alt="" />
                  </li>
                  <li>
                    <img src={angular} alt="" />
                  </li>
                  <li>
                    <img src={tailwind} alt="" />
                  </li>
                  <li>
                    <img src={getbootstrap} alt="" />
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 btn-intro">
              <a
                download
                href={resume}
                className="btn btn-secondary bg-purple-500 outline-purple-500 border-inherit hover:bg-purple-500 hover:border-purple-500 "
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
