import { Briefcase, GraduationCap } from "lucide-react";

const ProfessionalExperience = () => {
  const education = [
    {
      degree: "B.Tech in Artificial Intelligence and Data Science",
      institution: "Coimbatore Institute of Technology",
      duration: "2021 - 2025",
      details:
        "A recent graduate with practical experience in AI, ML and software development. Serving as the Department Secretary with active involvement in innovative AI driven projects.",
    },
    {
      degree: "Higher Secondary Education",
      institution: "RKR Grks Matric Higher Secondary School, Coimbatore",
      duration: "2019 - 2021",
      details:
        "Specialized in Science with a strong foundation in mathematics, programming and logical problem solving.",
    },
  ];

  const experiences = [
    {
      title: "Freelance Software Engineer",
      company: "Self-employed",
      duration: "2024 - Present",
      details:
        "Developed full-stack AI powered applications integrating machine learning and modern web technologies. Delivered custom solutions for clients focusing on intelligent automation and scalability.",
    },
    {
        title: "IoT Engineer Intern",
        company: "Maestro Technologies Pvt Ltd",
        duration: "July 2023 - Aug 2023",
        details:
            "Developed an IoT-based water tank monitoring system that detects dry sump conditions and automatically pumps water to the tank. Worked on hardware software integration using Arduino boards and sensors, enabling efficient and automated water management.",
    },

    {
        title: "Deep Learning Intern",
        company: "MagnusVista Labs Pvt Ltd",
        duration: "Jan 2024 - Jun 2024",
        details:
            "Contributed to innovative deep learning solutions in image classification and text identification. Gained hands on experience in developing and training machine learning models, optimizing performance and implementing end to end data pipelines for real world applications.",
    },

  ];

  return (
    <section id="professional-experience" className="py-20 relative">
      <div className="container mx-auto px-[48px]">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Professional <span className="gradient-text">Experience</span>
        </h2>

        {/* Professional Experience Section */}
        <div className="space-y-10">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-2 gradient-text">
              <Briefcase className="w-6 h-6" /> Work Experience
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-transform"
                >
                  <h4 className="text-xl font-semibold">{exp.title}</h4>
                  <p className="text-muted-foreground text-sm mb-1">
                    {exp.company} | {exp.duration}
                  </p>
                  <p className="text-muted-foreground text-sm">{exp.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-6 pt-10">
            <h3 className="text-2xl font-semibold flex items-center gap-2 gradient-text">
              <GraduationCap className="w-6 h-6" /> Education
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-transform"
                >
                  <h4 className="text-xl font-semibold">{edu.degree}</h4>
                  <p className="text-muted-foreground text-sm mb-1">
                    {edu.institution} | {edu.duration}
                  </p>
                  <p className="text-muted-foreground text-sm">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;
