interface ProjectFeaturesProps {
  features: string[];
}

export default function ProjectFeatures({ features }: ProjectFeaturesProps) {
  return (
    <div className="mt-8">
      <div className="text-xs text-gray-500 font-space mb-2">
        <span className="code-comment">// project.features</span>
      </div>
      <h2 className="text-2xl font-bold mb-4 font-jetbrains">Key Features</h2>
      <ul className="space-y-2 list-disc list-inside">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-300">
            <span className="text-green-400">›</span> {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
