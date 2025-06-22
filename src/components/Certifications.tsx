
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Download, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "AI and Machine Learning",
      issuer: "IBM",
      description: "Comprehensive certification covering machine learning algorithms, neural networks, and AI implementation strategies.",
      date: "2024",
      credentialUrl: "https://drive.google.com/drive/folders/18Y0nWDamJJp2eaEGJuxFEzmsANwtnrII?usp=sharing",
      skills: ["Machine Learning", "Neural Networks", "AI Implementation", "Data Science"]
    },
    {
      title: "Web Development Fundamentals",
      issuer: "IBM",
      description: "Foundation course covering modern web development practices, frameworks, and best practices for building scalable applications.",
      date: "2024",
      credentialUrl: "https://drive.google.com/file/d/19uycnNYpRq77x4kwyVOSjdQUTIH2I8dW/view?usp=sharing",
      skills: ["HTML", "CSS", "JavaScript", "Web Frameworks"]
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte Australia (Forage)",
      description: "Practical data analytics simulation focusing on real-world business scenarios and data-driven decision making.",
      date: "February 2025",
      credentialUrl: "#",
      skills: ["Data Analytics", "Business Intelligence", "Data Visualization", "PowerBI"]
    },
    {
      title: "Operating Systems Basics",
      issuer: "CISCO",
      description: "Fundamental concepts of operating systems, Linux administration, and system optimization techniques.",
      date: "2024",
      credentialUrl: "#",
      skills: ["Linux", "System Administration", "OS Concepts", "Network Fundamentals"]
    }
  ];

  const achievements = [
    "1st Prize in National Mathematics Olympiad",
    "1st Prize in National English Olympiad"
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Certifications & Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and academic achievements demonstrating continuous learning
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{cert.title}</CardTitle>
                      <CardDescription className="font-medium text-primary">
                        {cert.issuer} • {cert.date}
                      </CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                {cert.credentialUrl !== "#" && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.open(cert.credentialUrl, '_blank')}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    View Certificate
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6">Academic Achievements</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
