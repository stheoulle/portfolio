import { useState } from "react";

const TimestampButton = () => {
  const [message, setMessage] = useState("");

  const fetchTimestamp = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/timestamp");
      print(response);
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error("Error fetching timestamp :", error);
      setMessage(error instanceof Error ? error.message : "An unexpected error occurred");
    }
  };

  return (
    <div>
      <button
        onClick={fetchTimestamp}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
      >
        Get Timestamp
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default TimestampButton;
