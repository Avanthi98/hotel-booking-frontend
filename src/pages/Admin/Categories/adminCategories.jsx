import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { MdEditDocument } from "react-icons/md";
import { FaCirclePlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function AdminCategory() {
  //Get the token from local storage
  const token = localStorage.getItem("token");
  console.log(token);
  if (token == null) {
    window.location.href = "/login";
  }

  //Create usestates
  const [categories, setCategories] = useState([]);
  const [categoryIsLoaded, setCategoryIsLoaded] = useState(false);

  //Create a use navigate hook
  const navigate = useNavigate();

  //create useEffects
  useEffect(() => {
    if (!categoryIsLoaded) {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/category")
        .then((res) => {
          console.log(res);
          setCategories(res.data.result);
          setCategoryIsLoaded(true);
        });
    }
  }, [categoryIsLoaded]);

  //Implementing delete function
  function handleDelete(name) {
    axios
      .delete(import.meta.env.VITE_BACKEND_URL + "/api/category/" + name, {
        //Check whether the user is an admin or not
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        toast.success("Category deleted successfully");
        setCategoryIsLoaded(false);
        console.log(res);
      })
      .catch((error) => {
        toast.error("Category deletion failed!");
        console.log(error);
      });
  }
  function handlePlusClick() {
    //window.location.href="/admin/add-category" //-----> Instead of this we can use as following
    navigate("/admin/add-category");
  }

  return (
    <div className="w-full py-6 px-14 flex flex-col">
      <button
        className="text-[28px] text-red-900 fixed bottom-6 right-7"
        onClick={() => {
          handlePlusClick();
        }}
      >
        <FaCirclePlus />
      </button>
      <h1 className="text-gray-800 text-2xl font-bold text-center my-4">
        Category Management
      </h1>
      <table className="w-full bg-gray-200 border-black border-x-2 border-y-2">
        <thead>
          <tr className="text-gray-700 bg-gray-400 ">
            <th className="px-2 py-2 border-[#343434] border-x-2 border-y-2 w-[150px]">
              Category Name
            </th>
            <th className="px-2 py-2 border-[#343434] border-x-2 border-y-2 w-[250px]">
              Description
            </th>
            <th className="px-2 py-2 border-[#343434] border-x-2 border-y-2">
              Price
            </th>
            <th className="px-2 py-2 border-[#343434] border-x-2 border-y-2">
              Features
            </th>
            <th className="px-2 py-2 border-[#343434] border-x-2 border-y-2 w-[175px]">
              Image
            </th>
            <th className="px-2 py-2 border-[#343434] border-x-2 border-y-2">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {categories.map((category, index) => {
            return (
              <tr key={index}>
                <td className="px-2 py-2 border-[#343434] border-x-2 border-y-2 text-center">
                  {category.name}
                </td>
                <td className="px-2 py-2 border-[#343434] border-x-2 border-y-2 text-center">
                  {category.description}
                </td>
                <td className="px-2 py-2 border-[#343434] border-x-2 border-y-2 text-center">
                  {category.price.toLocaleString("en-LK")}
                </td>
                <td className="px-2 py-2 border-[#343434] border-x-2 border-y-2 text-center">
                  <ul>
                    {category.features.map((feature, i) => {
                      return <li key={i}>{feature}</li>;
                    })}
                  </ul>
                </td>

                <td className="px-2 py-2 border-[#343434] border-x-2 border-y-2">
                  <div className="flex  items-center justify-center">
                    <img
                      className="w-[80px] h-[80px] border-x border-y border-[#343434] rounded "
                      src={category.image}
                    />
                  </div>
                </td>
                <td className="px-2 py-2 border-[#343434] border-x-2 border-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      className="text-red-600 text-[28px]"
                      onClick={() => {
                        handleDelete(category.name);
                      }}
                    >
                      <MdDelete />
                    </button>

                    <button
                      onClick={() => {}}
                      className="text-blue-700 text-[25px]"
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
