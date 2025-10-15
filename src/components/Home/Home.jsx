import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex flex-col items-center">

      {/* Hero Section */}
      <section className="relative w-full max-w-7xl px-4 sm:px-6 lg:px-12 py-16 flex flex-col lg:flex-row items-center lg:justify-between gap-12">
        
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Explore the World
            <span className="block text-indigo-600 mt-2">with Lorem Ipsum Yojo</span>
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
            Discover amazing places, plan your trips, and experience the adventure like never before.
          </p>

          <div className="flex justify-center lg:justify-start gap-4 mt-6">
            <Link
              to="/"
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transform hover:scale-105 transition duration-300"
            >
              Download App
            </Link>
            <Link
              to="/"
              className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transform hover:scale-105 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
              alt="Travel Hero"
              className="w-full lg:h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Secondary Section */}
      <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-12 mt-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Why Choose Us?</h2>
        <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto">
          We provide curated travel guides, exclusive tips, and tools to make your journeys effortless and memorable.
        </p>
      </section>
    </div>
  );
}
