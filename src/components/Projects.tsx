
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Vehicle Speed Estimation",
      description: "Real-time vehicle speed estimation system using Lucas-Kanade optical flow algorithm in Python with OpenCV for traffic management and law enforcement applications.",
      technologies: ["Python", "OpenCV", "Computer Vision", "Data Analysis"],
      githubUrl: "https://github.com/pranavi712/Vehicle-Speed-Estimation-using-Open-CV-Python",
      highlights: ["Real-time processing", "Advanced computer vision", "Traffic safety monitoring"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Iceberg Detection using Deep Learning",
      description: "Automated iceberg detection system using satellite imagery and CNNs, enhancing maritime safety and environmental monitoring capabilities.",
      technologies: ["Python", "CNN", "Deep Learning", "Transfer Learning"],
      githubUrl: "https://github.com/pranavi712/Iceberg-detection",
      highlights: ["CNN architecture optimization", "Data augmentation", "Maritime safety"],
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "E-commerce Website",
      description: "Full-stack e-commerce platform with comprehensive shopping features, user management, and secure payment integration.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      githubUrl: "https://github.com/pranavi712/E-Commerce-Website",
      highlights: ["Full-stack development", "Database design", "User authentication"],
      gradient: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing innovative solutions in AI, computer vision, and web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/90 backdrop-blur overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed text-gray-600">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs bg-gray-100 text-gray-700 hover:bg-gray-200">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-gray-800">Key Highlights:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient}`}></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="default" 
                    size="sm" 
                    className={`flex-1 bg-gradient-to-r ${project.gradient} hover:opacity-90`}
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
