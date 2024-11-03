import axios from "axios";
import { useEffect, useState } from "react";


export default function AdminBooking() {

    const [booking,setBooking]=useState([])

    useEffect(()=>{
        axios.get(import.meta.env.VITE_BACKEND_URL+"/api/booking").then(
            (res)=>{
                console.log(res);
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    },[])
    return (
      <div className="w-full p-6 bg-purple-500 min-h-screen">
        <h1 className="text-2xl font-bold text-center my-4 text-gray-700">
          Bookings Management
        </h1>
  
        <table className="w-full border-b border-black border-y-2 border-x-2 bg-gray-200 overflow-hidden">
          <thead className="border-b border-black">
            <tr className="bg-gray-400 text-gray-700">
              <th className="px-2 py-2  border-black border-y-2 border-x-2">Booking ID</th>
              <th className="px-2 py-2  border-black border-y-2 border-x-2">Client Email</th>
              <th className="px-2 py-2  border-black border-y-2 border-x-2">Room ID</th>
              <th className="px-2 py-2  border-black border-y-2 border-x-2">Start Date</th>
              <th className="px-2 py-2  border-black border-y-2 border-x-2">End Date</th>
              <th className="px-2 py-2  border-black border-y-2 border-x-2">Status</th>
              <th className="px-2 py-2  border-black border-y-2 border-x-2">Reason</th>
              <th className="px-2 py-2  border-black border-y-2 border-x-2">Timestamp</th>
              <th className="px-2 py-2  border-black border-y-2 border-x-2">Notes</th>
            </tr>
          </thead>

          <tbody>
            {
                booking.map( //json array variable.map() is a function to access data count
                    (booking)=>{
                        return(//You must give a unique key to tr tag to stop generating errors in chrome console
                            <tr key={booking.bookingId}>
                                <td className="px-2 py-2  border-black border-y-2 border-x-2">{booking.bookingId}</td>
                                <td className="px-2 py-2  border-black border-x-2 border-y-2">{booking.clientEmail}</td>
                                <td className="px-2 py-2  border-black border-x-2 border-y-2">{booking.roomId}</td>
                                <td className="px-2 py-2  border-black border-x-2 border-y-2">{booking.start}</td>
                                <td className="px-2 py-2  border-black border-x-2 border-y-2">{booking.end}</td>
                                <td className="px-2 py-2  border-black border-x-2 border-y-2">{booking.status}</td>
                                <td className="px-2 py-2  border-black border-x-2 border-y-2">{booking.reason}</td>
                                <td className="px-2 py-2  border-black border-x-2 border-y-2">{booking.timeStamp}</td>
                                <td className="px-2 py-2  border-black border-x-2 border-y-2">{booking.notes}</td>
                            </tr>
                            
                        )
                    }
                )
            }
          </tbody>
        </table>
      </div>
    );
  }
  