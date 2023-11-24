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
import Admin from "./pages/Admin/Admin";

const App = () => {
  const { currentUser } = UserAuth();
  const location = useLocation();
  console.log(currentUser);
  return (
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
      </Routes>
    </>
  );
};

export default App;
