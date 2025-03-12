"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const page = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(6);
  const [isClient, setIsClient] = useState(false); // Client-side flag to ensure we use the router only on the client
  const router = useRouter(); // Use the router here

  useEffect(() => {
    setIsClient(true); // Set to true when the component has mounted
  }, []);

  const blogs = [
    {
      id: 1,
      image: "./image/Tau1.webp",
      title: "Tau: AI Integrated Data Visualization in Vizta",
      author: "Manav Panwar",
      date: "January 12, 2025",
      excerpt:
        "Explore how 'Tau', an AI-powered feature in Vizta, leverages Large Language Models (LLMs) for dynamic data visualization and predictive insights.",
      link: "/blog1",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dccfiolig/image/upload/v1735644825/screenshots/6773d5c393e5257818cbcf54_chart.png",
      title: "What is Vizta? Revolutionizing Data Visualization",
      author: "Team Vizta",
      date: "January 5, 2025",
      excerpt:
        "Learn how Vizta empowers users with cutting-edge data visualization tools to make smarter decisions.",
      link: "/blog2",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dccfiolig/image/upload/v1735187925/screenshots/2f636e6a-c246-41b5-8e7e-542cec04b26b_dashboard.png",
      title: "Top 5 Features of Vizta for Better Decision-Making",
      author: "Mohit Panwar",
      date: "January 6, 2025",
      excerpt:
        "Explore the top features that make Vizta the go-to solution for professionals and organizations.",
      link: "/blog3",
    },
    {
      id: 4,
      image:
        "https://www.rapidionline.com/hs-fs/hubfs/common-data-integration-techniques.png?width=1000&height=740&name=common-data-integration-techniques.png",
      title: "How Vizta Integrates with Your Data Sources",
      author: "Mohit Panwar",
      date: "January 7, 2025",
      excerpt:
        "Seamlessly connect Vizta with your databases and APIs for real-time data insights.",
      link: "/blog4",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/dccfiolig/image/upload/v1734672975/screenshots/0d785a43-fa89-4fc1-b593-6a27eaf3f864_dashboard.png",
      title: "Creating Dynamic Dashboards with Vizta",
      author: "Manav Panwar",
      date: "January 8, 2025",
      excerpt:
        "Learn how to build interactive and dynamic dashboards with Vizta's intuitive interface.",
      link: "/blog5",
    },
    {
      id: 6,
      image: "./image/vt.webp",
      title: "Vizta vs. Tableau: Which One is Right for You?",
      author: "Mohit Panwar",
      date: "January 9, 2025",
      excerpt:
        "A detailed comparison of Vizta and Tableau to help you choose the right tool for your needs.",
      link: "/blog6",
    },
    {
      id: 7,
      image: "./image/connect.png",
      title: "The Data Revolution: From SQL to Excel to AI-Powered Business Intelligence",
      author: "Mohit Panwar",
      date: "March 13, 2025",
      excerpt:
        "A detailed comparison of Vizta and Tableau to help you choose the right tool for your needs.",
      link: "/blog7",
    },
  ];

  const handleLoadMore = () => {
    setVisibleBlogs((prev) => prev + 6);
  };

  return (
    <>
      <div
        className="min-h-screen p-6 pt-40"
        style={{
          background:
            "linear-gradient(136deg, rgba(235, 248, 255, 0.5) 50%, #ffffff 50%)",
        }}
      >
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 p-6 lg:p-12 justify-between">
          {/* Left Content Section */}
          <div className="max-w-2xl w-full ml-20">
            {/* Tag */}
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full w-fit text-sm font-semibold mb-4">
              Artificial Intelligence
            </div>
            {/* Title */}
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight text-gray-900 mb-4">
              Unlocking the Power of Data: A Comprehensive Guide to Vizta's
              Visualization Tools
            </h1>

            {/* Author and Description */}
            <div className="flex items-center gap-4 mb-6">
              <img
                src="image/Group.png"
                alt="Author"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-sm text-gray-500">
                  Help everyone in your company understand key generative AI
                  terms, and what they mean for your customer relationships. Fun
                  fact: This article was (partially) written using generative
                  AI.
                </p>
              </div>
            </div>
          </div>
          {/* Right Image Section */}
          <div className="flex-shrink-0 w-full lg:w-96 mr-16">
            <img
              src="image/all.webp"
              alt="Illustration"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <header className="p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            Vizta Blog
          </h1>
          <p className="text-gray-600 text-center mt-2">
            Explore the latest insights, tips, and guides for mastering data
            visualization and decision-making with Vizta.
          </p>
        </header>

        <main className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.slice(0, visibleBlogs).map((blog) => (
            <article
              key={blog.id}
              className="bg-white p-6 shadow-md rounded-lg transition-shadow hover:shadow-lg"
            >
              <img
                src={blog.image} // Assuming you have an 'image' property in the blog object
                alt={blog.title}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h2 className="text-2xl font-bold text-gray-800">{blog.title}</h2>
              <p className="text-blue-500 text-sm">
                By {blog.author} on {blog.date}
              </p>
              <p className="text-gray-700 mt-4">{blog.excerpt}</p>
              <Link
                href={blog.link} // Updated to use Next.js Link with 'href'
                className="mt-4 inline-block text-blue-600 font-semibold hover:underline"
              >
                Read More
              </Link>
            </article>
          ))}
        </main>

        {visibleBlogs < blogs.length && (
          <div className="text-center mt-6">
            <button
              onClick={handleLoadMore}
              className="bg-blue-500 text-white font-medium py-2 px-6 rounded-lg shadow hover:bg-blue-600 focus:outline-none"
            >
              Load More
            </button>
          </div>
        )}

        <footer className="text-center text-gray-600 text-sm mt-10">
          &copy; 2025 Vizta Blog. All rights reserved.
        </footer>
      </div>

      <div className="bg-blue-50 relative flex flex-col items-center justify-center py-24 px-6 sm:px-12 lg:px-24 rounded-lg  overflow-hidden ">
        {/* Background Design */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-b from-white to-blue-50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 leading-snug">
            "Subscribe to our monthly newsletter for the latest business
            insights and trends directly to your inbox!"
          </h2>

          <button
            onClick={() => router.push("/contact")}
            className="mt-6 bg-blue-950 text-white font-medium text-sm sm:text-base py-3 px-8 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
};

export default page;
