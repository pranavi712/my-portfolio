import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Lightbulb, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Passionate about developing intelligent systems and implementing ML algorithms",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Experience in building end-to-end applications with modern technologies",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Problem Solving",
      description: "Strong analytical skills with focus on data structures and algorithms",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A motivated student with strong problem-solving skills, passionate about software development and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              I'm a dedicated Computer Science student specializing in Internet of Things, 
              with a strong foundation in machine learning, data analysis, and full-stack development. 
              My journey in tech is driven by curiosity and a desire to create impactful solutions.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Currently maintaining a good score while actively working on projects that bridge 
              the gap between theoretical knowledge and real-world applications. I thrive in 
              collaborative environments and am always eager to learn new technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Card key={index} className="p-4 hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0 text-center">
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2 text-sm text-gray-800">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
