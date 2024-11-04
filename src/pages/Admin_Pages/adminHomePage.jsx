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
import AdminRooms from "../Admin/Rooms/adminRooms";
import AdminUsers from "../Admin/Users/adminUsers";
import AdminGalleryItems from "../Admin/GalleryItems/adminGalleryItems";
import AddCategoryForm from "../Admin/addCategoryForm/addCategoryForm";

export default function AdminPage() {
  return (
    <div className=" w-full max-h-[100vh] overflow-hidden flex">
      <div className="bg-purple-800 w-[20%] h-[100vh] flex flex-col pl-3">
        <div className="text-white text-[20px] hover:text-gray-300 hover:font-bold cursor-pointer flex items-center gap-2">
          <BsBookmarkCheck />
          <Link to="/admin/bookings ">Bookings</Link>
        </div>

        <div className="text-white text-[20px] hover:text-gray-300 hover:font-bold cursor-pointer flex items-center gap-2">
          <MdOutlineRoom />
          <Link to="/admin/rooms ">Rooms</Link>
        </div>

        <div className=" text-white text-[20px] hover:text-gray-300 hover:font-bold cursor-pointer flex items-center gap-2">
          <BiCategory />
          <Link to="/admin/categories ">Categories</Link>
        </div>

        <div className=" text-white text-[20px] hover:text-gray-300 hover:font-bold cursor-pointer flex items-center gap-2">
          <HiOutlineUsers />
          <Link to="/admin/users ">Users</Link>
        </div>

        <div className="text-white text-[20px] hover:text-gray-300 hover:font-bold cursor-pointer flex items-center gap-2">
          <MdOutlineFeedback />
          <Link to="/admin/feedbacks ">Feedbacks</Link>
        </div>

        <div className=" text-white text-[20px] hover:text-gray-300 hover:font-bold cursor-pointer flex items-center gap-2">
          <GrGallery />
          <Link to="/admin/galleryitems ">Gallery Items</Link>
        </div>
      </div>

      <div className="bg-purple-500 w-[80%] max-h-[100vh] overflow-y-scroll">
        <Routes path="/*">
          <Route path="/bookings" element={<AdminBooking />}></Route>
          <Route path="/rooms" element={<AdminRooms />}></Route>
          <Route path="/categories" element={<AdminCategory />}></Route>
          <Route path="/add-category" element={<AddCategoryForm/>}></Route>
          <Route path="/users" element={<AdminUsers />}></Route>
          <Route path="/feedbacks" element={<AdminFeedback />}></Route>
          <Route path="/galleryitems" element={<AdminGalleryItems />}></Route>
        </Routes>
      </div>
    </div>
  );
}
