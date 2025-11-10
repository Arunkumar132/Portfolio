import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import project1 from '@/assets/project1.png';
import project2 from '@/assets/project2.png';
import project3 from '@/assets/project3.jpg';

const Projects = () => {
  const projects = [
    {
      image: project1,
      title: 'Book Recommendation System',
      description: 'Built a book recommendation system using KNN-based collaborative filtering and deployed it on Streamlit for real-time suggestions.',
      tags: ['Python', 'Pandas', 'Scikit-Learn', 'Streamlit'],
      github: 'https://github.com/Arunkumar132/Book_Recommandation_System',
      demo: '', 
    },
    {
      image: project2,
      title: 'GenDB - Text to SQL Tool',
      description: 'AI tool that converts natural language queries to SQL using Gemini Pro API, enabling easy database interaction without SQL knowledge.',
      tags: ['AI', 'NLP', 'Streamlit', 'Python'],
      github: 'https://github.com/Arunkumar132/GenDB',
      demo: '',
    },
    {
      image: project3,
      title: 'Construction Company Website',
      description: 'Developed a responsive and modern website for a construction firm to showcase projects and services.',
      tags: ['HTML', 'CSS', 'JavaScript', 'React'],
      github: 'https://github.com/Arunkumar132/Builder_website.git',
      demo: '',
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  {project.github && (
                    <Button
                      size="lg"
                      className="gradient-primary rounded-full"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 w-4 h-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      size="lg"
                      className="gradient-primary rounded-full"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 w-4 h-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold gradient-text">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
