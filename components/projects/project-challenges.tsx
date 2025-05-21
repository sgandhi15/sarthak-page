interface ProjectChallengesProps {
  challenges: string;
}

export default function ProjectChallenges({
  challenges,
}: ProjectChallengesProps) {
  return (
    <div className="mt-8">
      <div className="text-xs text-gray-500 font-space mb-2">
        <span className="code-comment">// project.challenges</span>
      </div>
      <h2 className="text-2xl font-bold mb-4 font-jetbrains">
        Challenges & Solutions
      </h2>
      <div className="prose prose-invert prose-green max-w-none font-space">
        {challenges.split("\n").map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph.trim()}
          </p>
        ))}
      </div>
    </div>
  );
}
