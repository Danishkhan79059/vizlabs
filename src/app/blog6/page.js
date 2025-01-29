"use client";
import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <>
      <div className="min-h-screen py-10 pt-40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="md:w-1/2">
            <span className="text-blue-600 font-semibold text-sm uppercase">
              Dynamic Dashboards with Vizta
            </span>
            <h1 className="text-3xl font-bold text-gray-800 mt-4 md:text-4xl lg:text-5xl">
              Creating Dynamic Dashboards with Vizta
            </h1>
            <p className="text-gray-600 mt-6 md:mt-8 text-lg">
              In today’s data-driven world, the ability to create dynamic and
              visually appealing dashboards is essential for organizations to
              make informed decisions. **Vizta**, a powerful tool inspired by
              Tableau, offers an intuitive platform to create dashboards that
              not only look great but also provide actionable insights. This
              blog will guide you through the process of creating dynamic
              dashboards with **Vizta**, enabling you to unlock the full
              potential of your data.
            </p>

            <div className="text-gray-600 mt-6 text-lg">
              <p>
                **Vizta** stands out as a tool for dashboard creation due to
                its:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-600">
                <li>
                  <strong>User-Friendly Interface:</strong> Whether you are a
                  beginner or an experienced user, Vizta’s drag-and-drop
                  features make it easy to design dashboards.
                </li>
                <li>
                  <strong>Customizability:</strong> Tailor dashboards to match
                  your organization’s branding and specific requirements.
                </li>
                <li>
                  <strong>Integration Capabilities:</strong> Connect to a wide
                  range of data sources including databases, APIs, and cloud
                  services.
                </li>
                <li>
                  <strong>Real-Time Updates:</strong> Ensure your dashboards
                  always display the latest data for accurate decision-making.
                </li>
              </ul>
            </div>

            <div className="flex items-center mt-6 md:mt-8">
              <img
                src="image/Group.png"
                alt="Vizta India"
                className="w-8 h-8"
              />
              <div className="ml-3 text-gray-500">
                <p>Vizta India</p>
                <p>December 13, 2022 • 6 min read</p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <button
              onClick={() => router.back()}
              className="absolute top-[20%] left-[75%] flex items-center gap-2 p-2 rounded-lg bg-blue-100 shadow-md hover:shadow-lg transition"
            >
              <IoArrowBack className="text-gray-700 text-lg" />
              <span className="text-gray-700 text-sm font-semibold">
                Go Back
              </span>
            </button>
            <img
              src="https://res.cloudinary.com/dccfiolig/image/upload/v1734672975/screenshots/0d785a43-fa89-4fc1-b593-6a27eaf3f864_dashboard.png" // Replace with the actual image URL
              alt="Illustration"
              className="w-full max-w-sm md:max-w-md mx-auto rounded-2xl"
            />
          </div>
        </div>

        {/* Blog Section Below */}
        <div className="max-w-7xl mx-auto mt-12 px-6 md:px-0">
          {/* Heading: How Vizta Works */}
          <h2 className="text-2xl font-bold text-gray-800">
            Steps to Create Dynamic Dashboards with Vizta
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Follow these steps to start creating dynamic dashboards with Vizta:
          </p>
          <ul className="list-decimal pl-6 mt-4 text-gray-600">
            <li>
              <strong>Define Your Goals:</strong> Understand your objectives and
              identify key metrics and KPIs to track.
            </li>
            <li>
              <strong>Connect Your Data Sources:</strong> Vizta seamlessly
              integrates with databases, cloud services, and APIs.
            </li>
            <li>
              <strong>Design the Layout:</strong> Create a visually appealing
              and easy-to-navigate layout using Vizta’s drag-and-drop feature.
            </li>
            <li>
              <strong>Add Interactive Features:</strong> Enable filters,
              sorting, searching, and dynamic color scales to improve user
              experience.
            </li>
            <li>
              <strong>Incorporate Advanced Visualizations:</strong> Use a
              variety of visualization types like bar charts, heatmaps, scatter
              plots, and maps.
            </li>
            <li>
              <strong>Test and Optimize:</strong> Ensure your dashboard works
              with real data, is user-friendly, and adapts to different screen
              sizes.
            </li>
            <li>
              <strong>Publish and Share:</strong> Publish your dashboard, grant
              access to users, and embed it in reports or web pages.
            </li>
          </ul>

          {/* Heading: Best Practices for Dynamic Dashboards */}
          <h3 className="text-xl font-semibold text-gray-800 mt-8">
            Best Practices for Dynamic Dashboards
          </h3>
          <ul className="list-disc pl-6 mt-4 text-gray-600">
            <li>
              <strong>Focus on Key Metrics:</strong> Display the most relevant
              metrics and avoid clutter.
            </li>
            <li>
              <strong>Ensure Real-Time Updates:</strong> Keep the dashboard
              synced with live data sources.
            </li>
            <li>
              <strong>Use Consistent Visuals:</strong> Maintain a uniform color
              scheme and design language.
            </li>
            <li>
              <strong>Keep It Responsive:</strong> Ensure it looks great on both
              desktop and mobile devices.
            </li>
            <li>
              <strong>Provide Context:</strong> Use tooltips, labels, and
              legends to make the dashboard intuitive.
            </li>
          </ul>

          {/* Heading: Unlocking Insights with Vizta */}
          <h3 className="text-xl font-semibold text-gray-800 mt-8">
            Unlocking Insights with Vizta
          </h3>
          <p className="text-gray-600 mt-4 text-lg">
            Dynamic dashboards empower teams to make data-backed decisions
            quickly and efficiently. With Vizta, creating such dashboards is no
            longer a complex task. Whether you are tracking sales performance,
            monitoring website analytics, or analyzing customer behavior, Vizta
            provides the tools and flexibility you need to transform raw data
            into meaningful insights.
          </p>

          {/* Heading: Ready to Create Your First Dynamic Dashboard? */}
          <h3 className="text-xl font-semibold text-gray-800 mt-8">
            Ready to Create Your First Dynamic Dashboard?
          </h3>
          <p className="text-gray-600 mt-4 text-lg">
            Visit{" "}
            <a href="#" className="text-blue-600 font-semibold">
              Vizta
            </a>{" "}
            to get started and unlock the full potential of your data!
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
