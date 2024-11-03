import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdEditDocument } from "react-icons/md";

export default function AdminCategory() {
  //Create usestates
  const [categories, setCategories] = useState([]);
  const [categoryIsLoaded, setCategoryIsLoaded] = useState(false);

  //create useEffects
  useEffect(() => {
    if (!categoryIsLoaded) {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/category")
        .then((res) => {
          console.log(res);
          setCategories(res.data.result);
          setCategoryIsLoaded(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [categoryIsLoaded]);
  return (
    <div className="w-full p-6 flex flex-col items-center">
      <h1 className="text-gray-700 text-2xl font-bold text-center my-4">
        Category Management
      </h1>
      <table className="w-full bg-gray-200 border-black border-x-2 border-y-2">
        <thead>
          <tr className="text-gray-700 bg-gray-400 ">
            <th className="px-2 py-2 border-[#343434] border-x-2 border-y-2">
              Category Name
            </th>
            <th className="px-2 py-2 border-[#343434] border-x-2 border-y-2">
              Description
            </th>
            <th className="px-2 py-2 border-[#343434] border-x-2 border-y-2">
              Price
            </th>
            <th className="px-2 py-2 border-[#343434] border-x-2 border-y-2">
              Features
            </th>
            <th className="px-2 py-2 border-[#343434] border-x-2 border-y-2">
              Image
            </th>
            <th className="px-2 py-2 border-[#343434] border-x-2 border-y-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {categories.map((category, index) => {
            return (
              <tr key={category.name}>
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
                      className="w-[50px] h-[50px] border-x border-y border-[#343434] rounded "
                      src={category.image}
                    />
                  </div>
                </td>
                <td className="px-2 py-2 border-[#343434] border-x-2 border-y-2">
                  <div className="flex items-center justify-center">
                  <button ><MdDelete  size={30} color="red"/></button>
                  <button><MdEditDocument size={30} color="blue" /></button>
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
