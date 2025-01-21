import { Image } from "lucide-react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

const projects = [
  {
    title: "Brand Evolution",
    description: "Complete rebrand for a tech startup, including new visual identity, logo design, and brand guidelines that reflect their innovative spirit.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: "Branding",
  },
  {
    title: "Visual Identity",
    description: "Modern identity design for retail chain, encompassing storefront design, packaging, and digital presence.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    category: "Identity Design",
  },
  {
    title: "Digital Presence",
    description: "Digital brand transformation including website redesign, social media templates, and digital marketing assets.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    category: "Digital Design",
  },
  {
    title: "Corporate Rebranding",
    description: "Full corporate rebranding project with new logo, color palette, and communication materials.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    category: "Rebranding",
  },
  {
    title: "Brand Strategy",
    description: "Strategic brand positioning and visual identity for an emerging fintech company.",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    category: "Strategy",
  },
  {
    title: "Brand Guidelines",
    description: "Comprehensive brand guidelines and design system for a global education platform.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    category: "Guidelines",
  },
];

export const Projects = () => {
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardContent className="p-0">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-sm font-medium text-primary mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-200">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};