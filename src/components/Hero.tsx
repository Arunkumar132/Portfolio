import { Button } from '@/components/ui/button';
import { Linkedin, Github, Mail, Instagram, ChevronDown } from 'lucide-react';
import profileImage from '@/assets/profile1.png';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in-up">
          {/* Profile Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-50 animate-glow" />
            <img
              src={profileImage}
              alt="Profile"
              className="relative w-48 h-48 rounded-full object-cover border-4 border-primary/30 animate-float"
            />
          </div>

          {/* Title and Description */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              Hi, I'm <span className="gradient-text">Arunkumar M</span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-light">
              Software Engineer | 1+ Years Experience in Freelancing
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building intelligent applications with AI and machine learning. 
              Specializing in creating innovative solutions that solve real-world problems.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/10 hover:scale-110 transition-transform"
              asChild
            >
              <a href="https://www.linkedin.com/in/arunkumar-m-763000254" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/10 hover:scale-110 transition-transform"
              asChild
            >
              <a href="https://github.com/Arunkumar132" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/10 hover:scale-110 transition-transform"
              asChild
            >
              <a href="mailto:arun132003@gmail.com">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/10 hover:scale-110 transition-transform"
              asChild
            >
              <a href="https://www.instagram.com/_arun._.kumar._official?igsh=MWQwb3QzYzdwY3N0cw==" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* CTA Button */}
          <Button
            onClick={scrollToContact}
            size="lg"
            className="gradient-primary text-lg px-8 py-6 rounded-full hover:scale-105 transition-transform"
          >
            Get In Touch
          </Button>

        </div>
      </div>
    </section>
  );
};

export default Hero;
