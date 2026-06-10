
interface TechStackProps {
  technologies: string[];
}

export default function TechStack({ technologies }: TechStackProps) {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
          Tech Stack
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg hover:border-accent transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-center h-16 mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-accent">
                  {tech.split(' ')[0]}
                </span>
              </div>
              <p className="text-foreground font-semibold text-sm md:text-base">
                {tech}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
