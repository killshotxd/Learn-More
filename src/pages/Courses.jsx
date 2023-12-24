import { FaRegStar, FaStar } from "react-icons/fa";
import courseImg2 from "../assets/mern.webp";
import { MdOutlineSearch } from "react-icons/md";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";
import { useNavigate, useLocation } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Courses = () => {
  const navigate = useNavigate();
  const [courseList, setCourses] = useState();
  const [filteredCourses, setFilteredCourses] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [pages, setPages] = useState(null);

  const itemsPerPage = 7;
  const location = useLocation();
  const state = location.state;
  console.log(state);
  const [searchQuery, setSearchQuery] = useState(
    state?.search ? state?.search : ""
  );
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
      setFilteredCourses(courseList);
      return courseList;
    } catch (error) {
      console.error("Error fetching documents:", error);
      return [];
    }
  };
  useEffect(() => {
    fetchCourses();
  }, [currentPage]);

  const allCategories = courseList?.reduce((categories, course) => {
    course.category.forEach((category) => {
      if (!categories.includes(category.value)) {
        categories.push(category.value);
      }
    });
    return categories;
  }, []);

  const handleCategoryFilter = (selectedCategory) => {
    // Filter courses based on selectedCategory
    const filteredCourses = selectedCategory
      ? courseList?.filter((course) =>
          course?.category?.some((cat) => cat.value === selectedCategory)
        )
      : courseList;

    // Update state with filtered courses
    setFilteredCourses(filteredCourses);
  };

  const filteredCoursesSearch = filteredCourses?.filter((course) => {
    const lowerCaseQuery = searchQuery?.toLowerCase();
    const isInCourseName = course.name?.toLowerCase()?.includes(lowerCaseQuery);
    const isInCategory = course.category.some((cat) =>
      cat.value?.toLowerCase()?.includes(lowerCaseQuery)
    );

    return isInCourseName || isInCategory;
  });

  return (
    <>
      <div className="px-16 py-8">
        <div className="md:px-4">
          <div className="flex flex-wrap items-center gap-4">
            <p
              className={`badge ${
                selectedCategory == "All"
                  ? "badge-error text-white"
                  : "badge-primary"
              } badge-lg cursor-pointer`}
              onClick={() => {
                handleCategoryFilter(null);
                setSearchQuery("");
                setSelectedCategory("All");
              }}
            >
              All
            </p>
            {allCategories?.map((category, index) => (
              <p
                key={index}
                className={`badge ${
                  selectedCategory === category
                    ? "badge-error text-white"
                    : "badge-primary"
                } badge-lg cursor-pointer`}
                onClick={() => {
                  handleCategoryFilter(category);
                  setSearchQuery("");
                  setSelectedCategory(category);
                }}
              >
                {category}
              </p>
            ))}
          </div>

          <div className="relative mt-4 ">
            <input
              type="text"
              placeholder="Search Courses.."
              className="input input-bordered input-info w-full focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span className=" cursor-pointer absolute heroSearchBtn">
              <MdOutlineSearch className="text-white" size={24} />
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 content-center">
          {courseList ? (
            <>
              {filteredCoursesSearch?.map((res) => (
                <div
                  key={res?.did}
                  onClick={() =>
                    navigate(`/course-details/${res.did}`, { state: res })
                  }
                  className="max-w-sm p-2 border-2 rounded-md space-y-4 mt-4 md:ml-4"
                >
                  <div>
                    <img
                      className="rounded-xl"
                      src={res.imageUrl}
                      alt="course"
                    />
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
              ))}
            </>
          ) : (
            <>
              <div className="mt-6 ml-6 ">
                <Skeleton count={10} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Courses;
