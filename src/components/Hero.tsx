import { Brush } from "lucide-react";

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-up">
            <div className="flex items-center justify-center mb-6">
              <Brush className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              We Create Brands That Leave a Mark
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Transform your vision into a powerful brand identity that resonates with your audience
            </p>
            <button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors">
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};