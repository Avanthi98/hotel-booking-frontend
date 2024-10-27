import Header from "../../Components/Header/header"

export default function HomePage(){
    return(
        <>
        <Header/>
    <div className="w-full h-screen bg-blue-500 flex flex-col items-center">

      <div className="bg-white w-[700px] h-[70px] rounded-lg flex items-center justify-center mt-14 mb-8">
        <input type="Date"></input>
        <input type="Date"></input>
        <select>
          <option>Luxury</option>
          <option>Deluxe</option>
          <option>Standard</option>
        </select>
        <button>Book Now</button>
      </div>

      <h1 className="text-white text-3xl">Welcome to LeoNine Villa!</h1>

    </div>
    </>
    )
}