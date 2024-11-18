import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UserTag(props) {
  const [name, setName] = useState(""); //Create a hook for changable variable
  const [userFound, setUserFound] = useState(false); //This hook used to find if there is a user or not
  const navigate = useNavigate();

  //Creating the use effect--> useEffect(empty arrow function(),[dependancy array-empty])
  useEffect(() => {
    const token = localStorage.getItem("token"); //get token from local storage and equal it to const variable
    if (token != null) {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/users", {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          //Set user name
          setName(res.data.user.firstName + " " + res.data.user.lastName);
          setUserFound(true);
        });
    } else {
      setName("Guest");
    }
  }, [userFound]);
  return (
    <div className="h-full bg-[#732fa0] flex absolute right-0 items-center p-[5px] lg:p-[10px] cursor-pointer">
      <img
        src={props.imageLink}
        className="w-[42px] h-[42px] lg:w-[52px] lg:h-[52px] rounded-full"
      ></img>
      <p className="text-white text-[15px] lg:text-[18px] ml-[10px] font-bold">
        {name}
      </p>
      <button
        className="bg-[#2b0d4994] text-white text-[15px] lg:text-[18px] font-bold p-1 lg:p-2 ml-2 rounded-md hover:bg-purple-700"
        onClick={() => {
          localStorage.removeItem("token"); //When you click log out button it must remove the user token
          setUserFound(false);
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
}
export default UserTag;
