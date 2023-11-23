import { FaUserCircle } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
const Header = () => {
  const { currentUser, logout, signInGoogle } = UserAuth();
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
      <div className="px-16 py-8 border-b-2 sticky flex justify-between items-center">
        <div>
          <h2 className="font-semibold text-xl">
            LearnMore <span>©</span>
          </h2>
        </div>
        <div className="flex items-center gap-16">
          <div>
            <ul className="flex items-center gap-8 ">
              <li>Home</li>
              <li>Courses</li>
              <li>About</li>
              <li>FAQ</li>
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
                      <a>Item 1</a>
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
