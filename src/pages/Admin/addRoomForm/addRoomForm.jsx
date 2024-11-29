import { useState } from "react";
import uploadMedia from "../../../Utils/mediaUpload";
import { getDownloadURL } from "firebase/storage";
import axios from "axios";
import toast from "react-hot-toast";

export default function AddRoomForm() {
  // Implementing use states
  const [roomId, setRoomId] = useState("");
  const [category, setCategory] = useState("");
  const [availability, setAvailability] = useState(true);
  const [maxNoOfGuests, setMaxNoOfGuests] = useState(3);
  const [photos, setPhotos] = useState([]);
  const [specialDescription, setSpecialDescription] = useState("");
  const [notes, setNotes] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Button loading state

  // Get token and check user authorization
  const token = localStorage.getItem("token");
  if (!token) {
    toast.error("Unauthorized access!");
    window.location.href = "/login";
  }

  // Handler for image selection
  const handlePhotosChange = (e) => {
    setPhotos(Array.from(e.target.files));
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    setIsLoading(true);

    const photoUrls = [];

    // Sequentially upload each photo and collect URLs
    photos.forEach((photo, index) => {
      uploadMedia(photo).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          photoUrls.push(url);

          // Once all photos are uploaded, send data to the backend
          if (photoUrls.length === photos.length) {
            const roomInfo = {
              roomId: Number(roomId),
              category,
              availability,
              maxNoOfGuests: Number(maxNoOfGuests),
              photos: photoUrls,
              specialDescription,
              notes,
            };

            axios
              .post(import.meta.env.VITE_BACKEND_URL + "/api/room", roomInfo, {
                headers: {
                  Authorization: "Bearer " + token,
                },
              })
              .then(() => {
                toast.success("Room added successfully!");
                setIsLoading(false);
              })
              .catch((error) => {
                console.error(error);
                toast.error("Room creation failed!");
                setIsLoading(false);
              });
          }
        });
      });
    });
  };

  return (
    <div className="w-full flex max-h-full p-6 justify-center">
      <div className="w-[500px] h-full bg-white rounded-md flex flex-col items-center justify-center py-2">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <h1 className="text-[18px] text-gray-700 font-semibold text-center m-3">
            Enter Room Details Here
          </h1>

          <label className="block text-gray-700">Room ID:</label>
          <input
            className="w-[400px] h-7 mb-2 rounded-sm border border-gray-400 px-4"
            type="number"
            required
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          />

          <label className="block text-gray-700">Category:</label>
          <select
            className="w-[400px] h-7 mb-2 rounded-sm border border-gray-400 px-4"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Standard</option>
            <option>Deluxe</option>
            <option>Luxury</option>
          </select>
          {/* <input
            className="w-[400px] h-7 mb-2 rounded-sm border border-gray-400 px-4"
            type="text"
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          /> */}

          <label className="block text-gray-700">Availability:</label>
          <select
            className="w-[400px] h-7 mb-2 rounded-sm border border-gray-400 px-4"
            value={availability}
            onChange={(e) => setAvailability(e.target.value === "true")}
          >
            <option value="true">Available</option>
            <option value="false">Unavailable</option>
          </select>

          <label className="block text-gray-700">Max Number of Guests:</label>
          <input
            className="w-[400px] h-7 mb-2 rounded-sm border border-gray-400 px-4"
            type="number"
            value={maxNoOfGuests}
            onChange={(e) => setMaxNoOfGuests(e.target.value)}
          />

          <label className="block text-gray-700">Special Description:</label>
          <textarea
            className="w-[400px] h-8 mb-2 rounded-sm border border-gray-400 px-4"
            value={specialDescription}
            onChange={(e) => setSpecialDescription(e.target.value)}
          />

          <label className="block text-gray-700">Notes:</label>
          <textarea
            className="w-[400px] h-14 mb-2 rounded-sm border border-gray-400 px-4"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />

          <label className="block text-gray-700">Photos:</label>
          <input
            className="w-[400px] h-16 mb-2 rounded-sm border border-gray-400 px-4 py-5"
            type="file"
            multiple
            onChange={handlePhotosChange}
          />

          <div className="flex justify-center my-3">
            <button
              type="submit"
              className="w-[400px] h-9 placeholder:p-3 rounded-md border bg-blue-600 text-white font-semibold flex justify-center items-center"
            >
              {isLoading ? (
                <div className="w-[20px] h-[20px] border-t border-white border-dotted border-2 rounded-full animate-spin ml-3"></div>
              ) : (
                <span>Add Room</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
