"use client";
import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  return (
    <>
      <div className="min-h-screen py-10 pt-40">
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            The Data Revolution: From SQL to Excel to AI-Powered Business
            Intelligence
          </h1>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              What is Business Intelligence? How AI is Changing BI Forever
            </h2>
            <p className="text-gray-700 mt-4">
              Did you know that SQL databases were invented before Excel?
            </p>
            <p className="text-gray-700 mt-2">
              One of the biggest applications of computers has always been data
              storage, processing, and analytics. Since the early days of
              computing, businesses have been optimizing how they store and
              access big data.
            </p>
            <p className="text-gray-700 mt-2">
              Before computers, companies relied on manual
              record-keeping—writing financial transactions, sales reports, and
              customer data in registers. As technology advanced, SQL databases
              became the standard for structured data storage.
            </p>
            <p>
              Today, business users primarily rely on Excel for data analysis,
              while technical users prefer SQL for structured querying, and
              business analysts favor Business Intelligence (BI) tools like
              Vizta and Tableau for advanced reporting. However, with the rise
              of AI-powered BI, the landscape is shifting. AI is bridging the
              gap between SQL and Excel, enabling self-service analytics where
              business users can interact with data as effortlessly as using a
              spreadsheet, while still leveraging the power of SQL-driven
              analytics. The future of BI lies in AI-driven tools that provide
              real-time insights, natural language querying, and automated
              decision-making, combining the best of both worlds—technical depth
              and user-friendly accessibility.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              What is SQL? The Foundation of Modern Data Management
            </h2>
            <p className="text-gray-700 mt-2">
              SQL (Structured Query Language) was developed to efficiently
              store, retrieve, and manage structured data in relational
              databases. It became the backbone of enterprise data management
              and business applications.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700">
              Benefits of Business Intelligence Software
            </h3>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>
                ✅ Connects directly to databases—no manual data extraction
              </li>
              <li>
                ✅ Provides a single source of truth—eliminates inconsistencies
              </li>
              <li>✅ Customizable dashboards—interactive data visualization</li>
              <li>✅ Automates reports—eliminates repetitive tasks</li>
              <li>
                ✅ Empowers data-driven decision-making—faster business insights
              </li>
            </ul>
          </section>
          <section className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700">
              Advantages of SQL Databases
            </h3>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>✅ Fast and scalable—handles massive datasets efficiently</li>
              <li>
                ✅ Industry-standard—used globally for enterprise applications
              </li>
              <li>
                ✅ Structured data management—ensures data integrity and
                consistency
              </li>
              <li>
                ✅ Works seamlessly with ERP, CRM, and Business Intelligence
                software
              </li>
            </ul>
          </section>
          <section className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700">
              Disadvantages of SQL Databases
            </h3>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>
                ❌ Requires programming knowledge—not user-friendly for
                non-technical users
              </li>
              <li>❌ Rigid structure—strict data types and schema rules</li>
              <li>
                ❌ Not accessible to business users—requires IT teams for
                reporting
              </li>
            </ul>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              What is Excel? How It Changed Data Analysis
            </h2>
            <p className="text-gray-700 mt-2">
              Excel was developed to make data more accessible to business
              professionals without requiring SQL knowledge. It became the
              world’s most widely used data analysis tool for finance, sales,
              marketing, supply chain, and operations teams.
            </p>
          </section>
          <section className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700">
              Advantages of Excel for Data Analysis
            </h3>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>✅ User-friendly interface—no coding required</li>
              <li>
                {" "}
                ✅ Highly flexible—allows ad-hoc analysis with pivot tables and
                formulas
              </li>
              <li>
                ✅ Widely adopted—used across industries for data visualization
                and reporting
              </li>
            </ul>
          </section>
          <section className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700">
              Disadvantages of Excel
            </h3>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>
                ❌ Struggles with big data—slow performance with large datasets
              </li>
              <li>
                {" "}
                ❌ Not connected to live databases—requires manual data imports
              </li>
              <li>❌ Error-prone—data manipulation can lead to inaccuracies</li>
            </ul>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              What is a Business Intelligence (BI) Tool?
            </h2>
            <p className="text-gray-700 mt-2">
              Business Intelligence (BI) tools like Tableau, Power BI, and Vizta
              bridge the gap between SQL databases and Excel, offering real-time
              data visualization, dashboards, and advanced analytics. Unlike
              Excel, which requires manual data uploads, BI tools connect
              directly to databases, allowing real-time reporting and
              interactive data analysis.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Why Do Companies Need Business Intelligence Tools?
            </h2>
            <p className="text-gray-700 mt-2">
              Excel vs. BI Tools: A Real-World Example Imagine you work for a
              telecom company, and you notice an increase in customer bills. You
              want to analyze whether the spike is due to higher call volumes or
              longer call durations. Excel Approach: You don’t have access to
              raw call data. You request IT for a data extract, which takes
              several days. Once received, you manually analyze it, taking a
              week to get insights. BI Tool Approach: You drag and drop call
              volume and duration metrics into the dashboard. You get real-time
              insights in under 60 seconds—no IT involvement needed.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Vizta: AI-Powered BI at an Affordable Price
            </h2>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>🚀 Conversational AI for Data Analysis</li>
              <li>🚀 Excel-Like UI for Easy Adoption</li>
              <li>🚀 Affordable AI-Powered BI</li>
              <li>🚀 Automated Insights & Decision-Making</li>
            </ul>
          </section>

          <div className="text-center mt-6">
            <p className="text-lg font-semibold text-gray-800">
              💡 Are you ready to transform your business with AI-driven BI?
            </p>
            <p className="text-lg text-blue-600 font-semibold cursor-pointer mt-2">
              🔹 Join the Data Revolution with Vizta today!
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold text-center mb-6">
            The Future of Business Intelligence: AI-Powered BI
          </h1>
          <p className="text-gray-700">
            With the rise of Artificial Intelligence (AI) and Machine Learning
            (ML), BI tools are evolving beyond static dashboards. AI-powered
            analytics enable users to ask questions in natural language and
            receive instant insights.
          </p>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              What is a Business Intelligence (BI) Tool?
            </h2>
            <p className="text-gray-700">
              Business Intelligence (BI) tools like Tableau, Power BI, and Vizta
              bridge the gap between SQL databases and Excel, offering real-time
              data visualization, dashboards, and advanced analytics. Unlike
              Excel, which requires manual data uploads, BI tools connect
              directly to databases, allowing real-time reporting and
              interactive data analysis.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              Why Do Companies Need Business Intelligence Tools?
            </h2>
            <h3 className="text-xl font-medium mt-4">
              Excel vs. BI Tools: A Real-World Example
            </h3>
            <p className="text-gray-700">
              Imagine you work for a telecom company and notice an increase in
              customer bills. You want to analyze whether the spike is due to
              higher call volumes or longer call durations.
            </p>
            <h4 className="text-lg font-medium mt-4">Excel Approach:</h4>
            <ul className="list-disc pl-6 text-gray-700">
              <li>You don’t have access to raw call data.</li>
              <li>
                You request IT for a data extract, which takes several days.
              </li>
              <li>
                Once received, you manually analyze it, taking a week to get
                insights.
              </li>
            </ul>
            <h4 className="text-lg font-medium mt-4">BI Tool Approach:</h4>
            <ul className="list-disc pl-6 text-gray-700">
              <li>
                You drag and drop call volume and duration metrics into the
                dashboard.
              </li>
              <li>
                You get real-time insights in under 60 seconds—no IT involvement
                needed.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              Benefits of Business Intelligence Software
            </h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li>
                ✅ Connects directly to databases—no manual data extraction
              </li>
              <li>
                ✅ Provides a single source of truth—eliminates inconsistencies
              </li>
              <li>✅ Customizable dashboards—interactive data visualization</li>
              <li>✅ Automates reports—eliminates repetitive tasks</li>
              <li>
                ✅ Empowers data-driven decision-making—faster business insights
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              Challenges of BI Tools
            </h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li>
                ❌ Learning curve—users need training to navigate tools like
                Tableau and Power BI
              </li>
              <li>
                ❌ Complex data transformation—requires technical expertise for
                advanced queries
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              AI-Driven Business Intelligence: The Next Big Leap
            </h2>
            <p className="text-gray-700">
              Traditional BI tools like Tableau and Power BI require users to
              manually build dashboards, apply filters, and format charts. But
              with AI-powered BI, users can simply ask:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>🗣️ "What were our top-selling products last quarter?"</li>
              <li>🗣️ "Show me sales trends for the last 6 months."</li>
            </ul>
            <p className="text-gray-700">
              …and the tool automatically generates insights.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              Vizta: AI-Powered BI at an Affordable Price
            </h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li>
                1️⃣ <strong>Conversational AI for Data Analysis</strong> – Users
                can ask questions in plain English, and Vizta provides instant
                insights.
              </li>
              <li>
                2️⃣ <strong>Excel-Like UI for Easy Adoption</strong> – Unlike
                Tableau and Power BI, Vizta’s interface is similar to Excel,
                ensuring a 0 learning curve for business users.
              </li>
              <li>
                3️⃣ <strong>Affordable AI-Powered BI</strong> – Vizta provides
                AI-driven analytics at a cost-effective price, making data
                insights accessible to SMBs.
              </li>
              <li>
                4️⃣ <strong>Automated Insights & Decision-Making</strong> – Vizta
                doesn’t just show data—it suggests actions and automates
                workflows.
              </li>
            </ul>
          </section>

          <section className="text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Why Businesses Need AI-Driven BI Today
            </h2>
            <p className="text-gray-700 mb-4">
              🚀 The era of traditional dashboards is over. AI-driven
              self-service analytics is the future of Business Intelligence.
            </p>
            <p className="text-gray-700 mb-4">
              Companies that embrace AI-powered BI today will be the market
              leaders of tomorrow.
            </p>
            <p className="text-xl font-bold">
              💡 Are you ready to transform your business with AI-driven BI?
            </p>
            <button
              onClick={() => {
                router.push("/trial");
              }}
              className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition"
            >
              🔹 Join the Data Revolution with Vizta Today!
            </button>
          </section>
        </div>
      </div>
    </>
  );
};

export default page;
