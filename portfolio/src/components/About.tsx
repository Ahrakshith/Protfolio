import { User, Award, Coffee, Heart, GraduationCap, MapPin } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: GraduationCap, label: 'CGPA', value: '8.26' },
    { icon: Coffee, label: 'Projects Completed', value: '10+' },
    { icon: Award, label: 'Internship', value: 'LG Soft' },
    { icon: User, label: 'Languages Known', value: '3' },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know more about who I am, my education, and what drives me as a developer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Stats */}
          <div className="space-y-8">
            <div className="relative">
              <div className="w-full max-w-md mx-auto aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-6xl font-bold text-gray-400">
                Rakshith A H
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm text-center">
                Research<br/>Engineer
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
                Aspiring Software Engineer with a passion for innovation
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                I'm currently pursuing my Bachelor of Engineering in Information Science at JSS Science and Technology University (Formerly SJCE), Mysore, with a CGPA of 8.26. My journey in technology started with curiosity and has evolved into a passion for developing scalable solutions and process automation.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Currently working as a Research Engineer Intern at LG Soft India, where I've automated audio playback analysis using Python scripts and enhanced workflows for Amazon Alexa. I've reduced QA time and improved test coverage by 30% through innovative automation solutions.
              </p>
            </div>

            {/* Education Section */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                Education
              </h4>
              <div className="space-y-3">
                <div>
                  <div className="font-semibold text-gray-800">Bachelor of Engineering - Information Science</div>
                  <div className="text-sm text-gray-600">JSS Science and Technology University, Mysore</div>
                  <div className="text-sm text-blue-600">2021-2025 • CGPA: 8.26</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">State Board - PCMB</div>
                  <div className="text-sm text-gray-600">Vivekananda PU College, Nehru Nagar Putttur</div>
                  <div className="text-sm text-blue-600">2019-2021 • 90%</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-800">What I bring to the table:</h4>
              <ul className="space-y-3">
                {[
                  'Strong foundation in Python, C++, and JavaScript programming',
                  'Experience with cloud technologies (AWS, Firebase, GCP)',
                  'Proven ability to automate processes and improve efficiency',
                  'Collaborative mindset with agile development experience',
                  'Multilingual communication (English, Kannada, Tulu)',
                  'Passion for AI/ML, NLP, and data analysis',
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
                Let's Collaborate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;