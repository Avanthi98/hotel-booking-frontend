const categories = [
  {
    name: "Standard",
    description: "Affordable room with basic amenities.",
    price: 8000,
    features: ["Wi-Fi", "Television", "Mini Fridge"],
    image:
      "https://cdn4.volusion.store/euhfr-xvuyx/v/vspfiles/photos/ADJS-PNK-1.jpg?v-cache=1723552021",
  },
  {
    name: "Deluxe",
    description: "Spacious room with ocean views.",
    price: 15000,
    features: ["Ocean View", "Private Balcony", "King-Size Bed"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgLGOzVILYdSNtLQxAAGFi69n8LIMYY-HFBg&s",
  },

  {
    name: "Luxury",
    description: "Luxury suite with a lounge and jacuzzi.",
    price: 25000,
    features: ["Jacuzzi", "Lounge Area", "Smart TV"],
    image:
      "https://cdn.webhotelier.net/photos/w=1920/canalehot-penhsv/L821926.jpg",
  },
];

export default function AdminCategory() {
  return (
    <div className="w-full p-6">
      <h1 className="text-gray-700 text-2xl font-bold text-center my-4">
        Category Management
      </h1>
      <table className="w-full bg-gray-200 border-black border-x-2 border-y-2">
        <thead>
          <tr className="text-gray-700 bg-gray-400 ">
            <th className="px-2 py-2 border-black border-x-2 border-y-2">
              Category Name
            </th>
            <th className="px-2 py-2 border-black border-x-2 border-y-2">
              Description
            </th>
            <th className="px-2 py-2 border-black border-x-2 border-y-2">
              Price
            </th>
            <th className="px-2 py-2 border-black border-x-2 border-y-2">
              Features
            </th>
            <th className="px-2 py-2 border-black border-x-2 border-y-2">
              Image
            </th>
          </tr>
        </thead>

        <tbody>
          {categories.map((category) => {
            return (
              <tr key={category.name}>
                <td className="px-2 py-2 border-black border-x-2 border-y-2 text-center">
                  {category.name}
                </td>
                <td className="px-2 py-2 border-black border-x-2 border-y-2 text-center">
                  {category.description}
                </td>
                <td className="px-2 py-2 border-black border-x-2 border-y-2 text-center">
                  {category.price.toLocaleString("en-LK")}
                </td>
                <td className="px-2 py-2 border-black border-x-2 border-y-2 text-center">
                  <ul>
                    {category.features.map((feature, i) => {
                      return <li key={i}>{feature}</li>;
                    })}
                  </ul>
                </td>

                <td className="px-2 py-2 border-black border-x-2 border-y-2">
                  <div className="flex  items-center justify-center">
                    <img
                      className="w-24 h-auto border-x border-y border-black rounded "
                      src={category.image}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
