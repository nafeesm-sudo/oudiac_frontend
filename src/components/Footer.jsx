import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h2 className="text-3xl font-serif mb-6">
              ATIF
            </h2>

            <p className="text-gray-400">
              Luxury fragrances crafted since 1985.
            </p>

            <div className="flex gap-4 mt-6">
              <FaInstagram />
              <FaFacebook />
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;