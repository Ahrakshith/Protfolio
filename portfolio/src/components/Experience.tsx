import { Calendar, MapPin, Building, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experience = {
    company: 'LG Soft India',
    position: 'Research Engineer Intern',
    duration: 'September 2024 – April 2025',
    location: 'India',
    type: 'Internship',
    achievements: [
      'Automated audio playback analysis using Python scripts, detecting silent intervals across 15+ languages and generating .txt reports',
      'Reduced QA time and improved Alexa test coverage by 30% through process automation',
      'Built post-processing tools to parse test outputs and compile summary tables, identifying language-wise validation status for different audio modules',
      'Enabled efficient debugging by automating report generation and improving insight into failed cases',
      'Worked in an agile environment, collaborating closely with QA and development teams to resolve complex test cases',
      'Enhanced overall system reliability and test coverage through innovative automation solutions'
    ],
    technologies: ['Python', 'Audio Processing', 'Test Automation', 'Amazon Alexa', 'Agile Development', 'QA Testing']
  };

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-4">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My journey in the tech industry and the impact I've made
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            {/* Company Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  LG
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{experience.position}</h3>
                  <div className="flex items-center gap-2 text-lg text-blue-600 font-semibold">
                    <Building className="w-5 h-5" />
                    {experience.company}
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {experience.duration}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {experience.location}
                </div>
              </div>
            </div>

            {/* Key Achievement Highlight */}
            <div className="bg-white rounded-xl p-6 mb-8 border-l-4 border-blue-500">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Key Impact</h4>
                  <p className="text-gray-600">
                    Reduced QA time and improved Amazon Alexa test coverage by <span className="font-bold text-blue-600">30%</span> through 
                    innovative Python automation solutions across <span className="font-bold text-blue-600">15+ languages</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-6">Key Achievements & Responsibilities</h4>
              <div className="grid gap-4">
                {experience.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Technologies & Skills Applied</h4>
              <div className="flex flex-wrap gap-3">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Professional Summary</h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Aspiring Software Engineer and Python Developer with a solid foundation in Information Science. 
                Experienced in developing scalable solutions and process automation, with hands-on experience 
                enhancing workflows for Amazon Alexa at LG Soft India. Skilled in Python, C++, and cloud technologies, 
                eager to contribute to innovative projects in collaborative environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;