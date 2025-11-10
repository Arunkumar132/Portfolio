import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      rating: 5,
      text: 'Working with Arunkumar was an absolute pleasure. The designs exceeded our expectations and our users love the new interface!',
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager, InnovateCo',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      rating: 5,
      text: 'Exceptional attention to detail and a deep understanding of user needs. The project was delivered on time and within budget.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, DesignHub',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      rating: 5,
      text: 'A true professional who brings both creativity and strategic thinking to every project. Highly recommended!',
    },
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Client <span className="gradient-text">Testimonials</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-12 rounded-2xl relative">
            {/* Testimonial Content */}
            <div className="text-center space-y-6">
              {/* Client Image */}
              <img
                src={current.image}
                alt={current.name}
                className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-primary/30"
              />

              {/* Rating Stars */}
              <div className="flex justify-center gap-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-lg md:text-xl text-foreground leading-relaxed italic">
                "{current.text}"
              </p>

              {/* Client Info */}
              <div>
                <h4 className="text-xl font-semibold gradient-text">
                  {current.name}
                </h4>
                <p className="text-muted-foreground">{current.role}</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={previous}
                className="rounded-full"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="rounded-full"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary w-8'
                      : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
