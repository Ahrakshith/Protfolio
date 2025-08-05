const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Python', level: 95, color: 'from-blue-500 to-yellow-500' },
        { name: 'C++', level: 85, color: 'from-blue-600 to-blue-800' },
        { name: 'JavaScript', level: 80, color: 'from-yellow-400 to-yellow-600' },
        { name: 'SQL', level: 85, color: 'from-blue-600 to-blue-800' },
        { name: 'HTML/CSS', level: 90, color: 'from-orange-500 to-red-500' },
      ],
    },
    {
      title: 'Web & API Development',
      skills: [
        { name: 'Flask', level: 90, color: 'from-gray-600 to-gray-800' },
        { name: 'FastAPI', level: 75, color: 'from-green-500 to-green-700' },
        { name: 'REST APIs', level: 85, color: 'from-purple-500 to-purple-700' },
        { name: 'Streamlit', level: 90, color: 'from-red-500 to-red-700' },
        { name: 'React', level: 70, color: 'from-blue-500 to-cyan-500' },
      ],
    },
    {
      title: 'Cloud & Databases',
      skills: [
        { name: 'AWS', level: 80, color: 'from-orange-400 to-orange-600' },
        { name: 'Firebase', level: 85, color: 'from-yellow-500 to-orange-500' },
        { name: 'Google Cloud', level: 80, color: 'from-blue-500 to-green-500' },
        { name: 'MySQL', level: 85, color: 'from-blue-600 to-blue-800' },
        { name: 'SQL Server', level: 75, color: 'from-red-600 to-red-800' },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-4">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* AI & Data Science Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">AI & Data Science</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Machine Learning', 'NLP', 'Scikit-learn', 'Pandas', 'SpaCy', 
              'Data Preprocessing', 'Model Evaluation', 'Multinomial Naive Bayes'
            ].map((tech, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Voice & Audio Processing */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Voice & Audio Processing</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Google Speech-to-Text API', 'gTTS', 'PyQt5', 'pydub', 'Audio Analysis'
            ].map((tech, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Other Tools & Technologies */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-8">Tools & Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Git', 'VS Code', 'Data Structures', 'Algorithms', 'OOP', 
              'Computer Networks', 'OS Concepts', 'TCPDF', 'Bootstrap'
            ].map((tech, index) => (
              <span
                key={index}
                className="bg-white px-4 py-2 rounded-full text-gray-700 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Certifications</h3>
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md mx-auto">
            <div className="text-lg font-semibold text-gray-800 mb-2">REST APIs with Flask and Python</div>
            <div className="text-sm text-gray-600">Professional Certification</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;