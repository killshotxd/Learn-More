import { FaRegStar, FaStar } from "react-icons/fa";
import courseImg2 from "../assets/mern.webp";
import { MdOutlineSearch } from "react-icons/md";
const Courses = () => {
  return (
    <>
      <div className="px-16 py-8">
        <div className="md:px-4">
          <div className="flex flex-wrap items-center gap-4 ">
            <p className="badge badge-error badge-lg">All</p>
            <p className="badge badge-primary badge-lg">Web Development</p>
            <p className="badge badge-primary badge-lg">Python</p>
            <p className="badge badge-primary badge-lg">C/C++</p>
            <p className="badge badge-primary badge-lg">DSA</p>
          </div>

          <div className="relative mt-4 ">
            <input
              type="text"
              placeholder="Search Courses.."
              className="input input-bordered input-info w-full focus:outline-none"
            />
            <span className=" cursor-pointer absolute heroSearchBtn">
              <MdOutlineSearch className="text-white" size={24} />
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 content-center">
          {/* CARD */}
          <div className="max-w-sm p-2 border-2 rounded-md space-y-4 mt-4 md:ml-4">
            <div>
              <img className="rounded-xl" src={courseImg2} alt="course" />
            </div>
            <div className="space-y-2">
              <p className="font-semibold">
                MERN STACK COURSE - MongoDB, Express, React and NodeJS
              </p>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <FaStar className=" text-orange-300" />
                  <FaStar className=" text-orange-300" />
                  <FaStar className=" text-orange-300" />
                  <FaStar className=" text-orange-300" />
                  <FaRegStar />
                </span>
                <span>3 Student</span>
              </div>
              <div className="flex items-center justify-between">
                <span>₹21,999</span>
                <span>3 Lectures</span>
              </div>
            </div>
          </div>
          {/* CARD */}
          {/* CARD */}
          <div className="max-w-sm p-2 border-2 rounded-md space-y-4 mt-4 md:ml-4">
            <div>
              <img className="rounded-xl" src={courseImg2} alt="course" />
            </div>
            <div className="space-y-2">
              <p className="font-semibold">
                MERN STACK COURSE - MongoDB, Express, React and NodeJS
              </p>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <FaStar className=" text-orange-300" />
                  <FaStar className=" text-orange-300" />
                  <FaStar className=" text-orange-300" />
                  <FaStar className=" text-orange-300" />
                  <FaRegStar />
                </span>
                <span>3 Student</span>
              </div>
              <div className="flex items-center justify-between">
                <span>₹21,999</span>
                <span>3 Lectures</span>
              </div>
            </div>
          </div>
          {/* CARD */}
          {/* CARD */}
          <div className="max-w-sm p-2 border-2 rounded-md space-y-4 mt-4 md:ml-4">
            <div>
              <img className="rounded-xl" src={courseImg2} alt="course" />
            </div>
            <div className="space-y-2">
              <p className="font-semibold">
                MERN STACK COURSE - MongoDB, Express, React and NodeJS
              </p>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <FaStar className=" text-orange-300" />
                  <FaStar className=" text-orange-300" />
                  <FaStar className=" text-orange-300" />
                  <FaStar className=" text-orange-300" />
                  <FaRegStar />
                </span>
                <span>3 Student</span>
              </div>
              <div className="flex items-center justify-between">
                <span>₹21,999</span>
                <span>3 Lectures</span>
              </div>
            </div>
          </div>
          {/* CARD */}
          {/* CARD */}
          <div className="max-w-sm p-2 border-2 rounded-md space-y-4 mt-4 md:ml-4">
            <div>
              <img className="rounded-xl" src={courseImg2} alt="course" />
            </div>
            <div className="space-y-2">
              <p className="font-semibold">
                MERN STACK COURSE - MongoDB, Express, React and NodeJS
              </p>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <FaStar className=" text-orange-300" />
                  <FaStar className=" text-orange-300" />
                  <FaStar className=" text-orange-300" />
                  <FaStar className=" text-orange-300" />
                  <FaRegStar />
                </span>
                <span>3 Student</span>
              </div>
              <div className="flex items-center justify-between">
                <span>₹21,999</span>
                <span>3 Lectures</span>
              </div>
            </div>
          </div>
          {/* CARD */}
        </div>
      </div>
    </>
  );
};

export default Courses;
