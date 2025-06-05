import { Github, Linkedin, Mail, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedSection from "./AnimatedSection"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection animation="fade-down" delay={200}>
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-blue-600">Alex Johnson</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={400}>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8">Frontend Developer & UI/UX Enthusiast</p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={600}>
            <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
              I create beautiful, responsive web applications with modern technologies. Passionate about clean code,
              user experience, and bringing ideas to life.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="scale-up" delay={800}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-transform duration-200"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="transform hover:scale-105 transition-transform duration-200"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={1000}>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com"
                className="text-gray-600 hover:text-blue-600 transition-all duration-200 transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-600 hover:text-blue-600 transition-all duration-200 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:alex@example.com"
                className="text-gray-600 hover:text-blue-600 transition-all duration-200 transform hover:scale-110"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
