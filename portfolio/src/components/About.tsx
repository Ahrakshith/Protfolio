import { User, Award, Coffee, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '3+' },
    { icon: Coffee, label: 'Projects Completed', value: '50+' },
    { icon: Heart, label: 'Happy Clients', value: '30+' },
    { icon: User, label: 'Team Projects', value: '15+' },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know more about who I am, what I do, and what skills I have
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Stats */}
          <div className="space-y-8">
            <div className="relative">
              <div className="w-full max-w-md mx-auto aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-6xl font-bold text-gray-400">
                Your Photo
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                3+ Years
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                I'm a passionate developer who loves creating digital solutions
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                With over 3 years of experience in web development, I specialize in creating 
                modern, responsive, and user-friendly applications. My journey started with a 
                curiosity about how websites work, and it has evolved into a passion for 
                crafting exceptional digital experiences.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                I believe in writing clean, maintainable code and staying up-to-date with the 
                latest technologies and best practices. When I'm not coding, you can find me 
                exploring new frameworks, contributing to open-source projects, or sharing 
                knowledge with the developer community.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-800">What I bring to the table:</h4>
              <ul className="space-y-3">
                {[
                  'Strong problem-solving skills and attention to detail',
                  'Experience with modern web technologies and frameworks',
                  'Collaborative mindset and excellent communication skills',
                  'Passion for continuous learning and improvement',
                  'User-centered approach to development',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Let's Work Together
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;