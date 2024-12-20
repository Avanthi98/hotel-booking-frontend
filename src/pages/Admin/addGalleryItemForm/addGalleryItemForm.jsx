import axios from "axios";
import { useState } from "react";
import uploadMedia from "../../../Utils/mediaUpload";
import { getDownloadURL } from "firebase/storage";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AddGalleryItemForm() {
  //Implementing UseStates
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");

  const [isloading, setIsLoading] = useState(false);

  //UseNavigate
  const navigate = useNavigate();

  //Check the user authorization
  const token = localStorage.getItem("token");
  if (token == null) {
    message: "Unauthorized";
    navigate("/login");
  }

  // Handler for image selection
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Handler for form submission
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    uploadMedia(image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        const eventInfo = {
          name: name,
          image: url,
          description: description,
        };

        axios
          .post(import.meta.env.VITE_BACKEND_URL + "/api/gallery", eventInfo, {
            headers: {
              Authorization: "Bearer " + token,
              // "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {
            console.log(res);
            toast.success("Gallery Event Successfully Created!");
            setIsLoading(false);
            navigate("/admin/gallery-items");
          })
          .catch((error) => {
            console.log(error);
            toast.error("Gallery Event Creation Failed!");
          });
      });
    });
  }

  return (
    <div className="w-full h-[100vh] flex items-center justify-center p-6">
      <div className="w-[500px] h-[500px] bg-white flex items-center justify-center rounded-md">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <h1 className="text-[18px] text-gray-700 font-semibold text-center m-5">
            Enter Gallery Event Details Here:
          </h1>

          <label className="text-gray-700">Event Name:</label>
          <input
            type="text"
            className="w-[400px] h-7 mb-3 px-4 border border-gray-400"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <label className="text-gray-700">Image:</label>
          <input
            type="file"
            className="w-[400px] h-20 mb-3 px-4 py-5 border border-gray-400 flex items-center"
            onChange={handleImageChange}
          ></input>
          <label className="text-gray-700">Description:</label>
          <input
            type="text"
            className="w-[400px] h-16 mb-3 px-4 border border-gray-400"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></input>

          <div className="flex justify-center my-3">
            <button
              type="submit"
              className="w-[400px] h-9 placeholder:p-3 rounded-md border bg-blue-600 text-white font-semibold flex justify-center items-center"
            >
              {isloading ? (
                <div className="w-[20px] h-[20px] border-t border-white rounded-full animate-spin"></div>
              ) : (
                <span>Add Gallery Item</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
