import { useState } from "react";
import uploadMedia from "../../../Utils/mediaUpload";
import { getDownloadURL } from "firebase/storage";
import axios from "axios";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

export default function UpdateGalleryItemForm() {
  // Use navigation hook
  const navigate = useNavigate();

  // Use location hook to get current item state
  const location = useLocation();
  console.log(location.state); // If you want to print the state

  // Redirect if state is null
  if (location.state == null) {
    window.location.href = "/admin/gallery-items";
  }

  // Initializing state for form fields with previous item details
  const [eventId, setEventId] = useState(location.state.eventId);
  const [name, setName] = useState(location.state.name);
  const [description, setDescription] = useState(location.state.description);
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Get token for authorization
  const token = localStorage.getItem("token");
  if (token == null) {
    message: "Unauthorized";
    window.location.href = "/login";
  }

  // Handle image selection
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault(); // Prevent page refresh
    setIsLoading(true);

    // Check if image is updated
    if (image == null) {
      // Image not updated, retain previous image URL
      const itemInfo = {
        eventId: eventId,
        name: name,
        description: description,
        image: location.state.image,
      };
      axios
        .put(
          import.meta.env.VITE_BACKEND_URL + "/api/gallery/" + eventId,
          itemInfo,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        )
        .then((res) => {
          console.log(res);
          toast.success("Gallery item updated successfully!");
          setIsLoading(false);
          navigate("/admin/gallery-items");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Gallery item update failed!");
          setIsLoading(false);
        });
    } else {
      // Image updated, upload new image
      uploadMedia(image).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          const itemInfo = {
            eventId: eventId,
            name: name,
            description: description,
            image: url,
          };

          axios
            .put(
              import.meta.env.VITE_BACKEND_URL + "/api/gallery/" + eventId,
              itemInfo,
              {
                headers: {
                  Authorization: "Bearer " + token,
                },
              }
            )
            .then((res) => {
              console.log(res);
              setIsLoading(false);
              toast.success("Gallery item updated successfully!");
              navigate("/admin/gallery-items");
            })
            .catch((error) => {
              console.log(error);
              toast.error("Gallery item update failed!");
              setIsLoading(false);
            });
        });
      });
    }
  }

  return (
    <div className="w-full flex h-[100vh] p-6 mb-4 justify-center items-center">
      <div className="w-[500px] h-[550px] bg-white rounded-md flex flex-col items-center justify-center">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <h1 className="text-[18px] text-gray-700 font-semibold text-center m-5">
            Enter Gallery Event Details to Update
          </h1>

          <label className="block text-gray-700">Event ID:</label>
          <input
            className="w-[400px] h-7 mb-4 rounded-sm border border-gray-400 px-4"
            type="number"
            required
            disabled // To prevent updating the event ID
            value={eventId}
            onChange={(e) => setEventId(Number(e.target.value))}
          />

          <label className="block text-gray-700">Name:</label>
          <input
            className="w-[400px] h-7 mb-4 rounded-sm border border-gray-400 px-4"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="block text-gray-700">Description:</label>
          <textarea
            className="w-[400px] h-16 mb-4 rounded-sm border border-gray-400 px-4"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label className="block text-gray-700">Image:</label>
          <input
            className="w-[400px] h-20 mb-4 rounded-sm border border-gray-400 px-4 py-5"
            type="file"
            onChange={handleImageChange}
          />

          <div className="flex justify-center my-3">
            <button
              type="submit"
              className="w-[400px] h-9 placeholder:p-3 rounded-md border bg-blue-600 text-white font-semibold flex justify-center items-center"
            >
              {isLoading ? (
                <div className="w-[20px] h-[20px] border-t border-white border-dotted border-2 rounded-full animate-spin ml-3"></div>
              ) : (
                <span>Update Gallery Item</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
