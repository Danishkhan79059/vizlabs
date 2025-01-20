"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const page = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    company: "",
    phone: "",
    country: "India",
  });

  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState("");
  //   const [isLoading, setIsLoading] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the error for the field being changed
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.firstName) formErrors.firstName = "First name is required";
    if (!formData.lastName) formErrors.lastName = "Last name is required";
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Invalid email address";
    }
    if (!formData.jobTitle) formErrors.jobTitle = "Job title is required";
    if (!formData.company) formErrors.company = "Company is required";
    if (!formData.phone) {
      formErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      formErrors.phone = "Phone number must be 10 digits";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setFormStatus("Please fix the errors and try again.");
      return;
    }

    setIsClient(true);
    // Prepare the request payload
    const requestBody = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      jobTitle: formData.jobTitle,
      company: formData.company,
      mobileNumber: formData.phone,
      country: formData.country,
    };

    // Make the POST request
    try {
      const response = await fetch(
        "https://demojsbackend.vizlabs.in/register/website",
        // "http://localhost:3002/register/website",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log("Success:", data);
        setFormStatus("Registration successful!");
        router.push("/verifypage");
        // Optionally, you can reset the form or show a success message
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          jobTitle: "",
          company: "",
          phone: "",
          country: "India",
        });

        setTimeout(() => {
          router.push("/");
        }, 3000);
      } else {
        console.log("Error:", data);
        setFormStatus(data.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setFormStatus("An error occurred. Please try again.");
    } finally {
      setIsClient(false);
    }
  };

  return (
    <>
      <div
        className="min-h-screen flex items-center justify-center px-4 pt-40"
        style={{
          background:
            "linear-gradient(136deg, rgba(235, 248, 255, 0.5) 50%, #ffffff 50%)",
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-8">
          {/* Left Section */}
          <div>
            <h1 className="text-4xl font-bold text-blue-900 mb-4">
              Start your free trial.
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              No credit card required, no software to install.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <span className="text-green-600 font-bold mr-2">✔</span>
                Pre-loaded data or upload your own
              </li>
              <li className="flex items-center">
                <span className="text-green-600 font-bold mr-2">✔</span>
                Pre-configured processes, reports, and dashboards
              </li>
              <li className="flex items-center">
                <span className="text-green-600 font-bold mr-2">✔</span>
                Guided experiences for sales reps, leaders, and administrators
              </li>
              <li className="flex items-center">
                <span className="text-green-600 font-bold mr-2">✔</span>
                Online training and live onboarding webinars
              </li>
            </ul>
            <p className="text-gray-700">
              Questions? Talk to an expert:{" "}
              <span className="text-blue-600 font-semibold">7045814007</span>.
            </p>
          </div>

          {/* Right Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              Sign up now to start your free sales trial.
            </h2>
            <p className="text-gray-600 mb-4">
              Complete the form to start your free trial. Our team will be in
              touch to help you make the most of your trial.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
                <input
                  type="text"
                  placeholder="Last name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}
              </div>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
              <input
                type="text"
                placeholder="Job Title"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              {errors.jobTitle && (
                <p className="text-red-500 text-sm">{errors.jobTitle}</p>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                {errors.company && (
                  <p className="text-red-500 text-sm">{errors.company}</p>
                )}
                <select className="border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none">
                  <option>1 - 25 employees</option>
                  <option>26 - 100 employees</option>
                  <option>101 - 500 employees</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
                <select className="border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none">
                  <option>India</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="agreement" />
                <label htmlFor="agreement" className="text-gray-600">
                  I agree to the{" "}
                  <a href="#" className="text-blue-600">
                    Main Services Agreement
                  </a>
                  .
                </label>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-blue-950 text-white font-semibold rounded-md flex items-center justify-center"
                >
                  {isClient ? (
                    <>
                      <span>Loading</span>
                      <span className="animate-bounce mr-2">...</span>
                    </>
                  ) : (
                    "START MY FREE TRIAL"
                  )}
                </button>
              </div>
              {formStatus && (
                <p
                  className={`text-center mt-4 ${
                    formStatus.includes("successful")
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {formStatus}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
      <footer className="bg-white py-12  ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Branding */}
            <div className="flex items-center space-x-2">
              <img
                src="./image/viz.png"
                alt="Vizta Logo"
                className="w-48 h-14 object-contain"
              />
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61570940870974"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-blue-600 hover:text-blue-800" />
                </a>
                <a
                  href="https://x.com/vizlabsindia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-blue-400 hover:text-blue-600" />
                </a>
                <a
                  href="https://www.instagram.com/vizlabsindia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-pink-600 hover:text-pink-800" />
                </a>
                <a
                  href="https://www.linkedin.com/company/viz-labs/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-blue-700 hover:text-blue-900" />
                </a>
              </div>
            </div>

            {/* What is Vizta? */}
            <div>
              <h3 className="text-lg font-bold text-gray-700 mb-4">
                What is Vizta?
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Build a Data Culture
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    The Vizta Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    The Vizta Advantage
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Data Analytics Insights
                  </a>
                </li>
              </ul>
            </div>

            {/* About Vizta */}
            <div>
              <h3 className="text-lg font-bold text-gray-700 mb-4">
                About Vizta
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Mission
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Vizta Research
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Awards and Recognition
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Equality at Vizta
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-bold text-gray-700 mb-4">Support</h3>
              <ul className="text-gray-600 space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Knowledge Base
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Vizta Help
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    All Releases
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default page;
