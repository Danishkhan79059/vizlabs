"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Head from "next/head";

function page() {
  const [formStatus, setFormStatus] = useState("");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: "",
    businessEmail: "",
    mobileNumber: "",
    companyName: "",
    comment: "",
  });

  const [emailError, setEmailError] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChanges = (e) => {
    const value = e.target.value;

    // Ensure the value is defined and not empty before proceeding
    if (!value) return; // Exit early if value is empty or undefined

    // Country-specific validation logic
    const countryCode = "IN"; // Country code for India
    const phoneNumberWithoutCountryCode = value.replace(/^\+?\d+/g, ""); // Remove the country code from the phone number

    // Validation for India: Only 10 digits allowed (India's phone number format)
    if (countryCode === "IN" && phoneNumberWithoutCountryCode.length <= 10) {
      setFormData({
        ...formData,
        [e.target.name]: value, // Update the value only if it's valid
      });
    } else if (countryCode !== "IN") {
      setFormData({
        ...formData,
        [e.target.name]: value, // No limit for other countries
      });
    }

    // Clear the error when the field is updated
    if (e.target.name === "firstName" && e.target.value) {
      setErrors((prevErrors) => ({ ...prevErrors, firstName: "" }));
    }
    if (e.target.name === "businessEmail" && e.target.value) {
      setErrors((prevErrors) => ({ ...prevErrors, businessEmail: "" }));
    }
    if (e.target.name === "mobileNumber" && e.target.value) {
      setErrors((prevErrors) => ({ ...prevErrors, mobileNumber: "" }));
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const validateRequiredFields = () => {
    let formErrors = {};
    if (!formData.firstName) formErrors.firstName = "Name is required";
    if (!formData.businessEmail)
      formErrors.businessEmail = "Business Email is required";
    if (!formData.mobileNumber)
      formErrors.mobileNumber = "Mobile Number is required";
    return formErrors;
  };

  //Handle input change

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //handle form submission

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const requiredFieldErrors = validateRequiredFields();
    if (Object.keys(requiredFieldErrors).length > 0) {
      setErrors(requiredFieldErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(
        "https://demojsbackend.vizlabs.in/contactusForm/contactus",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setFormStatus(
          "Thank you! We’ve received your details and will contact you shortly."
        );
        setFormData({
          firstName: "",
          businessEmail: "",
          mobileNumber: "",
          companyName: "",
          comment: "",
        });
      } else {
      }
    } catch (error) {
      setFormStatus("Error occurred while submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Vizta | Get in Touch for Data Solutions & Support</title>
        <meta
          name="description"
          content="Have questions about data curation? Contact Vizta for expert support and AI-driven data solutions. Let's connect and empower your business!"
        />
      </Head>

      <div className="bg-blue-50 text-black py-16 px-4 md:px-20 pt-40">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center">
          {/* Text Section */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-bold  tracking-widest text-blue-700">
              Contact Us
            </h2>
            <h1 className="text-2xl md:text-4xl font-extrabold mt-4">
              Are you ready to unlock the full potential of your data with
              Vizta?
            </h1>
            <p className="text-lg mt-4">
              Whether you're exploring new possibilities, tackling challenges,
              or optimizing workflows, we’re here to help.
            </p>
          </div>

          {/* Illustration Section */}
          <div className="relative flex justify-center">
            <div className="absolute w-[300px] md:w-[400px]">
              <img
                src="./image/contactUS.png"
                alt="Contact us image"
                className="mx-auto"
              />
            </div>
            {/* Add gears, trophy, and analytics images */}
          </div>
        </div>
      </div>
      <div
        className="min-[60%]: flex items-center justify-center p-6 pt-40 "
        style={{
          background:
            "linear-gradient(136deg, rgba(235, 248, 255, 0.5) 50%, #ffffff 50%)",
        }}
      >
        <div className=" rounded-xl flex flex-col md:flex-row max-w-5xl w-full">
          {/* Left Section */}
          <motion.div
            className="md:w-1/2 w-full  text-white p-10 flex flex-col justify-center rounded-l-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* <h1 className="text-4xl font-bold mb-4 text-black">Contact Us</h1> */}
            <p className="text-lg leading-8 mb-6 text-black">
              Have questions about our products, pricing, implementation, or how
              best to address your data integration and analytics needs? We'd
              love to help.
            </p>
            <motion.div
              className="mt-8 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="./image/Data-report.png"
                alt="Illustration"
                className="w-2/3 md:w-full transition-all duration-300"
              />
            </motion.div>
          </motion.div>

          {/* Right Section - Form */}
          <motion.div
            className="md:w-1/2 w-full p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6">
              Fill out the form below and we'll be in touch shortly.
            </h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <motion.input
                type="text"
                name="firstName"
                value={formData.firstName}
                placeholder="Name"
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
                transition={{ duration: 0.2 }}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}

              <div>
                <motion.input
                  type="email"
                  name="businessEmail"
                  value={formData.businessEmail}
                  placeholder="Business Email"
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => {
                    handleChange(e);
                    validateEmail(e.target.value);
                  }}
                  transition={{ duration: 0.2 }}
                />
                {emailError && (
                  <p className="text-red-500 text-sm">{emailError}</p>
                )}

                {errors.businessEmail && (
                  <p className="text-red-500 text-sm">{errors.businessEmail}</p>
                )}
              </div>

              <motion.div>
                <PhoneInput
                  defaultCountry="IN" // Default country code (India)
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={(phone) =>
                    handleChanges({
                      target: { name: "mobileNumber", value: phone },
                    })
                  }
                  placeholder="Mobile Number"
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  transition={{ duration: 0.2 }}
                />

                {errors.mobileNumber && (
                  <p className="text-red-500 text-sm">{errors.mobileNumber}</p>
                )}
              </motion.div>

              <motion.input
                type="text"
                name="companyName"
                value={formData.companyName}
                placeholder="Company Name"
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
                transition={{ duration: 0.2 }}
              />

              <motion.textarea
                name="comment"
                value={formData.comment}
                placeholder="Comments"
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"
                onChange={handleChange}
                transition={{ duration: 0.2 }}
              ></motion.textarea>

              <motion.button
                type="submit"
                className="w-[40%] p-3 bg-blue-950 text-white rounded-lg hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </motion.button>
              {formStatus && (
                <p
                  className={`text-sm mt-4 ${
                    formStatus.includes("Error")
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {formStatus}
                </p>
              )}
            </form>
          </motion.div>
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
}

export default page;
