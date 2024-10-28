const feedbacks = [
  {
    feedbackId: 1,
    clientEmail: "john.doe@example.com",
    rating: 5,
    comment: "Amazing service! Will visit again.",
    status: "Approved",
    createdAt: new Date("2024-10-10T10:20:30Z"),
  },
  {
    feedbackId: 2,
    clientEmail: "jane.smith@example.com",
    rating: 3,
    comment: "Room was decent but could improve cleanliness.",
    status: "Pending",
    createdAt: new Date("2024-10-15T08:15:00Z"),
  },
  {
    feedbackId: 3,
    clientEmail: "alex.jones@example.com",
    rating: 2,
    comment: "The food quality was disappointing.",
    status: "Rejected",
    createdAt: new Date("2024-10-18T12:45:00Z"),
  },
  {
    feedbackId: 4,
    clientEmail: "sam.wilson@example.com",
    rating: 4,
    comment: "Good experience, but Wi-Fi could be better.",
    status: "Approved",
    createdAt: new Date("2024-10-20T09:00:00Z"),
  },
  {
    feedbackId: 5,
    clientEmail: "lisa.brown@example.com",
    rating: 1,
    comment: "Had a very unpleasant experience with the staff.",
    status: "Rejected",
    createdAt: new Date("2024-10-22T15:30:00Z"),
  },
];

export default function AdminFeedback() {
  return (
    <div className="w-full p-6">
      <h1 className="text-2xl font-bold text-center my-4 text-gray-700">
        Feedback Management
      </h1>

      <table className="w-full max-h-screen bg-gray-200">
        <thead className="bg-gray-400 border-black border-x-2 border-y-2">
          <tr className="text-gray-700">
            <th className="px-2 py-2 border-black border-y-2 border-x-2">
              Feedback ID
            </th>
            <th className="px-2 py-2 border-black border-y-2 border-x-2">
              Client Email
            </th>
            <th className="px-2 py-2 border-black border-y-2 border-x-2">
              Rating
            </th>
            <th className="px-2 py-2 border-black border-y-2 border-x-2">
              Comment
            </th>
            <th className="px-2 py-2 border-black border-y-2 border-x-2">
              Status
            </th>
            <th className="px-2 py-2 border-black border-y-2 border-x-2">
              Created At
            </th>
          </tr>
        </thead>

        <tbody>
          {feedbacks.map((feedback) => (
            <tr key={feedback.feedbackId}>
              <td className="px-2 py-2 border-black border-y-2 border-x-2">
                {feedback.feedbackId}
              </td>
              <td className="px-2 py-2 border-black border-y-2 border-x-2">
                {feedback.clientEmail}
              </td>
              <td className="px-2 py-2 border-black border-y-2 border-x-2">
                {feedback.rating}
              </td>
              <td className="px-2 py-2 border-black border-y-2 border-x-2">
                {feedback.comment}
              </td>
              <td className="px-2 py-2 border-black border-y-2 border-x-2">
                {feedback.status}
              </td>
              <td className="px-2 py-2 border-black border-y-2 border-x-2">
                {feedback.createdAt.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
