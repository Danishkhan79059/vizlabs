"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "react-time-picker/dist/TimePicker.css";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  // Get specific query params
  const name = searchParams.get("name") || "";
  const emails = searchParams.get("email") || "";
  const phone = searchParams.get("phoneNumber") || "";
  const countrys = searchParams.get("country") || "";
  //state define
  const [selectedDate, setSelectedDate] = useState(new Date());
  console.log(selectedDate);

  const [selectedTime, setSelectedTime] = useState(null);
  console.log(selectedTime);

  const [firstName, setFirstName] = useState(name);
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState(emails);
  const [phoneNumber, setphoneNumber] = useState(phone);
  const [country, setCountry] = useState(countrys);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [meetings, setMeetings] = useState([]);
  const [error, setError] = useState("");

  const timeSlots = [
    "08:00 AM",
    "08:30 AM",
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
  ];

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const response = await fetch("http://localhost:3500/api/meetings");
        const data = await response.json();
        setMeetings(data.meetings);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching meetings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMeetings();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    const formData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      country,
      selectedDate: selectedDate.toISOString().split("T")[0], // YYYY-MM-DD format
      selectedTime, // HH:MM format
    };

    try {
      const response = await fetch("http://localhost:3500/api/schedule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Meeting scheduled successfully!");
      } else {
        setMessage(result.message || "Something went wrong!");

        // If slot is already booked, update available slots
        if (result.availableSlots) {
          setAvailableSlots(result.availableSlots);
        }
      }
    } catch (error) {
      setMessage("Error: Unable to schedule meeting.");
    } finally {
      setLoading(false);
    }
  };

  const normalizeDate = (date) => {
    const d = new Date(date);
    return d.toISOString().split("T")[0]; // Extract YYYY-MM-DD in UTC
  };

  // Ensure selectedDate is treated correctly
  const targetDateISO = normalizeDate(selectedDate);

  // Filter meetings based on the normalized date
  const selectedTimes = (meetings ?? [])
    .filter((meeting) => {
      if (!meeting?.selectedDate) return false;
      return normalizeDate(meeting.selectedDate) === targetDateISO;
    })
    .map((meeting) => meeting?.selectedTime ?? "No Time Available");

  console.log(selectedTimes);

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 md:p-8 lg:p-12">
        <div className="max-w-6xl w-full bg-white rounded-3xl shadow-xlp-6 md:p-10 flex flex-col md:flex-row gap-6 pt-32">
          <div className="w-full md:w-1/2 p-6 mx-auto max-w-lg ">
            <span className="bg-gray-200 text-blue-950 px-4 py-1 rounded-full text-sm font-bold">
              Lets connect to Vizta
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mt-6 leading-tight text-center">
              Vizta: Seamless Meeting Scheduling for Your Business
            </h1>
            <p className="text-gray-600 mt-4 text-base text-center">
              Vizta makes scheduling meetings effortless for individuals, teams,
              and businesses. Whether you're coordinating with clients, managing
              internal team discussions, or setting up recurring meetings, Vizta
              provides a fully customizable and automated solution.
            </p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                <input
                  type="name"
                  placeholder="Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg"
                value={phoneNumber}
                onChange={(e) => setphoneNumber(e.target.value)}
              />
              <input
                type="text"
                placeholder="Country"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
              <button
                type="submit"
                className="relative w-full mt-4 py-3 bg-blue-950 text-white rounded-lg text-lg font-semibold shadow-md transition-transform transform hover:scale-105"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-2 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16z"
                      ></path>
                    </svg>
                    Scheduling...
                  </div>
                ) : (
                  "Schedule Meeting"
                )}
              </button>
            </form>

            {message && (
              <p className="text-center text-green-600  p-2 rounded-md mt-3">
                ✅ {message}
              </p>
            )}
          </div>
          {/* Right Side */}
          <div className="w-full md:w-1/2 p-4 bg-gray-100 rounded-3xl shadow-md pt-10">
            <div className="flex items-center gap-3">
              <Image
                src="/image/Mohit.png"
                width={48}
                height={48}
                alt="User"
                className="rounded-full"
              />
              <div>
                <h2 className="text-lg md:text-xl font-bold">Mohit Panwar</h2>
                <p className="text-gray-600 text-sm">Business Appointment</p>
              </div>
            </div>
            <p className="text-gray-600 mt-3 text-sm md:text-base">
              Welcome to Vizta! Schedule your appointment easily.
            </p>
            <div className="flex flex-wrap gap-2 mt-3 text-gray-600 text-sm">
              <span>🕒 30 mins</span>
              <span>🌍 Online </span>
            </div>
            <h3 className="text-lg font-bold mt-4">Select Date</h3>
            <div className="mt-3 bg-white p-3 rounded-lg shadow">
              <Calendar onChange={setSelectedDate} value={selectedDate} />
            </div>
            {selectedDate && (
              <>
                <h3 className="text-md md:text-lg font-bold mt-4">
                  Select Time
                </h3>
                <div className="mt-3 bg-white p-3 md:p-4 rounded-lg shadow grid grid-cols-2 md:grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      disabled={
                        selectedTimes.includes(time) || selectedTime === time
                      }
                      className={`px-4 py-2 rounded-md font-semibold text-center transition-colors w-full text-xs md:text-sm ${
                        selectedTime === time || selectedTimes.includes(time)
                          ? "bg-blue-950 text-white"
                          : "bg-white text-blue-600 border-2 border-blue-400"
                      } ${
                        selectedTimes.includes(time) || selectedTime === time
                          ? "bg-blue-950  cursor-not-allowed bg-white-400"
                          : "hover:bg-blue-500 hover:text-white cursor-pointer"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
