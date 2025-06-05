"use client"

import { useEffect, useRef, useState } from "react"
import AnimatedSection from "./AnimatedSection"

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const skillsRef = useRef<HTMLDivElement>(null)

  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "JavaScript", level: 95 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
      ],
    },
    {
      title: "Styling & Design",
      skills: [
        { name: "Tailwind CSS", level: 90 },
        { name: "Sass/SCSS", level: 85 },
        { name: "Styled Components", level: 80 },
        { name: "Figma", level: 75 },
        { name: "Adobe XD", level: 70 },
        { name: "Responsive Design", level: 95 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 85 },
        { name: "Webpack", level: 75 },
        { name: "Vite", level: 80 },
        { name: "Jest", level: 70 },
        { name: "Node.js", level: 65 },
        { name: "MongoDB", level: 60 },
      ],
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
        </AnimatedSection>

        <div ref={skillsRef} className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection key={categoryIndex} animation="fade-up" delay={categoryIndex * 200}>
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
