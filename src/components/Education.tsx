
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      institution: "Jain University",
      specialization: "Computer Science Engineering with Internet of Things",
      duration: "2022 - 2026",
      status: "Currently Pursuing"
    },
    {
      degree: "Intermediate (12th Grade)",
      institution: "Sri Chaitanya Junior College",
      specialization: "Mathematics, Physics, Chemistry (MPC)",
      duration: "2020 - 2022",
      status: "Completed"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Strong academic foundation with excellent performance
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary mt-1">
                        {edu.institution}
                      </CardDescription>
                      <p className="text-muted-foreground mt-2">{edu.specialization}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      {edu.duration}
                    </div>
                    <Badge variant="outline" className="mb-2">
                      {edu.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
