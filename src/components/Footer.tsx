import { Linkedin, Github, Mail, Instagram, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/10"
              asChild
            >
              <a href="https://www.linkedin.com/in/arunkumar-m-763000254" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/10"
              asChild
            >
              <a href="https://github.com/Arunkumar132" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/10"
              asChild
            >
              <a href="mailto:arun132003@gmail.com">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/10"
              asChild
            >
              <a href="https://www.instagram.com/_arun._.kumar._official?igsh=MWQwb3QzYzdwY3N0cw==" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-2">
          </p>
          <p className="text-xs text-muted-foreground">
            © 2024 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
