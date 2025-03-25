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
        <span className="text-gray-900">Using Date Filters in Vizta</span>
      </nav>

      {/* Heading */}
      <h1 className="text-2xl md:text-3xl font-bold mb-4">
        How to Use Date Filters in Vizta for Better Data Analysis
      </h1>

      {/* Description */}
      <p className="text-gray-700 mb-4">
        Date filters in Vizta allow you to refine your data analysis by
        selecting specific time ranges. This feature is essential when working
        with sales reports, trend analysis, and time-series data. You can apply
        date filters dynamically to gain better insights into your data.
        <br />
        <br />
        With Vizta's date filtering options, you can:
      </p>

      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>
          Select predefined date ranges such as Today, Last 7 Days, Last Month,
          and Custom Date Range.
        </li>
        <li>
          Apply dynamic date filters to dashboards for real-time data updates.
        </li>
        <li>
          Combine date filters with other filters like category or region for
          deeper insights.
        </li>
        <li>
          Use relative date filtering (e.g., “Last 3 Months”) for automated
          time-based comparisons.
        </li>
      </ul>

      <p className="text-gray-700 mb-4">
        Watch the video below to learn how to set up and use date filters
        effectively in Vizta. Start exploring today at
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
          title="How to Use Date Filters in Vizta"
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
