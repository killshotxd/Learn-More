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

            <div className="mt-4 flex items-center gap-3">
              <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                  </div>
                </div>
                <div className="avatar placeholder">
                  <div className="w-12 bg-neutral text-neutral-content">
                    <span>+99</span>
                  </div>
                </div>
              </div>
              <p className="hover:text-purple-400 cursor-pointer font-semibold ">
                Join over 500,000 satisfied learners! Explore our courses now.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
