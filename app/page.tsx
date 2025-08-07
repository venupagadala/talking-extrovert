"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

const features = [
  {
    title: "Personalized AI Tutoring",
    description:
      "Our AI adapts to your learning style, providing explanations and examples tailored just for you.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-blue-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Interactive Quizzes",
    description:
      "Test your knowledge with auto-generated quizzes and receive instant, constructive feedback without the pressure of grades.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-blue-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Real-World Applications",
    description:
      "Understand how math applies to everyday life and different careers, making complex concepts relatable and engaging.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-blue-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9h-3M9 12H3m8-2v4m3-4v4m3-4v4m3-4v4"
        />
      </svg>
    ),
  },
];

export default function LandingPage() {
  const router = useRouter();

  const handleTryNow = () => {
    router.push("/explanation");
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <section
          id="about"
          className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left mb-24"
        >
          <div className="lg:w-1/2">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
              Unlock Your Math Potential with{" "}
              <span className="text-blue-600">TutorAI</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-xl mx-auto lg:mx-0 mb-6">
              Empowering students from Grades 8 to 12 with a personalized,
              AI-driven learning experience that makes complex math simple and
              engaging. Our mission is to transform math from a dreaded subject
              into an exciting journey of discovery.
            </p>
            <button
              onClick={handleTryNow}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 cursor-pointer
             text-white text-lg font-semibold rounded-full shadow-lg 
             transition-all duration-500 ease-in-out transform 
             hover:scale-102 
             hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500
             hover:shadow-xl"
            >
              Start Learning Now →
            </button>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <Image
              src="/images/hero2.png"
              alt="An illustration of a student learning with an AI tutor"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl"
            />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="mb-24">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-100 p-8 rounded-xl shadow-lg border border-gray-200
               transition-all duration-300 transform
               hover:-translate-y-1 hover:shadow-2xl hover:border-blue-400
               hover:bg-gradient-to-br hover:from-white hover:to-gray-50"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Roadmap Section */}
        <section id="roadmap" className="mb-24 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Future Plans</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {/* Card 1 */}
            <div
              className="bg-gray-100 p-8 rounded-xl shadow-lg border border-gray-200
               transition-all duration-300 transform
               hover:-translate-y-1 hover:shadow-2xl hover:border-blue-400
               hover:bg-gradient-to-br hover:from-white hover:to-gray-50"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Phase 1: Launch & Core Features</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Interactive AI Tutoring</li>
                <li>Dynamic Quiz Generation</li>
                <li>Basic User Dashboard</li>
              </ul>
            </div>
            {/* Card 2 */}
            <div
              className="bg-gray-100 p-8 rounded-xl shadow-lg border border-gray-200
               transition-all duration-300 transform
               hover:-translate-y-1 hover:shadow-2xl hover:border-blue-400
               hover:bg-gradient-to-br hover:from-white hover:to-gray-50"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Phase 2: Expansion</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Gamification and Badges</li>
                <li>Parent/Teacher Reporting</li>
                <li>Support for Higher-Level Math</li>
              </ul>
            </div>
            {/* Card 3 */}
            <div
              className="bg-gray-100 p-8 rounded-xl shadow-lg border border-gray-200
               transition-all duration-300 transform
               hover:-translate-y-1 hover:shadow-2xl hover:border-blue-400
               hover:bg-gradient-to-br hover:from-white hover:to-gray-50"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Phase 3: Community & Collaboration</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Student Community Forums</li>
                <li>Live AI-Assisted Study Sessions</li>
                <li>Collaboration Tools</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="bg-blue-600 text-white text-center py-16 px-6 rounded-3xl shadow-xl"
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Master Math?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of students who are making math fun and easy. Our AI
            tutor is ready to help you succeed. For any questions, feel free to
            reach out.
          </p>
          <div className="flex justify-center space-x-6 text-xl">
            <a
              href="mailto:your.pavanbhanu3712@gmail.com"
              className="hover:underline"
            >
              Email
            </a>
            <a
              href="https://github.com/venupagadala/talking-extrovert"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/pavan-kumar-malasani-4779071a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
