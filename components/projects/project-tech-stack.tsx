import { Code, Server, Database, Layers } from "lucide-react";

interface TechStack {
  frontend?: string[];
  backend?: string[];
  database?: string[];
  deployment?: string[];
  storage?: string[];
  content?: string[];
  testing?: string[];
  styling?: string[];
  tools?: string[];
  security?: string[];
  ui?: string[];
  hooks?: string[];
  apis?: string[];
}

interface ProjectTechStackProps {
  techStack: TechStack;
}

export default function ProjectTechStack({ techStack }: ProjectTechStackProps) {
  return (
    <div className="mt-8">
      <div className="text-xs text-gray-500 font-space mb-2">
        <span className="code-comment">// project.techStack</span>
      </div>
      <h2 className="text-2xl font-bold mb-4 font-jetbrains">
        Technologies Used
      </h2>
      <div className="space-y-6">
        {techStack.frontend && (
          <div>
            <div className="flex items-center mb-2">
              <Code className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-sm font-bold">Frontend</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.frontend.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {techStack.backend && (
          <div>
            <div className="flex items-center mb-2">
              <Server className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-sm font-bold">Backend</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.backend.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {techStack.database && (
          <div>
            <div className="flex items-center mb-2">
              <Database className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-sm font-bold">Database</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.database.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {techStack.deployment && (
          <div>
            <div className="flex items-center mb-2">
              <Layers className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-sm font-bold">Deployment</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.deployment.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {techStack.storage && (
          <div>
            <div className="flex items-center mb-2">
              <Database className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-sm font-bold">Storage</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.storage.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {techStack.content && (
          <div>
            <div className="flex items-center mb-2">
              <Code className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-sm font-bold">Content</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.content.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {techStack.testing && (
          <div>
            <div className="flex items-center mb-2">
              <Code className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-sm font-bold">Testing</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.testing.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {techStack.styling && (
          <div>
            <div className="flex items-center mb-2">
              <Code className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-sm font-bold">Styling</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.styling.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {techStack.tools && (
          <div>
            <div className="flex items-center mb-2">
              <Code className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-sm font-bold">Tools</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.tools.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {techStack.security && (
          <div>
            <div className="flex items-center mb-2">
              <Code className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-sm font-bold">Security</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.security.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {techStack.ui && (
          <div>
            <div className="flex items-center mb-2">
              <Code className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-sm font-bold">UI</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.ui.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {techStack.hooks && (
          <div>
            <div className="flex items-center mb-2">
              <Code className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-sm font-bold">Hooks</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.hooks.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {techStack.apis && (
          <div>
            <div className="flex items-center mb-2">
              <Code className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-sm font-bold">APIs</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.apis.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs bg-[#232323] text-green-400 px-2 py-1 font-space"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
