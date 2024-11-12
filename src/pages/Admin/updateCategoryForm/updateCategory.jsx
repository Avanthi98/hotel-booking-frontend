import { useState } from "react";
import uploadMedia from "../../../Utils/mediaUpload";
import { getDownloadURL } from "firebase/storage";
import axios from "axios";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

export default function UpdateCategoryForm() {
  //Use Navigation Hook
  const navigate = useNavigate();

  //Implementing useLocation Hook
  const location = useLocation();
  console.log(location.state); //-->If you want to print the state

  //If state is null
  if (location.state == null) {
    window.location.href = "/admin/categories";
  }

  // Implementing use states and loading relevat previous category state from using useLocation hook
  const [name, setName] = useState(location.state.name);
  const [price, setPrice] = useState(location.state.price);
  const [features, setFeatures] = useState(location.state.features.join(",")); //To print const array=[a,b,c,d]--->"a,b,c,d"-->array.join(",")
  const [description, setDescription] = useState(location.state.description);
  const [image, setImage] = useState(null);
  const [isloading, setIsLoading] = useState(false); //Create a usestate to check whether button is loading or not

  //Get token and check user authorization
  const token = localStorage.getItem("token");
  if (token == null) {
    message: "Unauthorized";
    window.location.href("/login");
  }

  // Handler for image selection
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Handler for form submission
  function handleSubmit(e) {
    e.preventDefault(); //To avoid refreshing page
    setIsLoading(true); //To once you click the submit button start loading the circle

    //Features array splitting
    const featuresArray = features.split(",");
    console.log(featuresArray);

    //Check whether image has been updated or not
    if (image == null) {
      //This means image is not updated
      const categoryInfo = {
        description: description,
        price: price,
        features: featuresArray,
        image: location.state.image, //Previous image
      };
      axios
        .put(
          import.meta.env.VITE_BACKEND_URL + "/api/category/" + name,
          categoryInfo,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        )
        .then((res) => {
          console.log(res);
          toast.success("Category updated successfully!");
          setIsLoading(false);
          navigate("/admin/categories");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Category updation failed!");
        });
    } else {
      //This part will be run when you update the image as well
      uploadMedia(image).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          const categoryInfo = {
            description: description,
            price: price,
            features: featuresArray,
            image: url,
          };

          axios
            .put(
              import.meta.env.VITE_BACKEND_URL + "/api/category/" + name,
              categoryInfo,
              {
                headers: {
                  Authorization: "Bearer " + token,
                },
              }
            )
            .then((res) => {
              console.log(res);
              setIsLoading(false);
              toast.success("Category updated successfully!");
              navigate("/admin/categories");
            })
            .catch((error) => {
              console.log(error);
              toast.error("Category updation failed!");
            });
        });
      });
    }
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
            disabled //To avoid updation and get fixed the value
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
            onChange={handleImageChange}
          />

          <div className="flex justify-center my-3">
            <button
              type="submit"
              className="w-[400px] h-9 placeholder:p-3 rounded-md border bg-blue-600 text-white font-semibold flex justify-center items-center"
            >
              {isloading ? (
                <div className="w-[20px] h-[20px] border-t border-white border-dotted border-2 rounded-full animate-spin ml-3"></div>
              ) : (
                <span>Update Category</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
