export function AddGalleryItem() {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center p-6">
      <div className="w-[500px] h-[550px] bg-white flex justify-center rounded-md">
        <form className="flex flex-col">
          <h1 className="text-[18px] text-gray-700 font-semibold text-center m-5">
            Enter Gallery Event Details Here:
          </h1>
          <label className="text-gray-700">Event ID:</label>
          <input
            type="text"
            className="w-[400px] h-7 mb-2 px-4 border border-gray-400"
            required
          ></input>
          <label className="text-gray-700">Event Name:</label>
          <input
            type="text"
            className="w-[400px] h-7 mb-2 px-4 border border-gray-400"
            required
          ></input>
          <label className="text-gray-700">Image:</label>
          <input
            type="file"
            className="w-[400px] h-24 py-2 mb-2 px-4 border border-gray-400"
          ></input>
          <label className="text-gray-700">Description:</label>
          <input
            type="text"
            className="w-[400px] h-16 mb-2 px-4 border border-gray-400"
          ></input>

          <div className="flex justify-center my-3">
            <button
              type="submit"
              className="w-[400px] h-9 placeholder:p-3 rounded-md border bg-blue-600 text-white font-semibold flex justify-center items-center"
            >
              Add Gallery Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
