"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "react-time-picker/dist/TimePicker.css";
// import { useSearchParams } from "next/navigation";

export default function Page() {
  const today = new Date();
  // const searchParams = useSearchParams();
  // Get specific query params
  // const name = searchParams.get("name") 
  // const emails = searchParams.get("email")
  // const phone = searchParams.get("phoneNumber") 
  // const countrys = searchParams.get("country") 
  

  //state define
  const [selectedDate, setselectedDate] = useState(new Date());
  console.log(selectedDate);

  const [selectedTime, setSelectedTime] = useState("");
  console.log(selectedTime);

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState();
  const [phoneNumber, setphoneNumber] = useState();
  const [country, setCountry] = useState();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [meetings, setMeetings] = useState([]);
  const [error, setError] = useState("");

  const timeSlots = [
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
    "05:00 PM",
    "05:30 PM",
    "06:00 PM",
  ];

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const response = await fetch("https://demojsbackend.vizlabs.in/meeting/getAll");
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
  const selectedDateUTC = new Date(
    Date.UTC(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate()
    )
  );

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
      selectedDate: selectedDateUTC.toISOString().split("T")[0], // YYYY-MM-DD in UTC
      selectedTime, // HH:MM format
    };

    try {
      const response = await fetch("https://demojsbackend.vizlabs.in/meeting/schedule", {
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
  const targetDateISO = normalizeDate(selectedDateUTC);

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
              Let's connect
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mt-6 leading-tight text-center">
              Let us showcase how we can help you
            </h1>
            <p className="text-gray-600 mt-4 text-base text-center">
              Experience the power of vizta with a personalized demo tailored to
              your needs. Schedule a session with our experts to explore key
              features and see how we can help you achieve your goals. Book your
              demo today and take the first step toward smarter solutions!
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
                className="relative w-full mt-4 py-3 bg-blue-950 text-white rounded-lg text-lg font-semibold  transition-transform transform hover:scale-105"
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
          <div className="w-full md:w-1/2 p-4 bg-white rounded-3xl  pt-10">
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
            <div className="flex justify-center items-center mt-3">
              <div className="bg-white p-3 rounded-lg  w-fit">
                <Calendar
                  onChange={setselectedDate}
                  value={selectedDateUTC}
                  // prev2Label={null}
                  // next2Label={null}
                  // prevLabel={null}
                  // nextLabel={null}
                  minDate={today}
                />
              </div>
            </div>
            {selectedDateUTC && (
              <>
                <h3 className="text-md md:text-lg font-bold mt-4">
                  Select Time
                </h3>
                <div className="mt-3 bg-white p-3 md:p-4 rounded-lg  grid grid-cols-2 md:grid-cols-3 gap-2">
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
