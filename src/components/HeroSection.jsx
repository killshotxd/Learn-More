import { MdOutlineSearch } from "react-icons/md";

const HeroSection = () => {
  return (
    <>
      <div className="hero min-h-[90vh] bg-base-100">
        <div className="hero-content flex-col lg:flex-row gap-24">
          <img
            src="https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="md:max-w-xl sm:max-w-sm max-w-xs rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-semibold italic">
              Enhance Your Online Learning Experience Instantly
            </h1>
            <p className="py-6">
              We offer 20,000+ online courses with over 500,000 registered
              students. Discover your desired courses among our diverse
              selection.
            </p>
            <div className="relative">
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
        </div>
      </div>
    </>
  );
};

export default HeroSection;
