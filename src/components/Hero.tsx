
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Challa Pranavi
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-6 font-medium">
            Machine Learning Engineer & Software Developer
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Passionate about AI, computer vision, and innovative software solutions. 
            Currently pursuing B.Tech in CSE with IoT at Jain University.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a
  href="https://drive.google.com/file/d/1843DRdvB3kJ6Qiidm4A_wsr6FKxwa8Bj/view?usp=sharing" // Replace with your actual file path or URL
  download // Optional: prompts download instead of opening
  target="_blank" // Optional: opens in a new tab
  rel="noopener noreferrer"
>
  <Button variant="outline" size="lg" className="border-2 border-purple-200 text-purple-700 hover:bg-purple-50">
    <Download className="w-4 h-4 mr-2" />
    Download Resume
  </Button>
</a>

        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-purple-600" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
