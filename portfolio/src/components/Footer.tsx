import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/rakshith',
      label: 'GitHub',
      color: 'hover:text-gray-800'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/rakshith',
      label: 'LinkedIn',
      color: 'hover:text-blue-600'
    },
    {
      icon: Mail,
      href: 'mailto:ahrakshith122@gmail.com',
      label: 'Email',
      color: 'hover:text-red-500'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-poppins mb-2">
              <span className="gradient-text">Rakshith A H</span>
            </h3>
            <p className="text-gray-400">
              Aspiring Software Engineer | Python Developer | Data Analyst
            </p>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-colors duration-300 transform hover:scale-110`}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.querySelector(`#${item.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-gray-400 hover:text-white transition-colors duration-300 mx-auto md:mx-0"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>using Next.js & Tailwind CSS</span>
            </div>
            
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2024 Rakshith A H. All rights reserved.</p>
              <p className="text-sm mt-1">
                Currently pursuing B.E. at JSS Science and Technology University
              </p>
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <div className="text-center mt-8">
          <button
            onClick={scrollToTop}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;