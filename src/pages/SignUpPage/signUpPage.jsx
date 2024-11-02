import { useState } from "react";
import "./signup.css";
import axios from "axios";

export default function SignUpPage() {
  //Creating hooks
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsApp, setWhatsApp] = useState("");

  //Creating the user creation function
  function handleSignUp() {
    axios
      .post(import.meta.env.VITE_BACKEND_URL + "/api/users/", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        phone: phone,
        whatsApp: whatsApp,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="w-full h-[100vh] flex justify-center items-center pic-bg2">
      <div className="w-[500px] h-[500px] backdrop-blur-sm flex flex-col items-center py-5 fontfam">
        <h1 className="text-2xl text-white mb-2 font-semibold">Sign Up</h1>
        <input
          type="text"
          placeholder="Enter Your First Name:"
          className="w-[350px] h-8 rounded-md p-2 my-2 placeholder:text-[14px]"
        onChange={
            (e)=>{
                setFirstName(e.target.value);
            }
        }></input>

        <input
          type="text"
          placeholder="Enter Your Last Name:"
          className="w-[350px] h-8 rounded-md p-2 my-2 placeholder:text-[14px]"
          onChange={
            (e)=>{
                setLastName(e.target.value);
            }
          }></input>

        <input
          type="email"
          placeholder="Enter Your Email:"
          className="w-[350px] h-8 rounded-md p-2 my-2 placeholder:text-[14px]"
        onChange={
            (e)=>{
                setEmail(e.target.value);
            }
        }></input>

        <input
          type="password"
          placeholder="Enter a Password:"
          className="w-[350px] h-8 rounded-md p-2 my-2 placeholder:text-[14px]"
        onChange={
            (e)=>{
                setPassword(e.target.value);
            }
        }></input>

        <input
          type="text"
          placeholder="Enter Your Mobile Number:"
          className="w-[350px] h-8 rounded-md p-2 my-2 placeholder:text-[14px]"
        onChange={
            (e)=>{
                setPhone(e.target.value);
            }
        }></input>

        <input
          type="text"
          placeholder="Enter Your WhatsApp Number:"
          className="w-[350px] h-8 rounded-md p-2 my-2 placeholder:text-[14px]"
        onChange={
            (e)=>{
                setWhatsApp(e.target.value);
            }
        }></input>

        <button className="w-[100px] h-8 rounded-md p-2 my-3 bg-red-500 flex items-center justify-center text-white"
        onClick={handleSignUp}>Sign Up
        </button>

        <span className="text-white">Already have an account?</span>
        <a href="./login">
          <span className=" underline text-blue-300">Log in Now</span>
        </a>
      </div>
    </div>
  );
}
