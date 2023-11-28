import { useEffect, useRef, useState } from "react";
import { BsCameraVideo, BsDash, BsFileImage, BsPlus } from "react-icons/bs";
import { BiTrash, BiEdit } from "react-icons/bi";
import toast, { Toaster } from "react-hot-toast";
import { MultiSelect } from "react-multi-select-component";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../../Firebase";
import { UserAuth } from "../../context/AuthContext";
import { addDoc, collection, doc, getDocs } from "firebase/firestore";
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
  const filePicker = useRef();
  const videoPicker = useRef();
  const [fileUrl, setFileUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [profileImageUploadStarted, setProfileImageUploadStarted] =
    useState(false);
  const handleImageClick = () => {
    imagePicker.current.click();
  };
  const [courseList, setCourses] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(null);
  const itemsPerPage = 7;
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

  //

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    if (!file) return;
    setProfileImageUploadStarted(true);
    uploadFile(
      file,
      (progress) => {
        setProgress(Math.round(progress));
      },
      (url) => {
        setFileUrl(url);

        uploadFile(url);

        setProfileImageUploadStarted(false);
        setProgress(0);
      },
      (err) => {
        console.log("Error->", err);
        setProfileImageUploadStarted(false);
      }
    );
  };

  // UPLOAD File TO FIREBASE STORAGE
  const uploadFile = (file, progressCallback, urlCallback, errorCallback) => {
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
          toast.success("File Uploaded Successfully!");
        });
      }
    );
  };

  const handleFileClick = () => {
    filePicker.current.click();
  };

  //

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    if (!file) return;
    setProfileImageUploadStarted(true);
    uploadFile(
      file,
      (progress) => {
        setProgress(Math.round(progress));
      },
      (url) => {
        setVideoUrl(url);

        uploadVideo(url);

        setProfileImageUploadStarted(false);
        setProgress(0);
      },
      (err) => {
        console.log("Error->", err);
        setProfileImageUploadStarted(false);
      }
    );
  };

  // UPLOAD File TO FIREBASE STORAGE
  const uploadVideo = (file, progressCallback, urlCallback, errorCallback) => {
    if (!file) {
      errorCallback("Video not found");
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
          toast.success("Video Uploaded Successfully!");
        });
      }
    );
  };

  const handleVideoClick = () => {
    videoPicker.current.click();
  };

  //

  const handleUploadCourse = async () => {
    if (!videoUrl || !imageUrl || !cname || !cPrice || !cProvide) {
      toast.error("Fill Required Fields");
      return;
    }
    try {
      const courseCollectionRef = collection(db, "courses");
      let courseDetailsFor = {
        name: cname,
        price: cPrice,
        discount: cDiscount,
        courseProvides: cProvide,
        prerequisites: prerequisites,
        courseDetails: courseDetails,
        category: selected,
        sourceCode: fileUrl,
        imageUrl: imageUrl,
        VideoUrl: videoUrl,
        timestamp: new Date().toLocaleDateString(),
        uploadedByName: currentUser.displayName,
        uploadedByEmail: currentUser.email,
      };
      await addDoc(courseCollectionRef, courseDetailsFor);
      toast.success("Course Added successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  //

  const fetchCourses = async () => {
    try {
      // Get a reference to the "Admin" collection
      const courseRef = collection(db, "courses");

      // Get all documents in the "Admin" collection
      const querySnapshot = await getDocs(courseRef);

      // Extract the data from each document

      const courseList = querySnapshot.docs.map((doc) => ({
        did: doc.id,
        ...doc.data(),
      }));
      courseList.sort((a, b) => b.time - a.time);
      const totalPages = Math.ceil(courseList?.length / itemsPerPage);

      // Generate an array of page numbers
      const generatedPages = [];
      for (let i = 1; i <= totalPages; i++) {
        generatedPages.push(i);
      }
      // Update the adminList array in reverse order so the newest data comes first
      // setAdminList(adminList.reverse());

      // Now "adminList" contains an array of all documents in the "Admin" collection
      console.log(courseList);
      setPages(generatedPages);
      setCourses(courseList);
      return courseList;
    } catch (error) {
      console.error("Error fetching documents:", error);
      return [];
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    fetchCourses();
  }, [currentPage]);
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
      <input
        type="file"
        hidden
        accept="application/*"
        ref={filePicker}
        onChange={handleFileChange}
      />
      <input
        type="file"
        hidden
        accept="video/*"
        ref={videoPicker}
        onChange={handleVideoChange}
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
                  placeholder=" Learn how to build big full stack app from scratch."
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

        <div className="grid md:grid-cols-2  sm:grid-cols-2 gap-8">
          <div className="flex flex-col gap-3 w-full py-6">
            <label className="font-semibold">Source Code File : </label>
            <div
              className=" cursor-pointer btn-ghost shadow-lg w-full p-6 rounded flex justify-center items-center text-xs gap-1"
              onClick={handleFileClick}
            >
              <BsFileImage size={30} /> Upload File from Here
            </div>
          </div>

          <div className="w-full customImgDiv flex justify-center m-auto items-center px-2 max-w-xs">
            <figure>
              {fileUrl !== "" ? (
                <>
                  {" "}
                  <div className="flex flex-col justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#c8e6c9"
                        d="M36,42H12c-3.314,0-6-2.686-6-6V12c0-3.314,2.686-6,6-6h24c3.314,0,6,2.686,6,6v24C42,39.314,39.314,42,36,42z"
                      ></path>
                      <path
                        fill="#4caf50"
                        d="M34.585 14.586L21.014 28.172 15.413 22.584 12.587 25.416 21.019 33.828 37.415 17.414z"
                      ></path>
                    </svg>{" "}
                    <p> File Uploaded</p>
                  </div>
                </>
              ) : (
                ""
              )}
            </figure>
          </div>
        </div>

        <div className="grid md:grid-cols-2  sm:grid-cols-2 gap-8">
          <div className="flex flex-col gap-3 w-full py-6">
            <label className="font-semibold">Video File : </label>
            <div
              className=" cursor-pointer btn-ghost shadow-lg w-full p-6 rounded flex justify-center items-center text-xs gap-1"
              onClick={handleVideoClick}
            >
              <BsCameraVideo size={30} /> Upload Lecture from Here
            </div>
          </div>

          <div className="w-full customImgDiv flex justify-center m-auto items-center px-2 max-w-xs">
            <figure>
              {videoUrl !== "" ? (
                <>
                  {" "}
                  <div className="flex flex-col justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#c8e6c9"
                        d="M36,42H12c-3.314,0-6-2.686-6-6V12c0-3.314,2.686-6,6-6h24c3.314,0,6,2.686,6,6v24C42,39.314,39.314,42,36,42z"
                      ></path>
                      <path
                        fill="#4caf50"
                        d="M34.585 14.586L21.014 28.172 15.413 22.584 12.587 25.416 21.019 33.828 37.415 17.414z"
                      ></path>
                    </svg>{" "}
                    <p> Video Uploaded</p>
                  </div>
                </>
              ) : (
                ""
              )}
            </figure>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleUploadCourse}
            className="btn bg-blue-500 text-white"
          >
            Upload Course
          </button>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-semibold">Uploaded Courses</h2>

        <div>
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b">
              <tr>
                <th className="py-3 px-6">Course No</th>
                <th className="py-3 px-6">Name</th>

                <th className="py-3 px-6">Price</th>
                <th className="py-3 px-6">Category</th>
                <th className="py-3 px-6">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {courseList?.map((item, idx) => (
                <tr key={item.did}>
                  <td className="px-6 py-4 whitespace-nowrap">{idx + 1}</td>
                  <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                    <img
                      src={item.imageUrl}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <span className="block text-gray-700 text-sm font-medium">
                        {item.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    ₹{parseFloat(item.price).toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item?.category.map((res) => (
                      <>
                        <div className="flex flex-wrap items-center">
                          <span
                            className="badge badge-xs badge-neutral"
                            key={res.label}
                          >
                            {res.value}
                          </span>
                        </div>
                      </>
                    ))}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <button className="btn btn-xs hover:bg-red-400 hover:text-white">
                        <BiTrash /> delete
                      </button>

                      <button className="btn btn-xs  hover:bg-info hover:text-white">
                        <BiEdit /> edit
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Courses;
