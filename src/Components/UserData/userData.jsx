import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UserTag(props){
    const [name,setName]=useState("") //Create a hook for changable variable
    const[userFound,setUserFound]=useState(false)//This hook used to find if there is a user or not
    const navigate=useNavigate();

    //Creating the use effect--> useEffect(empty arrow function(),[dependancy array-empty])
   useEffect(
    ()=>{
        const token=localStorage.getItem("token"); //get token from local storage and equal it to const variable
        if(token!=null){
            
            axios.get(import.meta.env.VITE_BACKEND_URL+"/api/users",{
             headers:{
                 Authorization:"Bearer "+token,
                "Content-Type":"application/json"
             }
            }).then(
             (res)=>{
                 console.log(res);
                 //Set user name
                 setName(res.data.user.firstName+" "+res.data.user.lastName)
                 setUserFound(true)
             }
            )
         }else{
            setName("Guest")
         }
    },[userFound]
   )
    return(
        <div className="h-full bg-[#a754df] flex absolute right-0 items-center p-[10px] cursor-pointer">
            <img src={props.imageLink} className="w-[52px] h-[52px] rounded-full"></img>
            <p className="text-white text-xl ml-[10px]">{name}</p>
            <button className="border border-purple-700 bg-purple-600 text-white font-bold p-2 ml-4 rounded-md"
            onClick={()=>{
                localStorage.removeItem("token")//When you click log out button it must remove the user token
                setUserFound(false)
                navigate("/login")
            }}>
                Logout
            </button>
        </div>
    )
}
export default UserTag;