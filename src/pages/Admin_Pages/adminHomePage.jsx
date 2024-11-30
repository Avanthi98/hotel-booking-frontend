import { Link, Route, Routes } from "react-router-dom";
//Importing React icons
import { BsBookmarkCheck } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineFeedback } from "react-icons/md";
import { MdOutlineRoom } from "react-icons/md";
import { GrGallery } from "react-icons/gr";

//Importing functions
import AdminBooking from "../Admin/Booking/adminBooking";
import AdminCategory from "../Admin/Categories/adminCategories";
import AdminFeedback from "../Admin/Feedbacks/adminFeedbacks";
import AdminUsers from "../Admin/Users/adminUsers";
import AdminGalleryItems from "../Admin/GalleryItems/adminGalleryItems";
import AddCategoryForm from "../Admin/addCategoryForm/addCategoryForm";
import AddGalleryItemForm from "../Admin/addGalleryItemForm/addGalleryItemForm";
import UpdateCategoryForm from "../Admin/updateCategoryForm/updateCategory";
import UpdateGalleryItemForm from "../Admin/updateGalleryItemForm/updateGalleryItemForm";
import AdminRooms from "../Admin/Rooms/adminRooms";
import AddRoomForm from "../Admin/addRoomForm/addRoomForm";
import UpdateRoomForm from "../Admin/updateRoomForm/updateRoomForm";

export default function AdminPage() {
  return (
    <div className=" w-full max-h-[100vh] overflow-hidden flex">
      <div className="bg-gradient-to-b from-purple-700 to-fuchsia-600 lg:w-[20%] h-[100vh] flex flex-col justify-center items-center gap-3">
        <div className="flex flex-col items-center">
          <img
            src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-173524.jpg"
            className="border w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] rounded-full"
          ></img>
          <p className="text-white lg:text-[20px] font-bold text-center py-2">
            Welcome to the admin panel!
          </p>
        </div>
        <div className="text-white lg:text-[20px]  font-bold hover:text-gray-300 hover:font-bold cursor-pointer flex items-center gap-2 border-2 pl-5 rounded-md w-[160px] lg:w-[200px] lg:p-2">
          <BsBookmarkCheck />
          <Link to="/admin/bookings ">Bookings</Link>
        </div>

        <div className="text-white font-bold lg:text-[20px] hover:text-gray-300 hover:font-bold cursor-pointer flex items-center gap-2 border-2 pl-5 rounded-md w-[160px] lg:w-[200px] lg:p-2">
          <MdOutlineRoom />
          <Link to="/admin/rooms ">Rooms</Link>
        </div>

        <div className=" text-white font-bold lg:text-[20px] hover:text-gray-300 hover:font-bold cursor-pointer flex items-center gap-2 border-2 pl-5 rounded-md w-[160px] lg:w-[200px] lg:p-2">
          <BiCategory />
          <Link to="/admin/categories ">Categories</Link>
        </div>

        <div className=" text-white font-bold lg:text-[20px] hover:text-gray-300 hover:font-bold cursor-pointer flex items-center gap-2 border-2 pl-5 rounded-md w-[160px] lg:w-[200px] lg:p-2">
          <HiOutlineUsers />
          <Link to="/admin/users ">Users</Link>
        </div>

        <div className="text-white font-bold lg:text-[20px] hover:text-gray-300 hover:font-bold cursor-pointer flex items-center gap-2 border-2 pl-5 rounded-md w-[160px] lg:w-[200px] lg:p-2">
          <MdOutlineFeedback />
          <Link to="/admin/feedbacks ">Feedbacks</Link>
        </div>

        <div className=" text-white font-bold lg:text-[20px] hover:text-gray-300 hover:font-bold cursor-pointer flex items-center gap-2 border-2 pl-5 rounded-md w-[160px] lg:w-[200px] lg:p-2">
          <GrGallery />
          <Link to="/admin/gallery-items ">Gallery Items</Link>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-500 to-blue-500 w-[80%] max-h-[100vh] overflow-y-scroll">
        <Routes path="/*">
          <Route path="/bookings" element={<AdminBooking />}></Route>
          <Route path="/rooms" element={<AdminRooms/>}></Route>
          <Route path="/add-room" element={<AddRoomForm/>}></Route>
          <Route path="/update-room" element={<UpdateRoomForm/>}></Route>
          <Route path="/categories" element={<AdminCategory />}></Route>
          <Route path="/add-category" element={<AddCategoryForm />}></Route>
          <Route
            path="/update-category"
            element={<UpdateCategoryForm />}
          ></Route>
          <Route path="/users" element={<AdminUsers />}></Route>
          <Route path="/feedbacks" element={<AdminFeedback />}></Route>
          <Route path="/gallery-items" element={<AdminGalleryItems />}></Route>
          <Route
            path="/add-galleryItem"
            element={<AddGalleryItemForm />}
          ></Route>
          <Route
            path="/update-galleryItem"
            element={<UpdateGalleryItemForm />}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}
