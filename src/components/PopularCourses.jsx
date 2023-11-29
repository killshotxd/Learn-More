import { useEffect, useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "../Firebase";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const PopularCourses = () => {
  const navigate = useNavigate();
  const [courseList, setCourses] = useState();

  const fetchCourses = async () => {
    try {
      const courseRef = collection(db, "courses");

      // Query Firestore to get only the latest 4 courses
      const querySnapshot = await getDocs(
        query(courseRef, orderBy("timestamp", "desc"), limit(4))
      );

      const courseList = querySnapshot.docs.map((doc) => ({
        did: doc.id,
        ...doc.data(),
      }));

      // No need to sort or calculate totalPages since it's only fetching 4 courses

      // Update state with the fetched courses
      setCourses(courseList);
      return courseList;
    } catch (error) {
      console.error("Error fetching documents:", error);
      return [];
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);
  return (
    <>
      <section className="py-8">
        <div>
          <h2 className="text-center font-bold text-2xl">
            Unlock Career Opportunities with Our Courses
          </h2>
        </div>

        <div className="px-16 py-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 space-x-4 space-y-4 ">
          {/* CARD */}
          {courseList ? (
            <>
              {courseList.map((res) => (
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
      </section>
    </>
  );
};

export default PopularCourses;
