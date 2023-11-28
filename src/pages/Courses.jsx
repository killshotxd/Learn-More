import { FaRegStar, FaStar } from "react-icons/fa";
import courseImg2 from "../assets/mern.webp";
import { MdOutlineSearch } from "react-icons/md";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";
import { useNavigate } from "react-router-dom";
const Courses = () => {
  const navigate = useNavigate();
  const [courseList, setCourses] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(null);
  const itemsPerPage = 7;
  const fetchCourses = async () => {
    try {
      // Get a reference to the "Admin" collection
      const courseRef = collection(db, "courses");

      // Get all documents in the "Admin" collection
      const querySnapshot = await getDocs(courseRef);

      // Extract the data from each document

      const courseList = querySnapshot.docs.map((doc) => ({
        did: doc.id,
        ...doc.data(),
      }));
      courseList.sort((a, b) => b.time - a.time);
      const totalPages = Math.ceil(courseList?.length / itemsPerPage);

      // Generate an array of page numbers
      const generatedPages = [];
      for (let i = 1; i <= totalPages; i++) {
        generatedPages.push(i);
      }
      // Update the adminList array in reverse order so the newest data comes first
      // setAdminList(adminList.reverse());

      // Now "adminList" contains an array of all documents in the "Admin" collection
      console.log(courseList);
      setPages(generatedPages);
      setCourses(courseList);
      return courseList;
    } catch (error) {
      console.error("Error fetching documents:", error);
      return [];
    }
  };
  useEffect(() => {
    fetchCourses();
  }, [currentPage]);
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
          {courseList?.map((res) => (
            <>
              {" "}
              <div
                onClick={() =>
                  navigate(`/course-details/${res.did}`, { state: res })
                }
                className="max-w-sm p-2 border-2 rounded-md space-y-4 mt-4 md:ml-4"
              >
                <div>
                  <img className="rounded-xl" src={res.imageUrl} alt="course" />
                </div>
                <div className="space-y-2">
                  <p className="font-semibold">{res.name}</p>

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
                    <span>
                      {new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                      }).format(parseFloat(res.price))}
                    </span>

                    <span>3 Lectures</span>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
