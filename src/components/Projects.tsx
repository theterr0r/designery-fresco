import { Image } from "lucide-react";

const projects = [
  {
    title: "Brand Evolution",
    description: "Complete rebrand for a tech startup",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    title: "Visual Identity",
    description: "Modern identity design for retail chain",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
  {
    title: "Digital Presence",
    description: "Digital brand transformation",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
  },
];

export const Projects = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};