import SkillCard from './Card';

export default function Skills() {
  return (
    <div id="skills" className="px-5 sm:px-10 md:px-20 lg:px-40 flex flex-col justify-center gap-4 md:gap-6 w-full h-full ">
      <h3 className="w-max self-center px-4 py-1 rounded-xl text-3xl bg-[var(--clr-comp-hover)] border-b-2 border-[var(--clr-accent)]">
        Tech Stack
      </h3>
      <SkillCard
        heading="Frontend"
        skills={[
          {name: 'HTML', icon: 'html5'},
          {name: 'CSS', icon: 'css3'},
          {name: 'JavaScript', icon: 'javascript'},
          {name: 'TypeScript', icon: 'typescript'},
          {name: 'React', icon: 'react'},
          {name: 'Redux', icon: 'redux'},
          {name: 'Next.js', icon: 'nextjs'},
          {name: 'React Native', icon: 'react'},
          {name: 'Angular', icon: 'angular'},
          {name: 'Tailwind CSS', icon: 'tailwindcss'},
          {name: 'Bootstrap', icon: 'bootstrap'},
          {name: 'Material-UI', icon: 'materialui'},
          {name: 'Chakra UI', icon: ''},
          {name: 'Storybook', icon: 'storybook'},
        ]}
      />
      <SkillCard
        heading="Backend & APIs"
        hcolor="var(--clr-accent2)"
        skills={[
          {name: 'Node.js', icon: 'nodejs'},
          {name: 'Express', icon: 'express'},
          {name: 'NestJS', icon: 'nestjs'},
          {name: 'Python', icon: 'python'},
          {name: '.NET', icon: 'dot-net'},
          {name: 'Fastify', icon: 'fastify'},
          {name: 'Oauth2', icon: 'oauth'},
          {name: 'Java', icon: 'java'},
          {name: 'WebSockets', icon: ''},
          {name: 'NATS', icon: ''},
          {name: 'SSE', icon: ''},
        ]}
      />
      <SkillCard
        heading="Database"
        hcolor="var(--clr-accent4)"
        skills={[
          {name: 'MongoDB', icon: 'mongodb'},
          {name: 'MS SQL Server', icon: 'microsoftsqlserver'},
          {name: 'MySQL', icon: 'mysql'},
          {name: 'MongoDB Atlas', icon: 'mongodb'},
          {name: 'Redis', icon: 'redis'},
        ]}
      />
      <SkillCard
        heading="Cloud & DevOps"
        hcolor="var(--clr-accent3)"
        skills={[
          {name: 'AWS', icon: 'amazonwebservices', type: 'original-wordmark'},
          {name: 'Docker', icon: 'docker'},
          {name: 'Kubernetes', icon: 'kubernetes'},
          {name: 'Terraform', icon: 'terraform'},
          {name: 'CI/CD', icon: ''},
          {name: 'Jenkins', icon: 'jenkins'},
          {name: 'nginx', icon: 'nginx'},
          {name: 'GitHub Actions', icon: 'githubactions'},
          {name: 'GitLab CI', icon: 'gitlab'},
        ]}
      />
      <SkillCard
        heading="Observability & Monitoring"
        hcolor="var(--clr-accent5)"
        skills={[
          {name: 'OpenTelemetry', icon: 'opentelemetry'},
          {name: 'Jaeger', icon: 'jaegertracing'},
          {name: 'Grafana', icon: 'grafana'},
          {name: 'Prometheus', icon: 'prometheus'},
        ]}
      />
      <SkillCard
        heading="Tools"
        hcolor="var(--clr-accent6)"
        skills={[
          {name: 'Git', icon: 'git'},
          {name: 'GitHub', icon: 'github'},
          {name: 'GitLab', icon: 'gitlab'},
          {name: 'VS Code', icon: 'vscode'},
          {name: 'Postman', icon: 'postman'},
          {name: 'Heroku', icon: 'heroku'},
          {name: 'Netlify', icon: 'netlify'},
          {name: 'Vercel', icon: 'vercel'},
          {name: 'Figma', icon: 'figma'},
        ]}
      />
      <SkillCard
        heading="Testing & Automation"
        hcolor="var(--clr-sec)"
        skills={[
          {name: 'Jest', icon: 'jest', type: 'plain'},
          {name: 'Cypress', icon: 'cypressio'},
          {name: 'Puppeteer', icon: 'puppeteer'},
          {name: 'OpenAI', icon: 'https://simpleicons.org/icons/openai.svg'},
          {name: 'Web Scraping', icon: ''},
          {name: 'DeepSeek', icon: ''},
          {name: 'Gemini', icon: 'https://simpleicons.org/icons/googlegemini.svg'},
        ]}
      />
    </div>
  );
}
