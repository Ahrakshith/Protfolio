import { ExternalLink, Github, Mic, Hospital, Shield, TrendingUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Bilingual Voice-Enabled Medication Adherence Platform',
      description: 'Engineered a voice-enabled bilingual platform (English/Kannada) using React and Firebase, streamlining patient symptom logging via audio/text, aiding accessibility in rural healthcare.',
      achievements: [
        'Boosted medication adherence by 85% and reduced hospital readmissions by 15%',
        'Real-time symptom tracking and automated medication alerts',
        'Integrated secure auth & scalable cloud storage using Firebase and GCP',
        'Facilitated 24/7 doctor-patient data access and improved rural outreach'
      ],
      technologies: ['React', 'Firebase', 'Google Cloud Platform', 'Voice Recognition', 'Bilingual Support', 'Healthcare'],
      icon: Mic,
      gradient: 'from-green-500 to-blue-500',
      impact: '85% adherence boost',
    },
    {
      title: 'Hospital Management System',
      description: 'Architected a full-stack system with PHP, MySQL, JavaScript, HTML5, CSS3, and Bootstrap, streamlining patient, doctor, and admin workflows.',
      achievements: [
        'Implemented appointment booking and patient registration systems',
        'Created comprehensive dashboard functionalities for all user types',
        'Implemented secure login and dynamic search features',
        'Enabled PDF generation of reports using TCPDF',
        'Improved operational efficiency across healthcare workflows'
      ],
      technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'TCPDF'],
      icon: Hospital,
      gradient: 'from-blue-500 to-purple-500',
      impact: 'Full-stack solution',
    },
    {
      title: 'Spam Email Detection System',
      description: 'Developed a spam detection engine using Multinomial Naive Bayes, achieving 95% accuracy on 5,000+ emails through optimized NLP pipelines.',
      achievements: [
        'Achieved 95% accuracy on 5,000+ email dataset',
        'Enhanced model performance with custom preprocessing using SpaCy and CountVectorizer',
        'Improved token quality and reduced false positives',
        'Designed interactive Streamlit frontend for real-time predictions',
        'Enabled real-time input, prediction, and visualization of spam classification results'
      ],
      technologies: ['Python', 'Multinomial Naive Bayes', 'NLP', 'SpaCy', 'CountVectorizer', 'Streamlit', 'Scikit-learn'],
      icon: Shield,
      gradient: 'from-red-500 to-pink-500',
      impact: '95% accuracy',
    },
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my key projects that showcase my technical skills and problem-solving abilities
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] overflow-hidden"
            >
              <div className="p-8">
                {/* Project Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex items-start gap-4 mb-4 md:mb-0">
                    <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                      <project.icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                      {project.impact}
                    </span>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Achievements</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {project.achievements.map((achievement, achievementIndex) => (
                      <div
                        key={achievementIndex}
                        className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm leading-relaxed">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`bg-gradient-to-r ${project.gradient} text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </button>
                  <button className="flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300">
                    <Github className="w-4 h-4" />
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Interested in My Work?</h3>
            <p className="text-gray-600 mb-6">
              I'm always excited to work on new projects and collaborate with fellow developers. 
              Let's build something amazing together!
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;