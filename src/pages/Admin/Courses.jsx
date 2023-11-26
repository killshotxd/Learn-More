import { useState } from "react";
import { BsDash, BsPlus } from "react-icons/bs";
import toast, { Toaster } from "react-hot-toast";
const Courses = () => {
  const [cname, setCname] = useState("");
  const [cProvide, setCourseProvide] = useState([""]);
  const [prerequisites, setPrerequisites] = useState([""]);
  const [courseDetails, setCourseDetails] = useState([""]);
  const addCProvide = () => {
    setCourseProvide([...cProvide, ""]); // Add a new empty field
  };

  const removeCProvide = (indexToRemove) => {
    if (cProvide.length == 1) {
      toast.error("One Point is needed !", { id: "PROVIDED" });
      return;
    }
    const updatedFields = cProvide.filter(
      (_, index) => index !== indexToRemove
    );
    setCourseProvide(updatedFields); // Remove the field at the specified index
  };

  const handleInputChange = (index, value) => {
    const updatedFields = [...cProvide];
    updatedFields[index] = value;
    setCourseProvide(updatedFields); // Update the value of a specific field
  };

  //

  const addPrerequisites = () => {
    setPrerequisites([...prerequisites, ""]); // Add a new empty field
  };

  const removePrerequisites = (indexToRemove) => {
    if (prerequisites.length == 1) {
      toast.error("One Point is needed !", { id: "PROVIDED" });
      return;
    }
    const updatedFields = prerequisites.filter(
      (_, index) => index !== indexToRemove
    );
    setPrerequisites(updatedFields); // Remove the field at the specified index
  };

  const handleInputChangePre = (index, value) => {
    const updatedFields = [...prerequisites];
    updatedFields[index] = value;
    setPrerequisites(updatedFields); // Update the value of a specific field
  };

  //

  return (
    <>
      <Toaster />
      {/* <div className="  flex justify-between items-center">
        <input
          type="text"
          placeholder="Search by product no, name or price."
          className="px-4 py-2 md:mb-4 border rounded-md"
        />
      </div> */}

      <h2 className="text-xl font-semibold">Add Courses</h2>

      <div className="mt-12">
        <div className="grid md:grid-cols-3  sm:grid-cols-2 gap-8">
          <div>
            <label htmlFor="cname" className="font-medium">
              Course Name
            </label>
            <input
              type="text"
              value={cname}
              onChange={(e) => setCname(e.target.value)}
              id="cname"
              placeholder="Course Name"
              className="w-full pl-3 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="name" className="font-medium">
              What You&apos;ll Learn From This Course?
            </label>

            {cProvide.map((field, index) => (
              <div key={index} className="flex items-center space-x-2 ">
                <input
                  type="text"
                  value={cProvide[index]}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  className="w-full pl-3 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
                {cProvide.length > 1 && (
                  <button type="button" onClick={() => removeCProvide(index)}>
                    <BsDash />
                  </button>
                )}
              </div>
            ))}
            <div className="flex justify-end mt-2">
              <button
                type="button"
                className="btn btn-neutral w-36 h-3"
                onClick={addCProvide}
              >
                <BsPlus /> Add Field
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="name" className="font-medium">
              What Are The Prerequisites For This Course?
            </label>

            {prerequisites.map((field, index) => (
              <div key={index} className="flex items-center space-x-2 ">
                <input
                  type="text"
                  value={prerequisites[index]}
                  onChange={(e) => handleInputChangePre(index, e.target.value)}
                  className="w-full pl-3 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
                {prerequisites.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removePrerequisites(index)}
                  >
                    <BsDash />
                  </button>
                )}
              </div>
            ))}
            <div className="flex justify-end mt-2">
              <button
                type="button"
                className="btn btn-neutral w-36 h-3"
                onClick={addPrerequisites}
              >
                <BsPlus /> Add Field
              </button>
            </div>
          </div>
        </div>

        <hr className="mt-6" />

        <div className="grid md:grid-cols-3  sm:grid-cols-2 gap-8"></div>
      </div>
    </>
  );
};

export default Courses;
