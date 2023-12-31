import { FaUserCircle } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
const Header = () => {
  const { currentUser, logout, signInGoogle } = UserAuth();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  console.log(currentUser);
  const signIn = async () => {
    try {
      await signInGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="px-16 py-8 border-b-2 top-0 bg-white sticky flex justify-between items-center z-50">
        <div>
          <h2 className="font-semibold text-xl">
            LearnMore <span>©</span>
          </h2>
        </div>
        <div className="flex items-center gap-28">
          <div className="hidden md:flex">
            <ul className="flex items-center font-medium cursor-pointer gap-12 ">
              <li
                onClick={() => navigate("/")}
                className={
                  location.pathname == "/" ? "font-semibold text-blue-400" : ""
                }
              >
                Home
              </li>
              <li
                onClick={() => navigate("/courses")}
                className={
                  location.pathname == "/courses" ||
                  location.pathname == "/course-details"
                    ? "font-semibold text-blue-400"
                    : ""
                }
              >
                Courses
              </li>
              <li
                onClick={() => navigate("/about")}
                className={
                  location.pathname == "/about"
                    ? "font-semibold text-blue-400"
                    : ""
                }
              >
                About
              </li>
              <li
                onClick={() => navigate("/faq")}
                className={
                  location.pathname == "/faq"
                    ? "font-semibold text-blue-400"
                    : ""
                }
              >
                FAQ
              </li>
            </ul>
          </div>
          <div>
            {" "}
            {currentUser ? (
              <>
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className=" cursor-pointer ">
                    <div className="avatar">
                      <div className="w-8 rounded-full">
                        <img src={currentUser?.photoURL} />
                      </div>
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>Profile</a>
                    </li>
                    <li onClick={() => navigate("/")} className="md:hidden">
                      <a>Home</a>
                    </li>
                    <li
                      onClick={() => navigate("/courses")}
                      className="md:hidden"
                    >
                      <a>Courses</a>
                    </li>
                    <li
                      onClick={() => navigate("/about")}
                      className="md:hidden"
                    >
                      <a>About</a>
                    </li>
                    <li onClick={() => navigate("/faq")} className="md:hidden">
                      <a>FAQ</a>
                    </li>
                    <li onClick={() => logOut()}>
                      <a> Log Out</a>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <FaUserCircle onClick={() => signIn()} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
