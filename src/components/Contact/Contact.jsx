export default function Contact() {
  return (
    <div className="relative flex items-top justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Contact Info */}
          <div className="p-8 bg-gradient-to-br from-white to-gray-100 rounded-3xl shadow-2xl flex flex-col justify-center space-y-6">
            <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
              Get in touch
            </h1>
            <p className="text-lg text-gray-600 font-medium">
              Fill in the form to start a conversation
            </p>

            <div className="flex items-center space-x-4 text-gray-700">
              <svg
                className="w-8 h-8 text-orange-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="font-semibold">Acme Inc, Street, State, Postal Code</span>
            </div>

            <div className="flex items-center space-x-4 text-gray-700">
              <svg
                className="w-8 h-8 text-blue-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="font-semibold">+44 1234567890</span>
            </div>

            <div className="flex items-center space-x-4 text-gray-700">
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="font-semibold">info@acme.org</span>
            </div>
          </div>

          {/* Contact Form */}
          <form className="p-8 bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm transition"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm transition"
            />
            <input
              type="tel"
              placeholder="Telephone Number"
              className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm transition"
            />
            <button
              type="submit"
              className="w-32 py-3 px-6 bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              Submit
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
