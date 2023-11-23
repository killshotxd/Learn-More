import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const { currentUser, signInGoogle } = UserAuth();

  const login = async () => {
    try {
      await signInGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    } else return;
  }, [currentUser]);
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Z-COMMERCE</h1>
            <p className="mb-5">
              Empower Your Electronics Journey: Z-Commerce, where innovation
              meets convenience. Explore cutting-edge gadgets with seamless
              online shopping. Elevate your tech experience, shop smarter with
              Z-Commerce. Unleash possibilities, shop electronics effortlessly.
            </p>
            <div className="flex flex-col gap-3">
              <button onClick={() => login()} className="btn btn-warn">
                Get Started
              </button>
              <button onClick={() => navigate("/")} className="btn btn-neutral">
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
