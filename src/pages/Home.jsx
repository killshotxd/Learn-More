import Faq from "../components/Faq";
import HeroSection from "../components/HeroSection";
import PopularCourses from "../components/PopularCourses";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <>
      <HeroSection />
      <PopularCourses />
      <Testimonial />
      <Faq />
    </>
  );
};

export default Home;
