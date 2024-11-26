import Header from "../../../Components/Header/header";
import "./homePage.css";
export default function HomePage() {
  return (
    <>
      <Header />
      <div className="w-full h-screen bg-gradient-to-r from-[#CF9FFF]  to-purple-600">
        <div className="px-[10px] py-[30px] flex flex-col items-center">
          <h1 className="text-purple-800 text-[22px] lg:text-3xl font-bold mt-3 mb-5">
            Welcome to LeoNine Villa!
          </h1>

          <div className="px-[10px] bg-purple-200 border border-purple-700">
            <div className="flex items-center justify-center mt-5 lg:mt-1 gap-1 lg:gap-5 lg:w-[500px] lg:h-[100px]">
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

            <div className="flex items-center justify-center mt-4 mb-4 lg:mt-0 lg:mb-6">
              <button className=" bg-purple-700 p-2 border border-purple-700 rounded-md text-white font-semibold hover:bg-purple-950">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="w-full h-[380px] bg-gradient-to-r from-[#CF9FFF] to-purple-600 lg:h-[500px] flex justify-center items-center lg:py-[20px] ">
          <div className="bg-purple-800 flex justify-center items-center rounded-md m-2 lg:m-0 p-5 lg:p-[30px]">
            <div className="w-[170px] h-[290px] lg:w-[400px] lg:h-[380px]  welcomeImg rounded"></div>
            <div className="pl-3 lg:pl-[20px] w-[250px] h-[290px] lg:w-[400px] lg:h-[380px] text-justify font-sans text-[11px] lg:text-[16px] text-white">
              <p><i>
              <b>LeoNine Villa </b>is a charming hotel that offers a blend of
                comfort and elegance, perfect for holiday getaways. Nestled in a
                serene location, the villa provides top-notch room and food
                services, ensuring a delightful experience for its guests.
                Whether you're seeking a peaceful retreat or an adventurous
                holiday, LeoNine Villa caters to all your needs with its
                well-appointed rooms and exquisite dining options. Guests can
                enjoy a variety of culinary delights prepared by expert chefs,
                adding a touch of luxury to their stay. With its easy room
                booking process and attentive staff, the hotel guarantees a
                seamless and relaxing experience. LeoNine Villa is an ideal
                destination for families, couples, or solo travelers looking to
                unwind and create lasting memories in a tranquil and welcoming
                environment.
              </i>
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
