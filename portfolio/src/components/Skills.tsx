const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90, color: 'from-blue-500 to-cyan-500' },
        { name: 'Next.js', level: 85, color: 'from-gray-700 to-gray-900' },
        { name: 'TypeScript', level: 80, color: 'from-blue-600 to-blue-800' },
        { name: 'Tailwind CSS', level: 95, color: 'from-teal-500 to-cyan-600' },
        { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-yellow-600' },
        { name: 'HTML/CSS', level: 95, color: 'from-orange-500 to-red-500' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85, color: 'from-green-500 to-green-700' },
        { name: 'Express.js', level: 80, color: 'from-gray-600 to-gray-800' },
        { name: 'Python', level: 75, color: 'from-blue-500 to-yellow-500' },
        { name: 'MongoDB', level: 80, color: 'from-green-600 to-green-800' },
        { name: 'PostgreSQL', level: 70, color: 'from-blue-600 to-blue-800' },
        { name: 'REST APIs', level: 90, color: 'from-purple-500 to-purple-700' },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90, color: 'from-orange-500 to-red-600' },
        { name: 'Docker', level: 70, color: 'from-blue-500 to-blue-700' },
        { name: 'AWS', level: 65, color: 'from-orange-400 to-orange-600' },
        { name: 'Figma', level: 80, color: 'from-purple-500 to-pink-500' },
        { name: 'Jest', level: 75, color: 'from-red-500 to-red-700' },
        { name: 'GraphQL', level: 60, color: 'from-pink-500 to-purple-600' },
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* Additional Skills Pills */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-8">Also familiar with</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Redux', 'Vue.js', 'Angular', 'Firebase', 'Vercel', 'Netlify',
              'Stripe', 'Socket.io', 'Prisma', 'Sass', 'Webpack', 'Vite',
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
      </div>
    </section>
  );
};

export default Skills;