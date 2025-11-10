import { Brain, Code, Smartphone, Layout } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Building intelligent systems using machine learning and deep learning to solve complex problems and automate tasks.',
    },
    {
      icon: Code,
      title: 'Machine Learning',
      description: 'Developing predictive models and data-driven solutions using TensorFlow, PyTorch and modern ML frameworks.',
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Creating mobile applications with beautiful interfaces, smooth performance and intelligent features.',
    },
    {
      icon: Layout,
      title: 'Web Development',
      description: 'Building responsive, modern web applications with clean code and exceptional user experiences.',
    },
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="gradient-text">Services</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300 group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mb-6 group-hover:animate-glow">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 gradient-text">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
