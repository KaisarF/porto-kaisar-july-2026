'use client';
// import ScrollStack,{ScrollStackItem} from "@/components/ScrollStack";

import { useState } from 'react';

interface Experience {
  id: string;
  title: string;
  company?: string;
  link?:string; 
  repo?: string;       
  period: string; 
  description: string[];
  technologies?: string[];
  images?: string[];
}

interface ExperienceTabsProps {
  trainings: Experience[];
  internships: Experience[];
  projects: Experience[];
}

export default function ExperienceTabs({
  trainings,
  internships,
  projects,
}: ExperienceTabsProps) {
  const [activeTab, setActiveTab] = useState<'trn' | 'intern' | 'project'>('trn');

  const getTabs = () => {
    switch (activeTab) {
      case 'intern':
        return internships;
      case 'project':
        return projects;
      default:
        return trainings;
    }
  };

  const currentData = getTabs();

  return (
    <section
      id="experience"
      className="py-20 px-4 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
          Pengalaman & Proyek
        </h2>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button
            onClick={() => setActiveTab('trn')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'trn'
                ? 'bg-accent text-accent-foreground shadow-lg'
                : 'bg-secondary text-secondary-foreground hover:bg-muted'
            }`}
          >
            Pelatihan
          </button>
          <button
            onClick={() => setActiveTab('intern')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'intern'
                ? 'bg-accent text-accent-foreground shadow-lg'
                : 'bg-secondary text-secondary-foreground hover:bg-muted'
            }`}
          >
            Pengalaman Kerja
          </button>
          <button
            onClick={() => setActiveTab('project')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'project'
                ? 'bg-accent text-accent-foreground shadow-lg'
                : 'bg-secondary text-secondary-foreground hover:bg-muted'
            }`}
          >
            Proyek
          </button>
        </div>

        {/* Experience Cards */}
        <div className="grid gap-6 max-h-150 overflow-scroll">
          
          {currentData.map((item) => (
            
            <div
              className="bg-card border border-border rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow"
              key={item.id}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  {activeTab === 'project' ? (
                    <div className="flex flex-col ">
                      <p className="font-semibold text-lg text-stone-900">
                          {item.company}
                        </p>
                      <p className="font-semibold text-lg text-stone-900">
                        <a href={item.repo} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                          Lihat Repository →
                        </a>
                      </p>
                      <p className="font-semibold text-lg text-stone-900">
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        Lihat Demo →
                      </a>
                      </p>
                    </div>

                      ) : (
                        <p className="font-semibold text-lg text-stone-900">
                          {item.company}
                        </p>
                      )}
                </div>
                <span className="text-muted-foreground font-medium whitespace-nowrap">
                  {item.period}
                </span>
              </div>

              <ul className="space-y-2 mb-4">
                {item.description.map((desc, idx) => (
                  <li key={idx} className="text-muted-foreground flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              {item.technologies && item.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              {item.images && item.images.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {item.images.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
            
          ))}
          
        </div>
      </div>
    </section>
  );
}
