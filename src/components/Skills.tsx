
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Brain, Wrench, Globe, Award } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Java", "Python", "JavaScript"]
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: ["HTML", "CSS", "PHP", "React"]
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["MySQL", "SQL"]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      skills: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "Big Data"]
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      skills: ["Git & GitHub", "PowerBI", "OpenCV", "Linux"]
    },
    {
      icon: Award,
      title: "Core Subjects",
      skills: ["Data Structures & Algorithms", "OOPs Concepts", "Operating Systems"]
    }
  ];

  const interests = [
    "Video Editing",
    "Exploring new Technologies",
    "Solving Sudoku",
    "Rubik's Cube"
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technical proficiencies and areas of specialization
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <category.icon className="w-5 h-5 text-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interests Section */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center flex items-center justify-center gap-3">
              <Award className="w-5 h-5 text-primary" />
              Interests & Hobbies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-3">
              {interests.map((interest) => (
                <Badge key={interest} variant="secondary" className="text-sm">
                  {interest}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
