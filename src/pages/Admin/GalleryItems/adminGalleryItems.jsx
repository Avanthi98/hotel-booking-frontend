import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { MdEditDocument } from "react-icons/md";
import { FaCirclePlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function AdminGalleryItems() {
  const token = localStorage.getItem("token");
  if (token == null) {
    window.location.href = "/login";
    return;
  }

  //UseStates
  const [galleryItems, setGalleryItems] = useState([]);
  const [galleryItemIsLoaded, setGalleryItemIsLoaded] = useState(false);

  //UseNavigate
  const navigate = useNavigate();

  //Retrieving data from backend
  useEffect(() => {
    if (!galleryItemIsLoaded) {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/gallery")
        .then((res) => {
          console.log(res);
          setGalleryItems(res.data.List);
          setGalleryItemIsLoaded(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [galleryItemIsLoaded]);

  //implementing delete handler to delete gallery items
  function handleDelete(id) {
    axios
      .delete(import.meta.env.VITE_BACKEND_URL + "/api/gallery/" + id, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log(res);
        toast.success("Successfully Deleted!");
        setGalleryItemIsLoaded(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to Delete!");
      });
  }
  //Handle clicking plus button
  function handlePlusButton() {
    navigate("/admin/add-galleryItem");
  }

  return (
    <div className="w-full h-[100vh] flex flex-col px-14 py-6 relative">
      <button
        className="text-red-900 text-[28px] fixed right-6 bottom-6"
        onClick={() => {
          handlePlusButton();
        }}
      >
        <FaCirclePlus />
      </button>

      <h1 className="text-2xl text-gray-800 font-bold text-center my-4">
        Gallery Events Management
      </h1>

      <table className="w-full border border-[#343434] bg-gray-200 text-center overflow-hidden px-10">
        <thead className="text-gray-700 bg-gray-400">
          <tr>
            <th className="px-2 py-2 border border-x-2 border-y-2 border-[#343434]">
              Event ID
            </th>
            <th className="px-2 py-2 border border-x-2 border-y-2 border-[#343434]">
              Name
            </th>
            <th className="px-2 py-2 border border-x-2 border-y-2 border-[#343434]">
              Image
            </th>
            <th className="px-2 py-2 border border-x-2 border-y-2 border-[#343434]">
              Description
            </th>
            <th className="px-2 py-2 border border-x-2 border-y-2 border-[#343434]">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {galleryItems.map((galleryItem, index) => {
            return (
              <tr key={index}>
                <td className="px-2 py-2 border border-x-2 border-y-2 border-[#343434]">
                  {galleryItem.eventId}
                </td>
                <td className="px-2 py-2 border border-x-2 border-y-2 border-[#343434]">
                  {galleryItem.name}
                </td>
                <td className="px-2 py-2 border border-x-2 border-y-2 border-[#343434]">
                  {galleryItem.image}
                </td>
                <td className="px-2 py-2 border border-x-2 border-y-2 border-[#343434]">
                  {galleryItem.description}
                </td>
                <td className="px-2 py-2 border border-x-2 border-y-2 border-[#343434]">
                  <div className="flex gap-2 items-center justify-center">
                    <button
                      className="text-[28px] text-red-600"
                      onClick={() => {
                        handleDelete(galleryItem.eventId);
                      }}
                    >
                      <MdDelete />
                    </button>
                    <button
                      className="text-[25px] text-blue-700"
                      onClick={() => {
                        handleUpdate;
                      }}
                    >
                      <MdEditDocument />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
