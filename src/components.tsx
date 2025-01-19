import React from "react";
import { Shield } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  details: string[];
  tech: string[];
  icon: React.ReactNode;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  details, 
  tech, 
  icon 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="ml-2 text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4">
        <h4 className="font-semibold text-gray-700 mb-2">Key Features:</h4>
        <ul className="space-y-2">
          {details.map((detail, idx) => (
            <li key={idx} className="flex items-center text-gray-600">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              {detail}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap gap-2">
        {tech.map((item, idx) => (
          <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

interface SkillsSectionProps {
  category: string;
  items: string[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ category, items }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 capitalize">{category}</h3>
      <div className="space-y-2">
        {items.map((skill, index) => (
          <div key={index} className="flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            <span className="text-gray-600">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

interface CertificationBadgeProps {
  name: string;
  date: string;
}

export const CertificationBadge: React.FC<CertificationBadgeProps> = ({ name, date }) => {
  return (
    <div className="flex items-center bg-blue-700 px-4 py-2 rounded-full">
      <Shield className="w-4 h-4 mr-2" />
      <span>{name}</span>
    </div>
  );
};
