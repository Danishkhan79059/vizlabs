import Image from "next/image";

export default function page() {
  return (
    <div className="max-w-4xl mx-auto p-4 pt-40">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-4">
        <a href="#" className="hover:underline">
          Vizta Docs
        </a>{" "}
        &gt;
        <a href="#" className="hover:underline">
          Help
        </a>{" "}
        &gt;
        <a href="#" className="hover:underline">
          How-to Guides
        </a>{" "}
        &gt;
        <span className="text-gray-900">Add dynamic labels to a dashboard</span>
      </nav>

      {/* Heading */}
      <h1 className="text-2xl md:text-3xl font-bold mb-4">
        Introduction to Vizta: Get Started with Data Visualization
      </h1>

      {/* Description */}
      <p className="text-gray-700 mb-4">
        In this tutorial, you'll learn how to get started with and create
        powerful data visualizations with ease. Vizta allows you to connect your
        data sources seamlessly and transform raw data into insightful charts
        using a simple drag-and-drop method. Whether you're working with sales
        reports, financial trends, or operational metrics, Vizta lets you
        visualize data in an intuitive and interactive way.
        <br />
        <br />
        This video tutorial covers the fundamentals, including how to connect
        data, build charts, and use filters to refine your analysis. With
        dynamic filtering, you can explore data from different perspectives,
        making your dashboards more insightful and actionable.
        <br />
        <br />
        Watch the video to see how easy it is to create meaningful
        visualizations in Vizta. Start exploring today at
        <a
          href="https://app.vizta.in"
          className="text-blue-600 hover:underline"
        >
          app.vizta.in
        </a>
        .
      </p>

      {/* Video Embed */}
      <div className="relative w-full aspect-w-16 aspect-h-9">
        <iframe
          className="w-full h-64 md:h-96 rounded-lg"
          src="https://www.youtube.com/embed/Z61iYHLt5Tk"
          title="How to use expressions in Vizta Studio"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      {/* Feedback */}
      <div className="mt-6 border-t pt-4">
        <p className="text-gray-700">Was this guide helpful?</p>
        <div className="flex space-x-4 mt-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Yes
          </button>
          <button className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400">
            No
          </button>
        </div>
      </div>
    </div>
  );
}
