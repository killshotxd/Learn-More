import { FaStar } from "react-icons/fa";
import imgCover from "../assets/reviews.webp";
const Testimonial = () => {
  return (
    <>
      <section className="min-h-[70vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 px-16 space-y-4 md:space-y-0">
          <div>
            <img src={imgCover} alt="rev" />
          </div>
          <div className="flex flex-col h-full justify-center">
            <div>
              <h2 className="text-3xl font-semibold">
                Our Students Are Our Strength
              </h2>
              <h2 className="text-3xl font-semibold">
                See What They Say About Us..
              </h2>
            </div>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus et commodi consequatur perferendis, rerum amet delectus
              praesentium ipsam officiis laboriosam odio dolorem corporis quis
              deserunt. Officiis quas esse dolor voluptatum.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 px-16 space-y-4 md:space-y-0 mt-8 gap-8">
          <div className="border-2 rounded-md p-2">
            <div className="flex items-center gap-6">
              <div>
                <div className="avatar">
                  <div className="w-16 rounded-full">
                    <img src="https://images.unsplash.com/photo-1595986630530-969786b19b4d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                  </div>
                </div>
              </div>
              <div>
                <p>Shikha Kumari</p>
                <small>Junior Web Developer</small>
              </div>
              <div className="flex items-center gap-2">
                <FaStar className=" text-orange-300" />
                <FaStar className=" text-orange-300" />
                <FaStar className=" text-orange-300" />
                <FaStar className=" text-orange-300" />
              </div>
            </div>
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit, error exercitationem .
              </p>
            </div>
          </div>
          <div className="border-2 rounded-md p-2">
            <div className="flex items-center gap-6">
              <div>
                <div className="avatar">
                  <div className="w-16 rounded-full">
                    <img src="https://images.unsplash.com/photo-1595986630530-969786b19b4d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                  </div>
                </div>
              </div>
              <div>
                <p>Shikha Kumari</p>
                <small>Junior Web Developer</small>
              </div>
              <div className="flex items-center gap-2">
                <FaStar className=" text-orange-300" />
                <FaStar className=" text-orange-300" />
                <FaStar className=" text-orange-300" />
                <FaStar className=" text-orange-300" />
              </div>
            </div>
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit, error exercitationem .
              </p>
            </div>
          </div>

          <div className="border-2 rounded-md p-2">
            <div className="flex items-center gap-6">
              <div>
                <div className="avatar">
                  <div className="w-16 rounded-full">
                    <img src="https://images.unsplash.com/photo-1595986630530-969786b19b4d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                  </div>
                </div>
              </div>
              <div>
                <p>Shikha Kumari</p>
                <small>Junior Web Developer</small>
              </div>
              <div className="flex items-center gap-2">
                <FaStar className=" text-orange-300" />
                <FaStar className=" text-orange-300" />
                <FaStar className=" text-orange-300" />
                <FaStar className=" text-orange-300" />
              </div>
            </div>
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit, error exercitationem .
              </p>
            </div>
          </div>
          <div className="border-2 rounded-md p-2">
            <div className="flex items-center gap-6">
              <div>
                <div className="avatar">
                  <div className="w-16 rounded-full">
                    <img src="https://images.unsplash.com/photo-1595986630530-969786b19b4d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                  </div>
                </div>
              </div>
              <div>
                <p>Shikha Kumari</p>
                <small>Junior Web Developer</small>
              </div>
              <div className="flex items-center gap-2">
                <FaStar className=" text-orange-300" />
                <FaStar className=" text-orange-300" />
                <FaStar className=" text-orange-300" />
                <FaStar className=" text-orange-300" />
              </div>
            </div>
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit, error exercitationem .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
