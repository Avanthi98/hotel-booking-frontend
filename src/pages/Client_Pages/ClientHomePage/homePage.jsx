import Header from "../../../Components/Header/header";
import "./homePage.css"
export default function HomePage() {
  return (
    <>
      <Header />
      <div className="w-full h-screen">
        
        <div className="w-full h-[320px] bg-gradient-to-l from-purple-400 to-blue-300 flex flex-col items-center">
          <h1 className="text-purple-800 text-4xl font-bold mt-10  mb-8">
            Welcome to LeoNine Villa!
          </h1>

          <div className="w-[600px] h-[170px] bg-purple-200 p-6 border border-purple-700">
            <div className="flex items-center justify-center mt-5 gap-6">
              <input
                type="Date"
                className="border border-purple-400 p-2 rounded-md h-[40px]"
              ></input>
              <input
                type="Date"
                className="border border-purple-400 p-2 rounded-md h-[40px]"
              ></input>
              <select className="border border-purple-400 p-2 rounded-md h-[40px]">
                <option>Luxury</option>
                <option>Deluxe</option>
                <option>Standard</option>
              </select>
            </div>

            <div className="flex items-center justify-center my-6">
              <button className=" bg-purple-600 p-2 border border-purple-700 rounded-md text-white font-semibold hover:bg-purple-900">
                Book Now
              </button>
            </div>
          </div>
        </div>

       <div className="w-full h-[500px] flex justify-center items-center bg-purple-100">
       <div className="w-[1250px] h-[400px]  welcomeImg rounded">
       </div>
       </div>
      </div>
    </>
  );
}