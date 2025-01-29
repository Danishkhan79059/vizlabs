"use client";
import React from "react";

const page = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center pt-20 px-4"
      style={{
        background:
          "linear-gradient(136deg, rgba(235, 248, 255, 0.5) 50%, #ffffff 50%)",
      }}
    >
      {/* Header */}
      <div className="text-center">
        <img
          src="/image/viz.png" // Replace with the actual logo
          alt="Vizta Logo"
          className="mx-auto mb-4 h-8"
        />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Almost there! Check your email.
        </h1>
        <p className="text-gray-700 mt-2">
          Your free 30-day trial is on its way to your inbox.
        </p>
      </div>

      {/* Content Section */}
      <div className="mt-6 flex flex-col md:flex-row items-center md:items-start w-full max-w-5xl">
        {/* Steps */}
        <div className="bg-white shadow-md rounded-lg px-6 py-4 max-w-lg w-full text-gray-700">
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-600 font-bold text-lg mr-2">✔</span>
              <span>
                Check your inbox. If you don’t see it in a bit, it might be
                stuck in your spam.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold text-lg mr-2">✔</span>
              <span>Follow guided steps to finish setting up.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold text-lg mr-2">✔</span>
              <span>
                Use in-app guides and hands-on tutorials to learn Vizta.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold text-lg mr-2">✔</span>
              <span>Use pre-loaded data or upload your own.</span>
            </li>
          </ul>
          <div className="text-blue-600 mt-4">
            <a href="#" className="hover:underline">
              Need more help? Start a chat.
            </a>
          </div>
        </div>

        <div className="mt-8 md:mt-0 md:ml-8 flex justify-center">
          <img
            src="https://t4.ftcdn.net/jpg/08/86/08/03/360_F_886080369_pufsScsZTfj1mdVWDG4ReafQrevQgvLC.jpg" // Replace with the actual mascot image
            alt="Mascot"
            className="w-64 md:w-72"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
