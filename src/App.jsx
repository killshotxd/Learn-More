import { Route, Routes, useLocation } from "react-router-dom";
import { UserAuth } from "./context/AuthContext";
import Home from "./pages/Home";
import Header from "./components/Header";
import About from "./pages/About";
import Courses from "./pages/Courses";
import FaqPage from "./pages/FaqPage";
import Admin from "./pages/Admin/Admin";
import CourseDetails from "./components/CourseDetails";
import { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";

const App = () => {
  const { currentUser } = UserAuth();
  const location = useLocation();
  const [loadTime, setLoadTime] = useState(2);

  useEffect(() => {
    setTimeout(() => {
      setLoadTime(0);
    }, 1500);
  }, []);
  console.log(currentUser);
  return (
    <>
      {loadTime == 0 ? (
        <>
          {location.pathname == "/login" || location.pathname == "/admin" ? (
            <> </>
          ) : (
            <>
              {" "}
              <Header />
            </>
          )}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/course-details/:id" element={<CourseDetails />} />
          </Routes>
        </>
      ) : (
        <>
          <div className="flex justify-center m-auto items-center h-screen">
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          </div>
        </>
      )}
    </>
  );
};

export default App;
