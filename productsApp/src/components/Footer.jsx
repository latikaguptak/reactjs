const Footer = () => 
    {
        return(
            <div>
                <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <img className="h-8 w-8" src="/img/logo.svg" alt="Logo" />
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/" className="hover:text-white">Home</a>
            <a href="/about" className="hover:text-white">About</a>
            <a href="/services" className="hover:text-white">Services</a>
            <a href="/contact" className="hover:text-white">Contact</a>
          </div>
        </div>
        <div className="mt-6 text-center text-sm sm:text-left">
          &copy; 2023 Your Company. All rights reserved.
        </div>
      </div>
      </footer>
            </div>
        )
    }
export default Footer;