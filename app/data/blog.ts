export interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
  content: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Why Soft Skills are the Secret Sauce for Software Developers",
    excerpt:
      "Discover why soft skills are crucial for software developers and how they can enhance your career success.",
    image: "/blog-imgs/soft-skills/blog-head.png",
    date: "January 3, 2025",
    readTime: "8 min read",
    tags: [
      "Soft Skills",
      "Communication",
      "Teamwork",
      "Time Management",
      "Adaptability",
      "Emotional Intelligence",
      "Negotiation",
    ],
    slug: "why-soft-skills-are-the-secret-sauce-for-software-developers",
    content: `
<h1>Why Soft Skills are the Secret Sauce for Software Developers</h1>

<h2>Introduction: The Power Behind the Code</h2>
<p>In software development, it's easy to focus on the technical side: coding, frameworks, algorithms. But in reality, <strong>soft skills</strong>—communication, collaboration, and adaptability—are just as crucial. Think of them like the seasoning in a good stew: essential, but often overlooked.</p>
<p>In places like Newfoundland, we know the importance of community, adapting to change, and rolling with the punches. The same principles apply to being a great developer. Let's dive into why soft skills are key to success, whether you're working remotely or in the heart of a bustling tech hub.</p>
<hr />

<h2>1. Communication Skills: More Than Just "How's It Going?"</h2>
<p>Good communication is at the heart of any great project. Whether you're explaining a bug to your team, presenting a solution to a client, or even documenting your code, the ability to clearly articulate ideas is essential. It's like explaining the perfect recipe—if you're too technical, people get lost. But when you break things down simply, everyone gets it. Clear communication helps you save time, avoid confusion, and make sure everyone's on the same page.</p>
<p><img src="/blog-imgs/soft-skills/luigi-communication.gif" alt="Communication" /></p>
<hr />

<h2>2. Teamwork: Because "Together" is Always Better</h2>
<p>In tech, you're rarely ever alone. <strong>Teamwork</strong> is what transforms individual contributions into something greater. Whether you're working with other developers, designers, or product managers, collaboration is key to building solid solutions. It's like building a cabin together—each person has a vital role, and when everyone pitches in, you get a stronger end product.</p>
<p><img src="/blog-imgs/soft-skills/teamwork.gif" alt="Teamwork" /></p>
<hr />

<h2>3. Time Management: Avoiding the "Last-Minute Scramble"</h2>
<p>Time management in software development is crucial. Whether you're working on a project with tight deadlines or balancing multiple tasks, keeping track of your time can make or break a project. Use tools like Trello, Jira, or even a simple to-do list to stay on top of your work. It's like managing a fishing trip: if you don't plan ahead, things can get chaotic. But when you know when to cast your line, you catch the biggest fish.</p>
<ul>
  <li>Plan ahead to avoid chaos</li>
  <li>Use tools like Trello, Jira, or to-do lists</li>
  <li>Know when to act for best results</li>
</ul>
<p><img src="/blog-imgs/soft-skills/late-busy.gif" alt="Time Management" /></p>
<hr />

<h2>4. Adaptability: Rolling with the Punches</h2>
<p>The tech world evolves faster than the weather in Newfoundland. One day you're working in one framework, the next you're learning something entirely new. Being <strong>adaptable</strong> is key to staying relevant. Embrace change, learn on the fly, and don't be afraid to pivot when necessary. It's like being prepared for a sudden rainstorm—stay flexible, and you'll be able to weather any storm.</p>
<ul>
  <li>Embrace change and learning</li>
  <li>Stay flexible to handle surprises</li>
  <li>Adapt to new technologies quickly</li>
</ul>
<p><img src="/blog-imgs/soft-skills/moocat-cat.gif" alt="Adaptability" /></p>
<hr />

<h2>5. Emotional Intelligence: Staying Cool When Things Go Wrong</h2>
<p>Whether you're facing a tricky bug or a tight deadline, <strong>emotional intelligence (EQ)</strong> helps you navigate the ups and downs of software development. Managing your emotions and understanding others' perspectives can help keep the team morale high, even in stressful situations. It's like keeping your cool when the server crashes or the power goes out—staying calm helps you find the solution, and keeps the team moving forward.</p>
<ul>
  <li>Manage your emotions under stress</li>
  <li>Understand your teammates' perspectives</li>
  <li>Keep morale high in tough times</li>
</ul>
<p><img src="/blog-imgs/soft-skills/fine.gif" alt="Emotional Intelligence" /></p>
<hr />

<h2>6. Negotiation: Getting What You Want, Without the "Hard Sell"</h2>
<p>Negotiation isn't just for salespeople. As a developer, you often find yourself negotiating timelines, features, or technical decisions. The key is to approach these conversations with respect and collaboration, not confrontation. It's like navigating a community potluck—everyone has different tastes, but finding a way to make everyone happy is what makes the experience worthwhile.</p>
<ul>
  <li>Negotiate with respect and collaboration</li>
  <li>Find solutions that work for everyone</li>
  <li>Balance different needs and preferences</li>
</ul>
<p><img src="/blog-imgs/soft-skills/money.gif" alt="Negotiation" /></p>
<hr />

<h2>Conclusion: The Right Blend for Success</h2>
<p>Technical skills are important, but <strong>soft skills</strong> are what allow you to collaborate effectively, adapt to change, and handle the ups and downs of development. Whether you're debugging code, collaborating with a team, or managing deadlines, soft skills help you navigate the challenges of the development world with confidence.</p>
<p>Just like a well-cooked stew, it's the right combination of skills that makes a great developer. So, invest in your soft skills, and you'll find yourself thriving not just as a coder, but as a collaborator, communicator, and problem-solver.</p>
<hr />

<h2>Call to Action</h2>
<p>Start honing your <strong>soft skills</strong> today. Whether it's improving your communication, time management, or emotional intelligence, these skills will make a huge difference in your career. So go ahead—take the time to build them. And remember, like any great project, success in software development is about balance: technical proficiency and soft skills working hand in hand.</p>
`,
    featured: true,
  },
];

export const getBlogPosts = () => blogPosts;

export const getFeaturedBlogPosts = () =>
  blogPosts.filter((post) => post.featured);

export const getBlogPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);
