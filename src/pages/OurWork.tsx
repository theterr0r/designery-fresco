import { Projects } from "@/components/Projects";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const OurWork = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="container px-4 py-8">
        <div className="flex items-center mb-8">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-5xl font-bold mb-4 animate-fade-up">Our Work</h1>
          <p className="text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "100ms" }}>
            Explore our portfolio of successful brand transformations and creative solutions.
          </p>
        </div>
        <Projects />
      </div>
    </main>
  );
};

export default OurWork;