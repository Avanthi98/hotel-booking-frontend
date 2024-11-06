import axios from "axios";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdEditDocument } from "react-icons/md";

export default function AdminGalleryItems() {
  const token = localStorage.getItem("token");
  if (token == null) {
    window.location.href = "/login";
    return;
  }
  const [galleryItems, setGalleryItems] = useState([]);
  const [galleryItemsIsLoading, setGalleryItemsIsLoading] = useState(false);

  useEffect(() => {
    if (!galleryItemsIsLoading) {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/gallery", {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          console.log(res);
          setGalleryItems(res.data.List);
          setGalleryItemsIsLoading(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <div className="w-full h-[100vh] flex flex-col items-center p-6">
      <h1 className="text-2xl text-gray-800 font-bold my-4">
        Gallery Events Management
      </h1>

      <table className="w-full border border-[#343434] bg-gray-200 text-center overflow-hidden">
        <thead className="text-gray-700 bg-gray-400">
          <tr>
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
                    <button className="text-[28px] text-red-600">
                      <MdDelete />
                    </button>
                    <button className="text-[25px] text-blue-700">
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
