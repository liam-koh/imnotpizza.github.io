"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import AnimatedSection from "./AnimatedSection"

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const projectsRef = useRef<HTMLDivElement>(null)

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform built with React, Next.js, and Stripe integration. Features include product catalog, shopping cart, and secure checkout.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities with beautiful data visualizations.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Chart.js", "OpenWeather API", "CSS3"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing my work and skills. Built with performance and accessibility in mind.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Social Media Dashboard",
      description:
        "A comprehensive social media analytics dashboard with data visualization, user engagement metrics, and content management features.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "D3.js", "Node.js", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Recipe Finder App",
      description:
        "A recipe discovery app that helps users find recipes based on ingredients they have. Features include meal planning and shopping lists.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React Native", "Expo", "Firebase", "Spoonacular API"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (projectsRef.current) {
      observer.observe(projectsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience in frontend development.
            </p>
          </div>
        </AnimatedSection>

        <div
          ref={projectsRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children ${isVisible ? "animate" : ""}`}
        >
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
            >
              <div className="aspect-video bg-gray-200 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full hover:bg-blue-200 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild className="transform hover:scale-105 transition-transform duration-200">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="transform hover:scale-105 transition-transform duration-200"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1 h-3 w-3" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
