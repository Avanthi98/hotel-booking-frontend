//Sample json array data
const bookingList = [//bookingList is the json array variable here
    {
      bookingId: 1001,
      clientEmail: "john.doe@example.com",
      roomId: 301,
      start: "2024-10-25T10:00:00",
      end: "2024-10-27T12:00:00",
      status: "Pending",
      reason: "",
      timeStamp: "2024-10-22T09:15:00",
      notes: "N/A"
    },
    {
      bookingId: 1002,
      clientEmail: "jane.smith@example.com",
      roomId: 405,
      start: "2024-10-30T14:00:00",
      end: "2024-11-01T10:00:00",
      status: "Confirmed",
      reason: "",
      timeStamp: "2024-10-23T11:30:00",
      notes: "Request for extra towels."
    },
    {
      bookingId: 1003,
      clientEmail: "mark.watson@example.com",
      roomId: 102,
      start: "2024-11-05T16:00:00",
      end: "2024-11-08T11:00:00",
      status: "Cancelled",
      reason: "Personal reasons",
      timeStamp: "2024-10-25T08:45:00",
      notes: "Need a full refund."
    },
    {
      bookingId: 1004,
      clientEmail: "emily.clark@example.com",
      roomId: 203,
      start: "2024-11-10T09:00:00",
      end: "2024-11-12T15:00:00",
      status: "Confirmed",
      reason: "",
      timeStamp: "2024-10-26T13:20:00",
      notes: "Please ensure early check-in."
    },
    {
      bookingId: 1005,
      clientEmail: "david.miller@example.com",
      roomId: 505,
      start: "2024-12-01T13:00:00",
      end: "2024-12-03T10:00:00",
      status: "Pending",
      reason: "",
      timeStamp: "2024-10-27T10:00:00",
      notes: ""
    }
  ];
  

export default function AdminBooking() {
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
                bookingList.map( //json array variable.map() is a function to access data count
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
  