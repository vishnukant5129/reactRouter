import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-700">
      <div className="mx-auto w-full max-w-screen-xl p-6 lg:p-8">
        <div className="md:flex md:justify-between md:items-start">
          
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                className="mr-3 h-16"
                alt="Logo"
              />
              <span className="text-xl font-bold text-white">Yojo</span>
            </Link>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12">
            
            <div>
              <h2 className="mb-4 text-sm font-semibold text-white uppercase">Resources</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-orange-500 transition">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-orange-500 transition">About</Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-sm font-semibold text-white uppercase">Follow us</h2>
              <ul className="space-y-2">
                <li>
                  <a href="https://github.com/vishnukant5129" target="_blank" rel="noreferrer" className="hover:text-orange-500 transition">GitHub</a>
                </li>
                <li>
                  <Link to="#" className="hover:text-orange-500 transition">Discord</Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-sm font-semibold text-white uppercase">Legal</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="hover:text-orange-500 transition">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-orange-500 transition">Terms & Conditions</Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />

        {/* Bottom section */}
        <div className="sm:flex sm:justify-between sm:items-center">
          <span className="text-sm text-gray-400 sm:text-center">
            © 2025 <a href="https://github.com/vishnukant5129" className="hover:text-orange-500 transition">vishnukant5129</a>. All rights reserved.
          </span>

          <div className="flex mt-4 space-x-6 sm:mt-0">
            <Link to="#" className="text-gray-400 hover:text-orange-500 transition transform hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 1-10-10 10 10 0 0 1 10 10z"/></svg>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link to="#" className="text-gray-400 hover:text-orange-500 transition transform hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 4.01H2V20h20z"/></svg>
              <span className="sr-only">Twitter</span>
            </Link>
            <Link 
             target="_blank" to="https://github.com/vishnukant5129" className="text-gray-400 hover:text-orange-500 transition transform hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.57v-2c-3.34.73-4.04-1.61-4.04-1.61a3.18 3.18 0 0 0-1.34-1.76c-1.1-.76.08-.75.08-.75a2.33 2.33 0 0 1 1.7 1.14 2.35 2.35 0 0 0 3.22.8c.1-.64.38-1.25.7-1.54-2.66-.3-5.47-1.33-5.47-5.92a4.63 4.63 0 0 1 1.24-3.22s1-.32 3.28 1.24a11.36 11.36 0 0 1 6 0c2.28-1.56 3.28-1.24 3.28-1.24a4.63 4.63 0 0 1 1.24 3.22c0 4.6-2.81 5.62-5.48 5.92.39.33.73.98.73 1.98v2.94c0 .31.22.68.82.57A12 12 0 0 0 12 .5z"/></svg>
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
