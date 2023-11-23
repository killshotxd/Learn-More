import courseImg1 from "../assets/ckpkwza6sh91277gavrq.avif";
import courseImg2 from "../assets/mern.webp";
import { FaStar, FaRegStar } from "react-icons/fa";

const PopularCourses = () => {
  return (
    <>
      <section className="min-h-[70vh]">
        <div>
          <h2 className="text-center font-bold text-2xl">
            Unlock Career Opportunities with Our Courses
          </h2>
        </div>

        <div className="px-16 py-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 space-x-4 space-y-4 ">
          {/* CARD */}
          <div className="max-w-sm p-2 border-2 rounded-md space-y-4 mt-4 ml-4">
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
          <div className="max-w-sm p-2 border-2 rounded-md space-y-4">
            <div>
              <img className="rounded-xl" src={courseImg1} alt="course" />
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
          <div className="max-w-sm p-2 border-2 rounded-md space-y-4">
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
          <div className="max-w-sm p-2 border-2 rounded-md space-y-4">
            <div>
              <img className="rounded-xl" src={courseImg1} alt="course" />
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
      </section>
    </>
  );
};

export default PopularCourses;
