import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Real Time Collab Tool",
    description: "A MERN stack real time collab tool",
    image: "path/to/image1.jpg",
    link: "https://github.com/SaketJaiswal07/Real-Time-Collaboration-Tool",
  },
  {
    title: "Event Organizer",
    description: "A Event Organizer App",
    image: "path/to/image2.jpg",
    link: "https://github.com/SaketJaiswal07/Event-Organizer",
  },
  {
    title: "Training and Placement Portal",
    description: "A portal for placements using MERN",
    image: "path/to/image3.jpg",
    link: "https://github.com/SaketJaiswal07/TnP_Portal",
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="p-6 bg-gray-800 text-white text-center">
        <h1 className="text-4xl font-bold">Saket Kumar Jaiswal's Portfolio</h1>
        <p className="text-lg mt-2">Full-Stack Web Developer | MERN Stack </p>
      </header>

      <main className="p-4 sm:p-6 lg:p-8">
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Projects</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm sm:text-base mb-4">{project.description}</p>
                    <Button asChild variant="outline">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center py-4">
        <p className="text-sm sm:text-base">&copy; 2025 Saket Kumar Jaiswal. All rights reserved.</p>
        <p className="text-sm sm:text-base">
          Follow me on{" "}
          <a
            href="https://github.com/SaketJaiswal07"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          ,{" "}
          <a
            href="https://www.linkedin.com/in/saket-kumar-jaiswal-abc07/"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
