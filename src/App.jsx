import { Route, Routes, useLocation } from "react-router-dom";
import { UserAuth } from "./context/AuthContext";
import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Courses from "./pages/Courses";
import FaqPage from "./pages/FaqPage";

const App = () => {
  const { currentUser } = UserAuth();
  const location = useLocation();
  console.log(currentUser);
  return (
    <>
      {location.pathname == "/login" ? (
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
      </Routes>
    </>
  );
};

export default App;
