"use client";
import React from "react";
import { IoArrowBack } from "react-icons/io5";

import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen py-10 pt-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 mt-4 md:text-4xl lg:text-5xl">
            Top 5 Features of Vizta for Better Decision-Making
          </h1>
          <p className="text-gray-600 mt-6 md:mt-8 text-lg">
            **Vizta** is an advanced Business Intelligence (BI) platform
            designed to empower businesses with real-time insights and
            personalized data visualizations. By enabling smarter, data-driven
            decision-making, Vizta is transforming how organizations approach
            complex business challenges. Let’s explore the top 5 features of
            Vizta that are revolutionizing the decision-making process:
          </p>

          <div className="flex items-center mt-6 md:mt-8">
            <img
              src="image/Group.png" // Vizta logo link
              alt="Vizta India"
              className="w-8 h-8"
            />
            <div className="ml-3 text-gray-500">
              <p>Vizta India</p>
              <p>January 13, 2025 • 6 min read</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <button
            onClick={() => router.back()}
            className="absolute top-[15%] left-[75%] flex items-center gap-2 p-2 rounded-lg bg-blue-100 shadow-md hover:shadow-lg transition"
          >
            <IoArrowBack className="text-gray-700 text-lg" />
            <span className="text-gray-700 text-sm font-semibold">Go Back</span>
          </button>
          <img
            src="https://venngage-wordpress.s3.amazonaws.com/uploads/2021/02/Data-Visualization-Infographic.png" // Replace with the actual image URL
            alt="Illustration"
            className="w-full max-w-sm md:max-w-md mx-auto rounded-2xl"
          />
        </div>
      </div>

      {/* Blog Section Below */}
      <div className="max-w-7xl mx-auto mt-12 px-6 md:px-0">
        {/* Heading: Key Features of Vizta */}
        <h2 className="text-2xl font-bold text-gray-800">
          Key Features of Vizta:
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          **Vizta** offers a variety of powerful features that enhance
          decision-making and streamline data analysis. Below are the top 5
          features that make Vizta a standout tool for organizations:
        </p>
        <ul className="list-disc pl-6 mt-4 text-gray-600">
          <li>Real-time data visualization with customizable dashboards</li>
          <li>
            Seamless integration with various data sources for unified insights
          </li>
          <li>
            Interactive charts and graphs for deeper, intuitive exploration
          </li>
          <li>Customizable filters and views for tailored business needs</li>
          <li>
            AI-powered data insights for enhanced decision-making speed and
            accuracy
          </li>
        </ul>

        {/* Heading: How Vizta Empowers Decision-Making */}
        <h3 className="text-xl font-semibold text-gray-800 mt-8">
          How Vizta Empowers Decision-Making
        </h3>
        <p className="text-gray-600 mt-4 text-lg">
          With Vizta, decision-makers no longer rely on static reports or
          complex spreadsheets. The interactive, real-time data visualizations
          allow teams to easily interpret critical business data, offering a
          clear path forward for both day-to-day and strategic decisions.
        </p>
        <p className="text-gray-600 mt-4 text-lg">
          <strong className="text-blue-400">
            Exploratory Data Visualization (EDV)
          </strong>{" "}
          Exploratory data visualization is a hands-on approach where users
          interact with data to discover insights. It’s about asking questions
          and exploring different aspects of the data to understand its
          underlying patterns, trends, and anomalies. The goal is to "explore"
          the data, investigate it from multiple angles, and see what emerges.
          EDV allows users to: Drill down into specific subsets of data. Filter
          and zoom into different time periods or granular levels. Compare
          categories or metrics. Discover relationships and correlations. It's
          flexible, dynamic, and encourages curiosity—giving users the freedom
          to ask "what," "why," and "how" while diving into the data.
        </p>
        <p className="text-gray-600 mt-4 text-lg">
          <strong className="text-blue-400">
            {" "}
            Explanatory Data Visualization (ExDV)
          </strong>{" "}
          On the other hand, explanatory data visualization focuses on
          presenting clear insights and telling a story with the data. It's used
          to communicate findings to an audience, typically decision-makers, by
          highlighting the most important and relevant aspects of the data. It’s
          about making the data understandable and accessible, showing the key
          points without overwhelming the viewer. ExDV is often used in: Reports
          and presentations for business leaders or stakeholders. Summarizing
          complex data in clear, actionable insights. Narrating a story where
          the visuals support a specific conclusion or decision. ExDV is more
          structured, aiming to highlight key takeaways rather than encourage
          exploration. It simplifies complex data, focusing on clarity and
          context to help people make informed decisions.
        </p>

        {/* Heading: The Role of Maps in Data Visualization */}
        <h3 className="text-xl font-semibold text-gray-800 mt-8">
          The Role of Maps in Data Visualization
        </h3>
        <p className="text-gray-600 mt-4 text-lg">
          Maps provide a powerful way to visualize geographical data, offering
          insights that can drive location-based decision-making. Vizta
          integrates dynamic maps that allow users to overlay data on geographic
          regions, helping identify trends and patterns tied to specific
          locations.
        </p>
        <img
          src="/image/map1.png" // Replace with actual beginner techniques image
          alt="Data Visualization for Beginners"
          className="w-full max-w-full mx-auto rounded-2xl mt-6"
        />
        <img
          src="/image/mapcity.png" // Replace with actual beginner techniques image
          alt="Data Visualization for Beginners"
          className="w-full max-w-full mx-auto rounded-2xl mt-6"
        />
        <p className="text-gray-600 mt-4 text-lg">
          Maps provide a powerful way to visualize geographical data, offering
          insights that can drive location-based decision-making. Vizta
          integrates dynamic maps that allow users to overlay data on geographic
          regions. By using the coordinates of states or specific locations, the
          system can pinpoint and display markers directly on the map, helping
          identify trends and patterns tied to specific regions. This
          interactive approach enables users to explore and analyze data based
          on real-world locations.
        </p>

        <img
          src="/image/map2.png" // Replace with actual beginner techniques image
          alt="Data Visualization for Beginners"
          className="w-full max-w-full mx-auto rounded-2xl mt-6"
        />

        {/* Heading: Needle Charts for Precision Metrics */}
        <h3 className="text-xl font-semibold text-gray-800 mt-8">
          Area Charts for Precision Metrics
        </h3>
        <p className="text-gray-600 mt-4 text-lg">
          Area charts are a powerful tool for visualizing data trends over time,
          especially when tracking changes in metrics across different
          categories or periods. These charts help emphasize the magnitude of
          changes, making it easier to observe patterns and variations. In
          Vizta, we use area charts to represent data in a way that highlights
          the relationship between multiple variables, allowing users to see how
          one metric evolves in relation to others. Whether you're tracking
          sales growth, revenue trends, or performance over time, area charts
          provide a clear visual narrative that makes complex data more
          digestible. Their stacked design also makes it easy to compare
          different categories, giving users an intuitive understanding of how
          each element contributes to the overall trend.
        </p>
        <img
          src="/image/area.png" // Replace with actual beginner techniques image
          alt="Data Visualization for Beginners"
          className="w-full max-w-full mx-auto rounded-2xl mt-6"
        />

        {/* Heading: Bar Charts for Comparing Data */}
        <h3 className="text-xl font-semibold text-gray-800 mt-8">
          Bar Charts for Comparing Data
        </h3>
        <p className="text-gray-600 mt-4 text-lg">
          Bar charts are a staple in data visualization. They are especially
          useful when comparing different categories of data, making it easy to
          identify trends and outliers. Vizta allows you to create customizable
          bar charts with interactive elements to further drill down into the
          data.
        </p>
        <img
          src="/image/bar2.png" // Replace with actual chart image
          alt="Chart Types"
          className="w-full max-w-full mx-auto rounded-xl mt-6"
        />

        {/* Heading: Why Choose Vizta? */}
        <h3 className="text-xl font-semibold text-gray-800 mt-8">
          Why Choose Vizta?
        </h3>
        <p className="text-gray-600 mt-4 text-lg">
          In today’s fast-paced, data-driven business world, the right insights
          at the right time can make all the difference. **Vizta** provides
          businesses with an intuitive interface and powerful tools to stay
          ahead, make smarter decisions, and drive success.
        </p>

        {/* Heading: The Future of Data Visualization */}
        <h3 className="text-xl font-semibold text-gray-800 mt-8">
          The Future of Data Visualization
        </h3>
        <p className="text-gray-600 mt-4 text-lg">
          As data complexity continues to grow, tools like **Vizta** will play a
          pivotal role in simplifying the analysis process and empowering
          businesses to make quicker, more informed decisions. The future of
          data visualization lies in tools that not only display data but also
          drive actionable insights through smart, dynamic visualizations.
        </p>
      </div>
    </div>
  );
};

export default page;
