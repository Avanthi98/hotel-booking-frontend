import axios from "axios";
import { useEffect, useState } from "react";

  export default function CategoriesPage() {

    //Creating usestate hook for getting categories related data from back-end
    const[categories,setCategories]=useState([])
    const[categoriesIsloaded,setCategoriesIsLoaded]=useState(false)

    //Use UseEffects-to avoid running functions again & again
    useEffect(
        ()=>{

            if(!categoriesIsloaded){//If categories are not loaded,then only this function will execute and retrieve data from backend
                axios.get(import.meta.env.VITE_BACKEND_URL+"/api/category").then( // Send a get request to back-end to retrieve category data
                    (res)=>{
                        console.log(res)
                        setCategories(res.data.result) //Loading and set backend category details for front-end table
                        setCategoriesIsLoaded(true)
                    }
                )
            }
           
        },[categoriesIsloaded]
    )

    //Create delete function for deleting category item
    function deleteCategory(name){
        alert("Are you sure,you want to delete this category by it's name?"+name);
        //sending delete request from axios to the backend
        axios.delete(import.meta.env.VITE_BACKEND_URL+"/api/category/"+name).then(
            (res)=>{
               // window.location.reload() //By this entire page will reload after the deletion.
               setCategoriesIsLoaded(false); //To avoid refreshing entire page during the deletion
            }
        )
    }

    return (
      <div className="w-full h-[100vh] flex flex-col  bg-blue-300 ">
        <h1 className="text-2xl font-bold text-center my-4 text-gray-700">
          Category Management
        </h1>
        <div className="w-full h-[100vh] flex items-center justify-center ">
        <table className=" bg-gray-200">
          <thead className="bg-gray-400 border-black border-x-2 border-y-2">
            <tr className="text-gray-700">
              <th className="px-1 py-1 border-black border-y-2 border-x-2">Name</th>
              <th className="px-1 py-1 border-black border-y-2 border-x-2">Description</th>
              <th className="px-1 py-1 border-black border-y-2 border-x-2">Price (USD)</th>
              <th className="px-1 py-1 border-black border-y-2 border-x-2">Features</th>
              <th className="px-1 py-1 border-black border-y-2 border-x-2">Image</th>
              <th className="px-1 py-1 border-black border-y-2 border-x-2">Action</th>
            </tr>
          </thead>
  
          <tbody>
            {categories.map((category) => (
              <tr key={category.name}>
                <td className="px-2 py-2 border-black border-y-2 border-x-2">
                  {category.name}
                </td>
                <td className="px-2 py-2 border-black border-y-2 border-x-2">
                  {category.description}
                </td>
                <td className="px-2 py-2 border-black border-y-2 border-x-2">
                  {category.price.toLocaleString("en-LK")}
                </td>
                <td className="px-2 py-2 border-black border-y-2 border-x-2">
                  <ul className="list-disc list-inside">
                    {category.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </td>
                <td className="px-2 py-2 border-black border-y-2 border-x-2">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-16 h-16 object-cover border border-black"
                  />
                </td>
                <td className="px-2 py-2 border-black border-y-2 border-x-2">
                    <button className="bg-red-400 p-1 border border-red-600 rounded"
                    onClick={()=>{
                        deleteCategory(category.name);
                    }}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
       
      </div>
    );
  }
  