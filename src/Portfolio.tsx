import React from 'react';
import { Cloud, Server, Sun, Github, Linkedin } from 'lucide-react';
import { ProjectCard, SkillsSection, CertificationBadge } from './components';
import { projects, skills, certifications } from './data';

const Portfolio = () => {
  // Map icon strings to components
  const getIcon = (iconName: string) => {
    const icons = {
      Server: <Server className="w-6 h-6 text-blue-500" />,
      Sun: <Sun className="w-6 h-6 text-blue-500" />,
      Cloud: <Cloud className="w-6 h-6 text-blue-500" />
    };
    return icons[iconName] || <Server className="w-6 h-6 text-blue-500" />;
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Jack</h1>
            <h2 className="text-3xl font-bold mb-6">Infrastructure & Cloud Engineer</h2>
            <p className="text-xl mb-8">Building and maintaining scalable infrastructure solutions with expertise in AWS, networking, and systems administration</p>
            <div className="flex justify-center flex-wrap gap-4">
              {certifications.map((cert, index) => (
                <CertificationBadge key={index} {...cert} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Technical Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              icon={getIcon(project.icon)}
            />
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <SkillsSection
                key={category}
                category={category}
                items={items}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Professional Links */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Connect</h2>
          <div className="flex justify-center space-x-6">
            <a href="#linkedin" className="flex items-center text-gray-600 hover:text-blue-600">
              <Linkedin className="w-6 h-6 mr-2" />
              <span>LinkedIn</span>
            </a>
            <a href="#github" className="flex items-center text-gray-600 hover:text-blue-600">
              <Github className="w-6 h-6 mr-2" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
