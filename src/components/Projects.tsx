import '../styles/projects.css';
import ProjectCard, {Holder, Content, Tags, Tag, CardActions} from './ProjectCard';

export default function Projects() {
  return (
    <div id="projects" className="px-5 sm:px-10 md:px-20 lg:px-40 flex flex-col justify-center gap-4 md:gap-6 w-full h-full ">
      <h3 className="w-max self-center px-4 py-1 rounded-xl text-3xl bg-[var(--clr-comp-hover)] border-b-2 border-[var(--clr-accent)]">
        Projects
      </h3>
      <Holder>
        <ProjectCard>
          <Content>
            <h3>EV Fleet Dashboard</h3>
            <p>
              A comprehensive dashboard for managing and monitoring electric vehicle fleets. It features real-time tracking, telemetry data,
              analytics, and reporting tools to optimize fleet performance and efficiency. This project includes alert notifications, live
              charts, multi-language support, and a user-friendly interface. Built with a focus on user experience and data visualization.
            </p>
            <Tags>
              <Tag hashtag="Next.js" />
              <Tag hashtag="React" />
              <Tag hashtag="Tailwind Css" />
              <Tag hashtag="TypeScript" />
              <Tag hashtag="Node.js" />
              <Tag hashtag="Tom Tom" />
              <Tag hashtag="Maplibre" />
              <Tag hashtag="i18next" />
              <Tag hashtag="Playwright" />
              <Tag hashtag="PostgreSQL" />
            </Tags>
          </Content>
          <CardActions
            source="https://github.com/saigowthamnandan/ev-fleet-dashboard"
            visit="https://ev-fleet-dashboard.vercel.app"
          />
        </ProjectCard>
        <ProjectCard>
          <Content>
            <h3>Come-And-Buy</h3>
            <p>
              A modern, full-featured e-commerce platform with real-time chatbot support. Discover a seamless shopping experience. Buy with
              confidence. It demonstrates proficiency in full-stack development, including user authentication, product management, shopping
              cart functionality, and integrating a third-party payment gateway. The project is a testament to my ability to create dynamic
              and user-friendly web applications.
            </p>
            <Tags>
              <Tag hashtag="Next.js" />
              <Tag hashtag="React" />
              <Tag hashtag="Tailwind Css" />
              <Tag hashtag="TypeScript" />
              <Tag hashtag="MongoDB" />
              <Tag hashtag="Clerk" />
            </Tags>
          </Content>
          <CardActions source="https://github.com/saigowthamnandan/Come-And-Buy" />
        </ProjectCard>
        <ProjectCard>
          <Content>
            <h3>GN-Tech Future Chat App</h3>
            <p>
              A real-time full stack chat application with a modern UI, built using React, Vite and Tailwind CSS. Using Express, Socket.io,
              JWT and MongoDB .It features user authentication, message encryption, rooms based messaging and a responsive design for
              seamless communication across devices.
            </p>
            <Tags>
              <Tag hashtag="React" />
              <Tag hashtag="Vite" />
              <Tag hashtag="Tailwind CSS" />
              <Tag hashtag="TypeScript" />
              <Tag hashtag="Socket.io" />
              <Tag hashtag="Express.js" />
              <Tag hashtag="MongoDB" />
              <Tag hashtag="JWT" />
            </Tags>
          </Content>
          <div className="flex gap-2">
            <CardActions source="https://github.com/saigowthamnandan/chat-app-client" tag="Client" />
            <CardActions source="https://github.com/saigowthamnandan/chat-app-server" tag="Server" />
          </div>
        </ProjectCard>
        <ProjectCard>
          <Content>
            <h3>SSO Authentication App with NextJS and NodeJS backend</h3>
            <p>
              Developed a centralized SSO solution for unified authentication across web applications. Created functional tools like
              ticketing, timesheets, task-manager and invoicing using NextJS. Standardized codebases with linting, formatting, and testing
              tools. Established boilerplates for React, NextJS, and React Native to streamline development.
            </p>
            <Tags>
              <Tag hashtag="Next.js" />
              <Tag hashtag="React" />
              <Tag hashtag="Node.js" />
              <Tag hashtag="Koa.js" />
              <Tag hashtag="TailwindCSS" />
              <Tag hashtag="TypeScript" />
              <Tag hashtag="MongoDB" />
              <Tag hashtag="OAuth2" />
              <Tag hashtag="JWT" />
              <Tag hashtag="AWS" />
              <Tag hashtag="Cypress" />
            </Tags>
          </Content>
        </ProjectCard>
        <ProjectCard>
          <Content>
            <h3>GN-Editor</h3>
            <p>
              A full-stack article platform with a rich markdown editor, theme support, and secure JWT-based auth. Designed with scalable,
              decoupled architecture and production-grade structure for seamless writing, deployment, and user experience.
            </p>
            <Tags>
              <Tag hashtag="Next.js" />
              <Tag hashtag="TypeScript" />
              <Tag hashtag="React" />
              <Tag hashtag="React Markdown" />
              <Tag hashtag="Mongodb" />
              <Tag hashtag="Express js" />
              <Tag hashtag="Tailwind Css" />
            </Tags>
          </Content>
        </ProjectCard>
        <ProjectCard>
          <Content>
            <h3>Sai Gowtham Nandan Ganta, Portfolio</h3>
            <p>
              This is my personal portfolio website. It showcases my skills, projects, and experiences as a web developer. The portfolio is
              designed to be visually appealing and easy to navigate, providing a detailed introduction about myself.
            </p>
            <Tags>
              <Tag hashtag="Nextjs" />
              <Tag hashtag="TypeScript" />
              <Tag hashtag="Tailwind CSS" />
              <Tag hashtag="React" />
              <Tag hashtag="React-tsparticles" />
            </Tags>
          </Content>
          <CardActions source="https://github.com/saigowthamnandan/portfolio" />
        </ProjectCard>
      </Holder>
    </div>
  );
}
