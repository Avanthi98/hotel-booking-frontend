import { useState } from "react";
import uploadMedia from "../../../Utils/mediaUpload";
import { getDownloadURL } from "firebase/storage";
import axios from "axios";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

export default function UpdateRoomForm() {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.state == null) {
    window.location.href = "/admin/rooms";
  }

  const [roomId] = useState(location.state.roomId);
  const [category, setCategory] = useState(location.state.category);
  const [availability, setAvailability] = useState(location.state.availability);
  const [maxNoOfGuests, setMaxNoOfGuests] = useState(
    location.state.maxNoOfGuests
  );
  const [specialDescription, setSpecialDescription] = useState(
    location.state.specialDescription
  );
  const [notes, setNotes] = useState(location.state.notes);
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const token = localStorage.getItem("token");
  if (token == null) {
    window.location.href = "/login";
  }

  const handlePhotosChange = (e) => {
    setPhotos([...e.target.files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (photos.length === 0) {
      // No new photos selected, retain old ones
      const roomData = {
        category,
        availability,
        maxNoOfGuests,
        specialDescription,
        notes,
        photos: location.state.photos,
      };

      axios
        .put(
          import.meta.env.VITE_BACKEND_URL + "/api/room/" + roomId,
          roomData,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        )
        .then((res) => {
          toast.success("Room updated successfully!");
          setIsLoading(false);
          navigate("/admin/rooms");
        })
        .catch((error) => {
          console.error(error);
          toast.error("Room update failed!");
          setIsLoading(false);
        });
    } else {
      // Upload new photos and update the room
      const uploadedPhotos = [];
      let uploadCount = 0;

      photos.forEach((photo, index) => {
        uploadMedia(photo)
          .then((snapshot) => getDownloadURL(snapshot.ref))
          .then((url) => {
            uploadedPhotos[index] = url;
            uploadCount++;

            if (uploadCount === photos.length) {
              // All photos uploaded
              const roomData = {
                category,
                availability,
                maxNoOfGuests,
                specialDescription,
                notes,
                photos: uploadedPhotos,
              };

              axios
                .put(
                  import.meta.env.VITE_BACKEND_URL + "/api/room/" + roomId,
                  roomData,
                  {
                    headers: {
                      Authorization: "Bearer " + token,
                    },
                  }
                )
                .then((res) => {
                  toast.success("Room updated successfully!");
                  setIsLoading(false);
                  navigate("/admin/rooms");
                })
                .catch((error) => {
                  console.error(error);
                  toast.error("Room update failed!");
                  setIsLoading(false);
                });
            }
          })
          .catch((error) => {
            console.error("Photo upload failed:", error);
            toast.error("Photo upload failed!");
            setIsLoading(false);
          });
      });
    }
  };

  return (
    <div className="w-full flex max-h-full p-6 justify-center">
      <div className="w-[500px] h-full bg-white rounded-md flex flex-col items-center justify-center">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <h1 className="text-[18px] text-gray-700 font-semibold text-center m-5">
            Enter Room Details to Update
          </h1>

          <label className="block text-gray-700">Category:</label>
          <select
            className="w-[400px] h-7 mb-3 rounded-sm border border-gray-400 px-4"
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="Standard">Standard</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Luxury">Luxury</option>
          </select>

          <label className="block text-gray-700">Availability:</label>
          <select
            className="w-[400px] h-7 mb-3 rounded-sm border border-gray-400 px-4"
            value={availability}
            onChange={(e) => setAvailability(e.target.value === "true")}
          >
            <option value="" disabled>
              Select availability
            </option>
            <option value="true">Available</option>
            <option value="false">Unavailable</option>
          </select>

          <label className="block text-gray-700">Max Number of Guests:</label>
          <input
            className="w-[400px] h-7 mb-3 rounded-sm border border-gray-400 px-4"
            type="number"
            value={maxNoOfGuests}
            onChange={(e) => setMaxNoOfGuests(e.target.value)}
          />

          <label className="block text-gray-700">Special Description:</label>
          <textarea
            className="w-[400px] h-8 mb-3 rounded-sm border border-gray-400 px-4"
            value={specialDescription}
            onChange={(e) => setSpecialDescription(e.target.value)}
          />

          <label className="block text-gray-700">Notes:</label>
          <textarea
            className="w-[400px] h-14 mb-3 rounded-sm border border-gray-400 px-4"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />

          <label className="block text-gray-700">Photos:</label>
          <input
            className="w-[400px] h-16 mb-3 rounded-sm border border-gray-400 px-4 py-5"
            type="file"
            multiple
            onChange={handlePhotosChange}
          />

          <div className="flex justify-center mt-3 mb-5">
            <button
              type="submit"
              className="w-[400px] h-9 placeholder:p-3 rounded-md border bg-blue-600 text-white font-semibold flex justify-center items-center"
            >
              {isLoading ? (
                <div className="w-[20px] h-[20px] border-t border-white border-dotted border-2 rounded-full animate-spin ml-3"></div>
              ) : (
                <span>Update Room</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
