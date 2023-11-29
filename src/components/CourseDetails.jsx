import { FaRegStar, FaStar } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";
import RenderHTML from "../components/RenderHTML";
const CourseDetails = () => {
  const location = useLocation();
  const state = location.state;
  console.log(state);
  return (
    <>
      <div className="grid md:grid-cols-[65%_35%]">
        <div className="md:px-16 px-4 py-8 space-y-4">
          <h1 className="text-2xl font-semibold">{state?.name}</h1>

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
              {state.courseProvides.map((res, i) => (
                <>
                  <li key={i + 1}>
                    {" "}
                    <p className="flex items-center gap-2">
                      <FaCheckCircle className=" min-w-[24px] min-h-[24px]" />
                      {res}
                    </p>
                  </li>
                </>
              ))}
            </ul>
          </div>

          <div className="">
            <h2 className="text-xl font-semibold mt-12">
              What are the prerequisites for starting this course?
            </h2>

            <ul className="space-y-4 mt-4">
              {state.prerequisites.map((res, i) => (
                <>
                  <li key={i + 1}>
                    {" "}
                    <p className="flex items-center gap-2">
                      <FaCheckCircle className=" min-w-[24px] min-h-[24px]" />
                      {res}
                    </p>
                  </li>
                </>
              ))}
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

            <RenderHTML htmlContent={state.courseDetails} />
          </div>
        </div>
        <div className="md:fixed md:top-30 mt-4 md:right-16 max-h-screen px-6">
          <div className="md:w-[440px] md:h-[280px]">
            <ReactPlayer
              url={state?.VideoUrl}
              controls={true}
              className="react-player"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
