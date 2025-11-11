import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile.png';

const About = () => {
  const skills = [
    { name: 'Machine Learning', level: 88 },
    { name: 'Deep Learning', level: 85 },
    { name: 'Python', level: 92 },
    { name: 'TensorFlow', level: 85 },
    { name: 'Web Development', level: 90 },
    { name: 'App Development', level: 80 },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="glass-card p-8 rounded-2xl">
              <img
                src={profileImage}
                alt="About Me"
                className="w-full rounded-xl object-cover"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold gradient-text">
                Freelance Software Engineer
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                With 1+ years of experience in freelance software engineering, I specialize in building 
                intelligent applications powered by AI and machine learning. My expertise spans 
                from developing ML models to creating full-stack applications that solve real-world 
                problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I focus on leveraging cutting-edge AI technologies to build scalable solutions, 
                while also crafting beautiful and intuitive user interfaces for web and mobile 
                applications.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4 pt-4">
              <h4 className="text-xl font-semibold">Skills & Expertise</h4>
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full gradient-primary transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Download CV Button */}
            <a
              href="/Arunkumar_Resume.pdf"
              download="Arunkumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="gradient-primary rounded-full hover:scale-105 transition-transform mt-8"
              >
                <Download className="mr-2 w-4 h-4" />
                Download CV
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
