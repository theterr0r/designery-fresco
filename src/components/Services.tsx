import { Palette, Award, Star } from "lucide-react";

const services = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Brand Design",
    description: "Creating unique and memorable brand identities that stand out in the market.",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Rebranding",
    description: "Transforming existing brands to meet modern market demands and expectations.",
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Brand Strategy",
    description: "Developing comprehensive brand strategies that drive business growth.",
  },
];

export const Services = () => {
  return (
    <div className="py-20 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};