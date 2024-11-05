import { useState } from "react";
import uploadMedia from "../../../Utils/mediaUpload";
import { getDownloadURL } from "firebase/storage";
import axios from "axios";
export default function AddCategoryForm() {
  // Implementing use states
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [features, setFeatures] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  //Get token and check user authorization
  const token = localStorage.getItem("token");
  if (token == null) {
    message: "Unauthorized";
    window.location.href("/login");
  }

  /* // Handler for image selection
  const handleImageChange = (e) => {
      setImage(e.target.files[0]);
    
  };*/

  // Handler for form submission
  function handleSubmit(e) {
    e.preventDefault(); //To avoid refreshing page
    alert("Form submitted");

    //Features array splitting
    const featuresArray = features.split(",");
    console.log(featuresArray);

    const categoryInfo = {
      name: name,
      description: description,
      price: price,
      features: featuresArray,
      image: image,
    };

    axios
      .post(import.meta.env.VITE_BACKEND_URL + "/api/category", categoryInfo, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log(res);
      });

    /*uploadMedia(image).then(
        (snapshot)=>{
            getDownloadURL(snapshot.ref).then((url)=>{
               
               
                
            })
        }
    )*/
  }

  return (
    <div className="w-full flex h-[100vh] p-6 justify-center">
      <div className="w-[500px] bg-white rounded-md flex flex-col items-center justify-center">
        {/*This form can submit either using onSubmit function for form tag or using onClick function for button */}
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <h1 className="text-[18px] text-gray-700 font-semibold text-center m-5">
            Enter Category Details Here
          </h1>

          <label className="block text-gray-700">Name:</label>
          <input
            className="w-[400px] h-7 mb-2 rounded-sm border border-gray-400 px-4"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="block text-gray-700">Price:</label>
          <input
            className="w-[400px] h-7 mb-2 rounded-sm border border-gray-400 px-4"
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />

          <label className="block text-gray-700">
            Features: (Comma-seperated)
          </label>
          <input
            className="w-[400px] h-16 mb-2 rounded-sm border border-gray-400 px-4"
            type="text"
            value={features}
            onChange={(e) => setFeatures(e.target.value)}
          />

          <label className="block text-gray-700">Description:</label>
          <input
            className="w-[400px] h-16 mb-2 rounded-sm border border-gray-400 px-4"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label className="block text-gray-700">Image:</label>
          <input
            className="w-[400px] h-20 mb-2 rounded-sm border border-gray-400 px-4 py-5"
            type="file"
            // onChange={handleImageChange}
          />

          <div className="flex justify-center my-3">
            <button
              type="submit"
              className="w-[400px] h-9 placeholder:p-3 rounded-md border bg-blue-500 text-white font-semibold"
            >
              Add Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
