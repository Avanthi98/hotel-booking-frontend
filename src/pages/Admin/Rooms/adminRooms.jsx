const rooms = [
  {
    roomId: 101,
    category: "Deluxe Room",
    availability: true,
    maxNoOfGuests: 2,
    photos: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQzGTijzYYXZFz9M6K4dh4p5flFe4tM1f8vQ&s",
      "https://www.peninsula.com/en/-/media/pbk/rooms/deluxe-room-twin-bed.jpg?mw=905&hash=9515693D3D8455DE1F48031E23A9C6BA",
    ],
    specialDescription: "Ocean view with a private balcony.",
    notes: "Includes complimentary breakfast.",
  },
  {
    roomId: 102,
    category: "Standard Room",
    availability: false,
    maxNoOfGuests: 4,
    photos: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIJpoDK0nz9fZ7RwKwr_X0aoBBxQ1Znb7iBw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKPeF-av_gegfHLlzjux71eaIUzugiiFoCrw&s",
    ],
    specialDescription: "Luxury suite with a jacuzzi and lounge area.",
    notes: "Currently under maintenance.",
  },
  {
    roomId: 103,
    category: "Standard Room",
    availability: true,
    maxNoOfGuests: 3,
    photos: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS5pgOBdk6UWzQ6DQEZhxR26oIwyzwLunk3g&s",
      "https://amorgoshotel.com/wp-content/uploads/2014/12/Amorgos-Bathroom1-e1464285790281.jpg",
    ],
    specialDescription: "Simple room with all basic amenities.",
    notes: "Recommended for budget travelers.",
  },
  {
    roomId: 104,
    category: "Luxury",
    availability: true,
    maxNoOfGuests: 5,
    photos: [
      "https://5.imimg.com/data5/SELLER/Default/2022/5/HV/ZZ/LI/106321217/luxury-bedroom-interior-design-service.jpg",
      "https://blenderartists.org/uploads/default/original/4X/9/7/f/97f719d01b3861ae6bcee365828b1996f0073100.jpeg",
    ],
    specialDescription: "Spacious room with two double beds.",
    notes: "Perfect for family stays.",
  },
  {
    roomId: 105,
    category: "Luxury",
    availability: false,
    maxNoOfGuests: 1,
    photos: [
      "https://t3.ftcdn.net/jpg/06/19/00/08/360_F_619000872_AxiwLsfQqRHMkNxAbN4l5wg1MsPgBsmo.jpg",
      "https://t3.ftcdn.net/jpg/06/39/88/70/360_F_639887058_HCisflmW1CTF4EoNBv2CADRdf0RftNoR.jpg",
    ],
    specialDescription: "Cozy room for solo travelers.",
    notes: "Currently booked for the next two weeks.",
  },
];

export default function AdminRooms() {//Function name should start with capital letter
  return (
    <div className="w-full p-6">
      <h1 className="text-2xl font-bold text-center my-4 text-gray-700">
        Rooms Management
      </h1>

      <table className="w-full max-h-screen bg-gray-200">
        <thead className="bg-gray-400 border-black border-x-2 border-y-2">
          <tr className="text-gray-700">
            <th className="px-2 py-2 border-black border-y-2 border-x-2">
              Room ID
            </th>
            <th className="px-2 py-2 border-black border-y-2 border-x-2">
              Category
            </th>
            <th className="px-2 py-2 border-black border-y-2 border-x-2">
              Availability
            </th>
            <th className="px-2 py-2 border-black border-y-2 border-x-2">
              Max Guests
            </th>
            <th className="px-2 py-2 border-black border-y-2 border-x-2">
              Photos
            </th>
            <th className="px-2 py-2 border-black border-y-2 border-x-2">
              Special Description
            </th>
            <th className="px-2 py-2 border-black border-y-2 border-x-2">
              Notes
            </th>
          </tr>
        </thead>

        <tbody>
          {rooms.map((room) => {
            return (
              <tr key={room.roomId}>
                <td className="px-2 py-2 border-black border-y-2 border-x-2">
                  {room.roomId}
                </td>
                <td className="px-2 py-2 border-black border-y-2 border-x-2">
                  {room.category}
                </td>
                <td className="px-2 py-2 border-black border-y-2 border-x-2">
                  {room.availability ? "Available" : "Occupied"}
                </td>
                <td className="px-2 py-2 border-black border-y-2 border-x-2">
                  {room.maxNoOfGuests}
                </td>
                <td className="px-2 py-2 border-black border-y-2 border-x-2 w-44">
                  <div className="flex gap-2 overflow-x-auto max-w-xs items-center justify-center">
                    {room.photos.map((photo, index) => (
                      <img
                        key={index} //Here we can use array index as a key if that element does'nt have an any special key
                        src={photo}
                        className="w-16 h-16 object-cover border border-black rounded"
                      />
                    ))}
                  </div>
                </td>
                <td className="px-2 py-2 border-black border-y-2 border-x-2">
                  {room.specialDescription}
                </td>
                <td className="px-2 py-2 border-black border-y-2 border-x-2">
                  {room.notes}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
