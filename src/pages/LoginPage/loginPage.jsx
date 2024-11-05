import { useState } from "react"
import "./loginPage.css"
import axios from "axios" //This library use for instead of postman to send requests from localhost
import { useNavigate } from "react-router-dom"

export default function LoginPage(){

//Creating two hooks for email and password variables
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

//Creating useNavigate hook for navigations
const navigate=useNavigate()


    function handleLogin(){
        axios.post(import.meta.env.VITE_BACKEND_URL+"/api/users/login",{
            email:email,
            password:password
        }).then(
            (res)=>{
                console.log(res.data); //print data in console
                localStorage.setItem("token",res.data.token);//Set data to save in localstorage
                const token=localStorage.getItem("token")//get saved data from local storage
                //console.log(token);//Print token in console

                if(res.data.user.type=="customer"){
                    //window.location.href="/";
                    navigate("/");
                }
                else{
                    //window.location.href="/admin";
                    navigate("/admin")
                }
            }
        ).catch(
            (err)=>{
                console.log(err);
            }
        )
    }

    return(
        <div className="w-full h-[100vh] pic-bg flex justify-center items-center">
            <div className="w-[400px] h-[350px] backdrop-blur-md rounded-2xl flex flex-col items-center relative text-[14px]">
            <h1 className="text-white text-center mt-8 mb-6 text-[25px] font-semibold">Login</h1>

            <input type="email" placeholder="Enter Your Email:" 
            className="w-[80%] h-8 rounded-md px-4 placeholder:p-2 bg-[#00000000] placeholder:text-white text-white border-[2px] mb-3 mt-3"
            defaultValue={email} onChange={
                (e)=>{
                    setEmail(e.target.value);
                }
            }>
            </input>

            <input type="password" placeholder="Enter Your Password:" 
            className="w-[80%] h-8 rounded-md px-4 placeholder:p-2 bg-[#00000000] placeholder:text-white text-white border-[2px] mb-3"
            defaultValue={password} onChange={
                (e)=>{
                    setPassword(e.target.value);
                }
            }>
            </input>

            <span className="text-white mt-2">Don't have an account?</span>
           <a href="/signup"><span className="text-blue-300 underline">Sign Up</span></a>

            <button className="w-[100px] h-8 px-4 placeholder:p-4 bg-red-500 placeholder:text-white text-white border-[2px] absolute bottom-[50px] flex items-center justify-center"
            onClick={handleLogin}>Login</button>{/* when you click the button handleLogin function will run*/}
            </div>
            
        </div>
    )
}