import { FaRegStar, FaStar } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";
import RenderHTML from "../components/RenderHTML";
import { useEffect } from "react";
const CourseDetails = () => {
  // useEffect(() => {
  //   const preventRightClick = (e) => {
  //     e.preventDefault();
  //   };

  //   const preventCopyPasteInspect = () => {
  //     document.addEventListener("contextmenu", preventRightClick);
  //     document.addEventListener("copy", preventRightClick);
  //     document.addEventListener("cut", preventRightClick);
  //     document.addEventListener("paste", preventRightClick);
  //     document.addEventListener("keydown", (e) => {
  //       if (
  //         e.ctrlKey &&
  //         (e.keyCode === 85 || e.keyCode === 67 || e.keyCode === 73)
  //       ) {
  //         e.preventDefault();
  //       }
  //     });
  //   };

  //   const removePreventCopyPasteInspect = () => {
  //     document.removeEventListener("contextmenu", preventRightClick);
  //     document.removeEventListener("copy", preventRightClick);
  //     document.removeEventListener("cut", preventRightClick);
  //     document.removeEventListener("paste", preventRightClick);
  //   };

  //   preventCopyPasteInspect();

  //   return () => {
  //     removePreventCopyPasteInspect();
  //   };
  // }, []);
  const location = useLocation();
  const state = location.state;
  console.log(state);
  return (
    <>
      <div className="grid cdGridRevFlex md:grid-cols-[65%_35%]">
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
          <div className="">
            <ReactPlayer
              url={state?.VideoUrl}
              controls={true}
              className="react-player"
              config={{
                file: {
                  attributes: {
                    controlsList: "nodownload", // Disable download option
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
