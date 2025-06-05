import AnimatedSection from "./AnimatedSection"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fade-right" delay={200}>
            <div>
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-left" delay={400}>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Frontend Developer with 3+ Years Experience</h3>
              <p className="text-gray-700 leading-relaxed">
                I'm a passionate frontend developer with a strong foundation in modern web technologies. I love creating
                intuitive user interfaces and solving complex problems with clean, efficient code.
              </p>
              <p className="text-gray-700 leading-relaxed">
                My journey in web development started with curiosity about how websites work, and it has evolved into a
                career focused on creating exceptional digital experiences. I'm always eager to learn new technologies
                and improve my skills.
              </p>

              <AnimatedSection animation="fade-up" delay={600}>
                <div className="grid grid-cols-2 gap-4 pt-6">
                  <div className="transform hover:scale-105 transition-transform duration-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Experience</h4>
                    <p className="text-gray-600">3+ Years</p>
                  </div>
                  <div className="transform hover:scale-105 transition-transform duration-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Projects</h4>
                    <p className="text-gray-600">50+ Completed</p>
                  </div>
                  <div className="transform hover:scale-105 transition-transform duration-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                    <p className="text-gray-600">San Francisco, CA</p>
                  </div>
                  <div className="transform hover:scale-105 transition-transform duration-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Availability</h4>
                    <p className="text-gray-600">Open to Work</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
