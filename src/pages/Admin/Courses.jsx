import { useRef, useState } from "react";
import { BsDash, BsFileImage, BsPlus } from "react-icons/bs";
import toast, { Toaster } from "react-hot-toast";
import { MultiSelect } from "react-multi-select-component";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../Firebase";
import { UserAuth } from "../../context/AuthContext";
const Courses = () => {
  const { currentUser } = UserAuth();
  const [cname, setCname] = useState("");
  const [cPrice, setCPrice] = useState("");
  const [cDiscount, setCDiscount] = useState("");
  const [cProvide, setCourseProvide] = useState([""]);
  const [prerequisites, setPrerequisites] = useState([""]);
  const [courseDetails, setCourseDetails] = useState([""]);
  const [selected, setSelected] = useState([]);
  const imagePicker = useRef();
  const [imageUrl, setImageUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [profileImageUploadStarted, setProfileImageUploadStarted] =
    useState(false);
  const handleImageClick = () => {
    imagePicker.current.click();
  };

  const options = [
    { value: "NodeJs", label: "NodeJs" },
    { value: "Angular", label: "Angular" },
    { value: "Java", label: "Java" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "Python", label: "Python" },
    { value: "AI/ML", label: "AI/ML" },
    { value: "React", label: "React" },
    { value: "Web Development", label: "Web Development" },
    { value: "C/C++", label: "C/C++" },
    { value: "VueJs", label: "VueJs" },
    { value: "Web Development", label: "Web Development" },
    { value: "Mobile App Development", label: "Mobile App Development" },
    { value: "Data Science", label: "Data Science" },
    { value: "Machine Learning", label: "Machine Learning" },
    { value: "Artificial Intelligence", label: "Artificial Intelligence" },
    { value: "Cloud Computing", label: "Cloud Computing" },
    { value: "Cybersecurity", label: "Cybersecurity" },
    { value: "Game Development", label: "Game Development" },
    { value: "Graphic Design", label: "Graphic Design" },
    { value: "UI/UX Design", label: "UI/UX Design" },
    { value: "Digital Marketing", label: "Digital Marketing" },
    { value: "Finance & Accounting", label: "Finance & Accounting" },
    { value: "Business Development", label: "Business Development" },
    { value: "Language Learning", label: "Language Learning" },
    { value: "Photography", label: "Photography" },
    { value: "Music & Audio", label: "Music & Audio" },
    { value: "Health & Fitness", label: "Health & Fitness" },
    { value: "Personal Development", label: "Personal Development" },
    { value: "Cooking & Culinary Arts", label: "Cooking & Culinary Arts" },
    { value: "Science", label: "Science" },
    { value: "Humanities", label: "Humanities" },
  ];

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

  const addCDetails = () => {
    setCourseDetails([...courseDetails, ""]); // Add a new empty field
  };

  const removeCDetails = (indexToRemove) => {
    if (courseDetails.length == 1) {
      toast.error("One Point is needed !", { id: "PROVIDED" });
      return;
    }
    const updatedFields = courseDetails.filter(
      (_, index) => index !== indexToRemove
    );
    setCourseDetails(updatedFields); // Remove the field at the specified index
  };

  const handleInputChangeCD = (index, value) => {
    const updatedFields = [...courseDetails];
    updatedFields[index] = value;
    setCourseDetails(updatedFields); // Update the value of a specific field
  };

  //

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;
    setProfileImageUploadStarted(true);
    uploadImage(
      file,
      (progress) => {
        setProgress(Math.round(progress));
      },
      (url) => {
        setImageUrl(url);

        uploadImage(url);

        setProfileImageUploadStarted(false);
        setProgress(0);
      },
      (err) => {
        console.log("Error->", err);
        setProfileImageUploadStarted(false);
      }
    );
  };

  // UPLOAD TO FIREBASE STORAGE
  const uploadImage = (file, progressCallback, urlCallback, errorCallback) => {
    if (!file) {
      errorCallback("File not found");
      return;
    }
    const fileType = file.type;
    const storageRef = ref(
      storage,
      `${currentUser.email}/${fileType}/${file.name}`
    );
    const task = uploadBytesResumable(storageRef, file);
    task.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        progressCallback(progress);
      },
      (error) => {
        errorCallback(error.message);
      },
      () => {
        getDownloadURL(storageRef).then((url) => {
          urlCallback(url);
          toast.success("Image Uploaded Successfully!");
        });
      }
    );
  };
  return (
    <>
      <Toaster />
      <input
        type="file"
        hidden
        accept="image/*"
        ref={imagePicker}
        onChange={handleImageChange}
      />

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
                  placeholder="Full Stack Web Development"
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
                  placeholder="Javascript"
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

        <div className="grid md:grid-cols-3  sm:grid-cols-2 gap-8">
          <div className="mt-6">
            <label htmlFor="name" className="font-medium">
              Course Details?
            </label>

            {courseDetails.map((field, index) => (
              <div key={index} className="flex items-center space-x-2 ">
                <input
                  type="text"
                  value={courseDetails[index]}
                  onChange={(e) => handleInputChangeCD(index, e.target.value)}
                  className="w-full pl-3 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
                {courseDetails.length > 1 && (
                  <button type="button" onClick={() => removeCDetails(index)}>
                    <BsDash />
                  </button>
                )}
              </div>
            ))}
            <div className="flex justify-end mt-2">
              <button
                type="button"
                className="btn btn-neutral w-36 h-3"
                onClick={addCDetails}
              >
                <BsPlus /> Add Field
              </button>
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="cPrice" className="font-medium">
              Course Price
            </label>
            <input
              type="text"
              value={cPrice}
              onChange={(e) => setCPrice(e.target.value)}
              id="cPrice"
              placeholder="Course Price"
              className="w-full pl-3 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>

          <div className="mt-6">
            <label htmlFor="cDiscount" className="font-medium">
              Course Discount Price
            </label>
            <input
              type="text"
              value={cDiscount}
              onChange={(e) => setCDiscount(e.target.value)}
              id="cDiscount"
              placeholder="Course Discount Price"
              className="w-full pl-3 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3  sm:grid-cols-2 gap-8">
          <div className="mt-6">
            <label className="font-medium">Category : </label>
            <MultiSelect
              options={options}
              value={selected}
              onChange={setSelected}
              labelledBy="Select"
            />
          </div>
          {/* IMG DIV */}
          <div className="flex justify-center  items-center gap-2 mt-6">
            <div
              onClick={handleImageClick}
              className=" cursor-pointer btn-ghost w-full p-6 rounded flex justify-center items-center text-xs gap-1"
            >
              <BsFileImage size={30} /> Please upload a Cover
            </div>
          </div>
          <div className="w-full customImgDiv flex justify-center m-auto items-center px-2 max-w-xs">
            <figure>
              <input className="w-1/2" type="image" src={imageUrl} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
