const Users = [
  {
    email: "john.doe@example.com",
    password: "hashedpassword123",
    firstName: "John",
    lastName: "Doe",
    type: "customer",
    whatsApp: "+94123456789",
    phone: "+94123456789",
    disabled: false,
    emailVerified: true,
  },
  {
    email: "jane.smith@example.com",
    password: "hashedpassword456",
    firstName: "Jane",
    lastName: "Smith",
    type: "admin",
    whatsApp: "+94129876543",
    phone: "+94129876543",
    disabled: false,
    emailVerified: true,
  },
  {
    email: "mark.watson@example.com",
    password: "hashedpassword789",
    firstName: "Mark",
    lastName: "Watson",
    type: "customer",
    whatsApp: "+94112233445",
    phone: "+94112233445",
    disabled: false,
    emailVerified: false,
  },
  {
    email: "emily.clark@example.com",
    password: "hashedpassword101",
    firstName: "Emily",
    lastName: "Clark",
    type: "admin",
    whatsApp: "+94113334455",
    phone: "+94113334455",
    disabled: false,
    emailVerified: true,
  },
  {
    email: "david.miller@example.com",
    password: "hashedpassword102",
    firstName: "David",
    lastName: "Miller",
    type: "customer",
    whatsApp: "+94114455666",
    phone: "+94114455666",
    disabled: true,
    emailVerified: false,
  },
];

export default function AdminUsers() {
  return (
    <div className="w-full p-6 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 text-center my-4">
        User Management
      </h1>
      <table className="w-full border-b border-black border-y-2 border-x-2 bg-gray-200 overflow-hidden">
        <thead>
          <tr className="text-gray-700 bg-gray-400 border-b border-black">
            <th className="border-x-2 border-y-2 border-black px-2 py-2">
              Email
            </th>
            <th className="border-x-2 border-y-2 border-black px-2 py-2">
              Password
            </th>
            <th className="border-x-2 border-y-2 border-black px-2 py-2">
              First Name
            </th>
            <th className="border-x-2 border-y-2 border-black px-2 py-2">
              Last Name
            </th>
            <th className="border-x-2 border-y-2 border-black px-2 py-2">
              User Type
            </th>
            <th className="border-x-2 border-y-2 border-black px-2 py-2">
              WhatsApp
            </th>
            <th className="border-x-2 border-y-2 border-black px-2 py-2">
              Phone
            </th>
            <th className="border-x-2 border-y-2 border-black px-2 py-2">
              User Status
            </th>
            <th className="border-x-2 border-y-2 border-black px-2 py-2">
              Email Verification
            </th>
          </tr>
        </thead>

        <tbody>
          {Users.map((user) => {
            return (
              <tr
                key={user.email}
                className="text-center border-b border-black"
              >
                <td className="border-x-2 border-y-2 border-black px-2 py-2">
                  {user.email}
                </td>
                <td className="border-x-2 border-y-2 border-black px-2 py-2">
                  {user.password}
                </td>
                <td className="border-x-2 border-y-2 border-black px-2 py-2">
                  {user.firstName}
                </td>
                <td className="border-x-2 border-y-2 border-black px-2 py-2">
                  {user.lastName}
                </td>
                <td className="border-x-2 border-y-2 border-black px-2 py-2">
                  {user.type}
                </td>
                <td className="border-x-2 border-y-2 border-black px-2 py-2">
                  {user.whatsApp}
                </td>
                <td className="border-x-2 border-y-2 border-black px-2 py-2">
                  {user.phone}
                </td>
                <td className="border-x-2 border-y-2 border-black px-2 py-2">
                  {user.disabled ? "Disabled" : "Active"}
                </td>
                <td className="border-x-2 border-y-2 border-black px-2 py-2">
                  {user.emailVerified ? "Verified" : "Not Verified"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
