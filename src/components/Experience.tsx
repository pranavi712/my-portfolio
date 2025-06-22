
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const experience = {
    title: "Machine Learning Intern",
    company: "Edunet Foundation",
    duration: "February 2025 – March 2025",
    location: "Remote",
    description: "Designed an AI-powered system for automated resume screening and ranking, enhancing hiring efficiency by leveraging NLP and machine learning to evaluate candidate qualifications.",
    achievements: [
      "Developed algorithms to identify key skills and experiences from resumes",
      "Streamlined candidate shortlisting process",
      "Minimized manual recruitment efforts through automation",
      "Implemented NLP techniques for text analysis and processing"
    ],
    skills: ["Natural Language Processing", "Machine Learning", "Data Handling", "Python", "Algorithm Design"]
  };

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building practical solutions through hands-on industry experience
          </p>
        </div>

        <Card className="max-w-4xl mx-auto hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Briefcase className="w-6 h-6 text-primary" />
                  {experience.title}
                </CardTitle>
                <CardDescription className="text-lg font-medium text-primary mt-2">
                  {experience.company}
                </CardDescription>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {experience.duration}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {experience.location}
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              {experience.description}
            </p>

            <div>
              <h4 className="font-semibold mb-3">Key Achievements:</h4>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Technologies & Skills:</h4>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
