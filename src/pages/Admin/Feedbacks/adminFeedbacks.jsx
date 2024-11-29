import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";

export default function AdminFeedback() {
  const navigate = useNavigate();

  //Get the token from local storage
  const token = localStorage.getItem("token");
  //Check whether token is null or not
  if (token == null) {
    navigate("/login");
  }

  //Create Usestates
  const [feedbacks, setFeedbacks] = useState([]);
  const [feedbackIsLoading, setFeedbackIsLoading] = useState(false);

  useEffect(() => {
    if (!feedbackIsLoading) {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/feedback")
        .then((res) => {
          console.log(res);
          setFeedbacks(res.data.result);
          setFeedbackIsLoading(true);
        });
    }
  }, [feedbackIsLoading]);

  //Implementing delete function
  function handleDelete(feedbackId) {
    axios
      .delete(
        import.meta.env.VITE_BACKEND_URL + "/api/feedback/" + feedbackId,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        toast.success("Feedback deleted successfully!");
        setFeedbackIsLoading(false);
        console.log(res);
      })
      .catch((err) => {
        toast.error("Failed to delete the feedback!");
        console.log(err);
      });
  }
  return (
    <div className="w-full p-6">
      <h1 className="text-2xl font-bold text-center my-4 text-gray-800">
        Feedback Management
      </h1>

      <table className="w-full bg-gray-200 border-black border-x-2 border-y-2">
        <thead>
          <tr className="text-gray-700 bg-gray-400 ">
            <th className="px-2 py-2 border-[#343434] border-x-2 border-y-2">
              Feedback ID
            </th>
            <th className="px-2 py-2 border-[#343434] border-x-2 border-y-2">
              Client Email
            </th>
            <th className="px-2 py-2 border-[#343434] border-x-2 border-y-2">
              Rating
            </th>
            <th className="px-2 py-2 border-[#343434] border-x-2 border-y-2">
              Comment
            </th>
            <th className="px-2 py-2 border-[#343434] border-x-2 border-y-2">
              Status
            </th>
            <th className="px-2 py-2 border-[#343434] border-x-2 border-y-2">
              Created At
            </th>
            <th className="px-2 py-2 border-[#343434] border-x-2 border-y-2">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {feedbacks.map((feedback) => (
            <tr key={feedback.feedbackId}>
              <td className="px-2 py-2 border-[#343434] border-x-2 border-y-2 text-center">
                {feedback.feedbackId}
              </td>
              <td className="px-2 py-2 border-[#343434] border-x-2 border-y-2 text-center">
                {feedback.clientEmail}
              </td>
              <td className="px-2 py-2 border-[#343434] border-x-2 border-y-2 text-center">
                {feedback.rating}
              </td>
              <td className="px-2 py-2 border-[#343434] border-x-2 border-y-2 text-center">
                {feedback.comment}
              </td>
              <td className="px-2 py-2 border-[#343434] border-x-2 border-y-2 text-center">
                {feedback.status}
              </td>
              <td className="px-2 py-2 border-[#343434] border-x-2 border-y-2 text-center">
                {feedback.createdAt.toLocaleString()}
              </td>
              <td className="px-2 py-2 border-[#343434] border-x-2 border-y-2">
                <div className="flex items-center justify-center gap-2">
                  <button
                    className="text-red-600 text-[28px]"
                    onClick={() => {
                      handleDelete(feedback.feedbackId);
                    }}
                  >
                    <MdDelete />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
