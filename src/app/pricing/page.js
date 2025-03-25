"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaChevronUp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";

const PricingCard = ({
  title,
  price,
  description,
  features,
  gradient,
  isPopular,

  delay,
  defaultPricing,
}) => {
  const router = useRouter();
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Adjust duration if needed
  }, []);

  return (
    <div
      className={`w-80 rounded-lg shadow-lg p-6 ${gradient} text-center relative`}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {isPopular && <span></span>}
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="text-4xl font-extrabold mb-4">
        ${price}{" "}
        <span className="text-lg font-normal">
          {defaultPricing === "year" ? "/user/month" : "/user/month"}
        </span>
      </div>
      {defaultPricing === "year" && (
        <p className="text-sm text-gray-600 mb-4">(billed annually)</p>
      )}
      {defaultPricing === "monthly" && (
        <p className="text-sm text-gray-600 mb-4">(billed annually)</p>
      )}
      <p className="text-sm text-gray-600 mb-6">{description}</p>
      <ul className="space-y-2 mb-6 text-left">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-blue-600">✔</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

const page = () => {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState(null);

  const [defaultPricing, setDefaultPricing] = useState("year");
  const faqData = [
    {
      question: "Do all users need to be on the same edition?",
      answer: "No, users can be on different editions.",
    },
    {
      question: "How do I get access to Vizta Agent?",
      answer:
        "You can access Vizta Agent via your organization's subscription plan.",
    },
    {
      question: "Does Vizta offer discounts for nonprofit organizations?",
      answer:
        "Yes, Vizta offers discounts for nonprofits. Contact support for details.",
    },
    {
      question:
        "How do I choose the right mix of user licenses for my organization?",
      answer:
        "Evaluate your team's roles and their data needs to determine the best license mix.",
    },
    {
      question:
        "How do I get Advanced Management and Data Management capabilities?",
      answer:
        "These capabilities are included in specific Vizta plans. Contact sales for more details.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>
          Vizta Pricing | Affordable Data Curation Plans for Every Business
        </title>
        <meta
          name="description"
          content="Explore Vizta's flexible pricing plans for data curation and visualization. Find the perfect plan for your business needs and scale effortlessly."
        />
      </Head>

      <div
        className="min-h-screen py-12 pt-40"
        style={{
          background:
            "linear-gradient(136deg, rgba(235, 248, 255, 0.5) 50%, #ffffff 50%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Header Section */}
          <h1 className="text-2xl sm:text-4xl  text-gray-900 mb-6 max-w-4xl mx-auto leading-snug">
            Getting actionable insight from your{" "}
            <br className="hidden sm:block" />
            business data is just a step away
          </h1>
          {/* Free Trial Section */}
          <div className="mb-8">
            <span className="text-lg sm:text-xl  text-gray-900">
              15 Days Free Trial
            </span>
            <p className="text-md sm:text-lg text-gray-500">
              No credit card required
            </p>
          </div>
          {/* Buttons for Monthly and Yearly plans */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            <button
              onClick={() => {
                setDefaultPricing("monthly");
              }}
              className={`px-6 py-3 text-black font-semibold rounded-lg transition duration-300 cursor-pointer ${
                defaultPricing === "monthly"
                  ? "bg-blue-950 text-white"
                  : "bg-gray-300 hover:bg-blue-200 hover:text-white"
              }`}
            >
              Monthly Plan
            </button>

            <button
              onClick={() => {
                setDefaultPricing("year");
              }}
              className={`px-6 py-3 text-black font-semibold rounded-lg transition duration-300 cursor-pointer ${
                defaultPricing === "year"
                  ? "bg-blue-950 text-white"
                  : "bg-gray-300 hover:bg-green-200 hover:text-white"
              }`}
            >
              Yearly Plan
            </button>
          </div>
          {/* Pricing Cards Section */}
          <div className="flex flex-wrap justify-center gap-6">
            <PricingCard
              title="Viewer"
              price={defaultPricing === "year" ? 9 : 9 + 2}
              description=""
              features={[
                "Real-time data visualization with Vizta's dynamic charts",
                "Advanced map-based visualizations for geospatial data",
                "Seamless integration with your data sources using Vizta's API",
                "Interactive and customizable dashboards for your data needs",
              ]}
              gradient="bg-white border border-gray-300"
              aos="fade-up"
              delay="100"
              defaultPricing={defaultPricing}
            />
            <PricingCard
              title="Explorer"
              price={defaultPricing === "year" ? 29 : 29 + 2}
              description=""
              features={[
                "Most popular dynamic charts to visualize your data in real-time",
                "Highly interactive map visualizations for geospatial analysis",
                "Instant integration with your data sources via Vizta’s robust API",
                "Customizable and user-friendly dashboards for seamless data exploration",
              ]}
              gradient="bg-white border border-gray-300"
              isPopular={true}
              aos="fade-up"
              delay="200"
              defaultPricing={defaultPricing}
            />
            <PricingCard
              title="Creator"
              price={defaultPricing === "year" ? 59 : 59 + 2}
              description=""
              features={[
                "AI-powered insights and predictive analytics for smarter decision-making",
                "Premium customer support with dedicated data experts",
                "Advanced data processing capabilities for large datasets",
                "Real-time collaboration tools to work seamlessly with your team",
                "Customizable themes and branding for your dashboards and reports",
              ]}
              gradient="bg-white border border-gray-300"
              aos="fade-up"
              delay="300"
              defaultPricing={defaultPricing}
            />
          </div>
          <button
            className="bg-blue-950 mt-8 text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-lg rounded-md hover:bg-blue-700 transition w-[50%]"
            onClick={() => router.push("/trial")}
          >
            BUY NOW
          </button>

          <div className=" flex flex-col justify-center items-center text-center mt-12">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-900">
              "Unlock the power of data with Vizta—insights that drive your
              success."
            </h1>
            <div className="mt-6 space-x-4">
              <button
                className="bg-blue-950 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                onClick={() => router.push("/contact")}
              >
                TRY Vizta FOR FREE
              </button>
            </div>
          </div>
          <div className=" py-20 ">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-2xl font-bold text-center mb-6">
                Frequently Asked Questions
              </h1>
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-left py-3 px-4 text-lg font-medium text-gray-700 hover:bg-gray-100 flex justify-between items-center"
                    >
                      {faq.question}
                      <span
                        className={`transform transition-transform ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      >
                        <FaChevronUp />
                      </span>
                    </button>
                    {openIndex === index && (
                      <div className="px-4 pb-3 text-gray-600">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* FAQ Section */}
          <div className=" py-12 mt-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
              Do you still have questions regarding our pricing?
            </h2>

            <button
              onClick={() => router.push("/contact")}
              className="px-8 py-3 bg-blue-950 text-white font-semibold  hover:bg-blue-600 transition duration-300 mb-6"
            >
              GET STARTED FOR FREE
            </button>

            <p className="text-lg  mb-4">
              For sales inquiries, please email us at{" "}
              <a
                href="mailto:contactvizlabs@gmail.com"
                className="text-blue-500 hover:text-blue-700"
              >
                contactvizlabs@gmail.com
              </a>
            </p>

            <span className="text-lg text-gray-600">
              Or call us at{" "}
              <a
                href="tel:7045814007 "
                className="text-blue-500 hover:text-blue-700"
              >
                +91 7045814007
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
