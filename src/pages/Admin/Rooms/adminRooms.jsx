import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { MdEditDocument } from "react-icons/md";
import { FaCirclePlus } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

export default function AdminRooms() {
  // Get the token from local storage
  const token = localStorage.getItem("token");
  if (token == null) {
    window.location.href = "/login";
  }

  // Create useStates
  const [rooms, setRooms] = useState([]);
  const [roomsAreLoaded, setRoomsAreLoaded] = useState(false);

  // Create a use navigate hook
  const navigate = useNavigate();

  // Create useEffect
  useEffect(() => {
    if (!roomsAreLoaded) {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/room")
        .then((res) => {
          console.log(res);
          setRooms(res.data.roomList);
          setRoomsAreLoaded(true);
        });
    }
  }, [roomsAreLoaded]);

  // Implementing delete function
  function handleDelete(roomId) {
    axios
      .delete(import.meta.env.VITE_BACKEND_URL + "/api/room/" + roomId, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        toast.success("Room deleted successfully");
        setRoomsAreLoaded(false);
        console.log(res);
      })
      .catch((error) => {
        toast.error("Room deletion failed!");
        console.log(error);
      });
  }

  /*function handlePlusClick() {
    navigate("/admin/add-room");
  }*/

  return (
    <div className="w-full p-6 min-h-screen">
      {/* <button
        className="text-[28px] text-pink-900 fixed bottom-6 right-7"
        onClick={() => {
          handlePlusClick();
        }}
      >
        <FaCirclePlus />
      </button> */}
      <h1 className="text-gray-800 text-2xl font-bold text-center my-4">
        Room Management
      </h1>
      <table className="w-full bg-gray-200 border-black border-x-2 border-y-2">
        <thead>
          <tr className="text-gray-700 bg-gray-400 ">
            <th className="px-2 py-2 border-[#343434] border-x-2 border-y-2">
              Room ID
            </th>
            <th className="px-2 py-2 border-[#343434] border-x-2 border-y-2">
              Category
            </th>
            <th className="px-2 py-2 border-[#343434] border-x-2 border-y-2">
              Availability
            </th>
            <th className="w-[50px] px-2 py-2 border-[#343434] border-x-2 border-y-2">
              Maximum Guests
            </th>
            <th className="px-2 py-2 border-[#343434] border-x-2 border-y-2">
              Photos
            </th>
            <th className="px-2 py-2 border-[#343434] border-x-2 border-y-2">
              Special Description
            </th>
            <th className="px-2 py-2 border-[#343434] border-x-2 border-y-2">
              Notes
            </th>
            <th className="px-2 py-2 border-[#343434] border-x-2 border-y-2">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {rooms.map((room, index) => (
            <tr key={index}>
              <td className="px-2 py-2 border-[#343434] border-x-2 border-y-2 text-center">
                {room.roomId}
              </td>
              <td className="px-2 py-2 border-[#343434] border-x-2 border-y-2 text-center">
                {room.category}
              </td>
              <td className="px-2 py-2 border-[#343434] border-x-2 border-y-2 text-center">
                {room.availability ? "Available" : "Not Available"}
              </td>
              <td className="px-2 py-2 border-[#343434] border-x-2 border-y-2 text-center">
                {room.maxNoOfGuests}
              </td>
              <td className="px-2 py-2 border-[#343434] border-x-2 border-y-2">
                <div className="flex flex-wrap gap-2 justify-center">
                  {room.photos.map((photo, i) => (
                    <img
                      key={i}
                      className="w-[80px] h-[80px] border-x border-y border-[#343434] rounded"
                      src={photo}
                    />
                  ))}
                </div>
              </td>
              <td className="px-2 py-2 border-[#343434] border-x-2 border-y-2">
                {room.specialDescription}
              </td>
              <td className="px-2 py-2 border-[#343434] border-x-2 border-y-2">
                {room.notes}
              </td>
              <td className="px-2 py-2 border-[#343434] border-x-2 border-y-2">
                <div className="flex items-center justify-center gap-2">
                  {/* <Link
                    to={"/admin/update-room"}
                    state={room}
                    className="text-blue-700 text-[25px]"
                  >
                    <MdEditDocument />
                  </Link> */}
                  <button
                    className="text-red-600 text-[28px]"
                    onClick={() => {
                      handleDelete(room.roomId);
                    }}
                  >
                    <MdDelete />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
