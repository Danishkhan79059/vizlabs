"use client";
import { MdSmartDisplay } from "react-icons/md";
import { useRouter } from "next/navigation";


const Page = () => {
  const router = useRouter();

  const demoData = [
    {
      title: "Introduction to Vizta : Get Started with Data Visualization",
      description:
        "Get started with Vizta and explore the fundamentals of data visualization. Learn how to create interactive dashboards and insightful reports with ease.",
      imageSrc: "/image/screenshot.png",
      link: "/Vizta_introduction",
    },
    {
      title: "How to Use Date Filters in Vizta for Better Data Analysis",
      description:
        "Discover how to apply date filters in Vizta to refine your data analysis, customize visualizations, and gain deeper insights with tables, charts, and maps",
      imageSrc: "/image/screenshot.png",
      link: "/vizta_datefilter",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 lg:px-8 pt-32">
      {/* Header Section */}
      <div className="flex items-center gap-4 p-5 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all w-full max-w-2xl mx-auto">
        <div className="bg-blue-600 text-white p-3 rounded-lg">
          <MdSmartDisplay className="w-7 h-7" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900">How-to Videos</h2>
          <p className="text-gray-600 text-sm">
            Watch short videos showing how to complete specific tasks with Vizta
            product.
          </p>
        </div>
      </div>

 

      {/* Title */}
      <h2 className="text-3xl font-extrabold text-center text-blue-900 mt-10 mb-8">
        Explore More Resources to Achieve Your Goals
      </h2>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {demoData.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden transition-transform transform hover:scale-105 cursor-pointer w-full max-w-md mx-auto"
          >
            <div className="relative w-full h-32">
              <img
                src={item.imageSrc}
                alt={item.title}
                className="w-full h-full object-cover rounded-t-xl"
              />
            </div>
            <div className="p-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Demo Playlist
              </p>
              <h3 className="text-md font-bold text-gray-900 mt-1">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-1 text-sm leading-relaxed">
                {item.description}
              </p>
              {/* Watch Video Link */}
              <button
                className="mt-3 text-blue-600 font-semibold hover:underline text-sm"
                onClick={() => router.push(item.link)}
              >
                Watch Video →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
