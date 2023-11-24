import { FaRegStar, FaStar } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import ReactPlayer from "react-player";
const CourseDetails = () => {
  return (
    <>
      <div className="grid md:grid-cols-[65%_35%]">
        <div className="md:px-16 px-4 py-8 space-y-4">
          <h1 className="text-2xl font-semibold">
            MERN Stack Course - MongoDB, Express, React and NodeJS
          </h1>

          <div className="flex items-center justify-between ">
            <span className="flex items-center gap-2">
              <FaStar className=" text-orange-300" />
              <FaStar className=" text-orange-300" />
              <FaStar className=" text-orange-300" />
              <FaStar className=" text-orange-300" />
              <FaRegStar />
            </span>
            <span>3 Student</span>
          </div>

          <div className="">
            <h2 className="text-xl font-semibold mt-12">
              What You&apos;ll Learn From This Course?
            </h2>

            <ul className="space-y-4 mt-4">
              <li>
                {" "}
                <p className="flex items-center gap-2">
                  <FaCheckCircle className=" min-w-[24px] min-h-[24px]" />
                  Learning the MERN stack makes it easier to grasp other
                  JavaScript libraries and full stack development technologies.
                </p>
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className=" min-w-[24px] min-h-[24px]" /> By
                specializing in the MERN stack, developers can access several
                career opportunities.
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className=" min-w-[24px] min-h-[24px]" /> MERN
                stack is a collection of technologies that enables faster
                application development.
              </li>
            </ul>
          </div>

          <div className="">
            <h2 className="text-xl font-semibold mt-12">
              What are the prerequisites for starting this course?
            </h2>

            <ul className="space-y-4 mt-4">
              <li>
                {" "}
                <p className="flex items-center gap-2">
                  <FaCheckCircle className=" min-w-[24px] min-h-[24px]" />
                  You’ll need to have basic understanding of HTML, CSS.
                </p>
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className=" min-w-[24px] min-h-[24px]" /> By
                You’ll need to be very comfortable programming with JavaScript.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mt-12">Course Overview</h2>

            <ul className="space-y-4 mt-4">
              <li>
                {" "}
                <p className="flex items-center gap-2">Introduction</p>
                <small>1 Lessons • 40 Minutes</small>
              </li>
              <li>
                <p className="flex items-center gap-2">Web Development</p>
                <small>1 Lessons • 40 Minutes</small>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mt-12">Course Details</h2>

            <ul className="space-y-4 mt-4">
              <li>
                {" "}
                <p className="flex items-center gap-2">
                  ✅ Learn how to build big full stack app from scratch.
                </p>
              </li>
              <li className="flex items-center gap-2">
                <p className="flex items-center gap-2">
                  ✅ Learn how to connect Front-End application (React) with
                  Backend application (Express, MongoDB, NodeJS).
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:fixed md:top-30 mt-4 md:right-16 max-h-screen">
          <div>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
              controls="true"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
