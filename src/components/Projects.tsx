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
            <h3>Come-And-Buy</h3>
            <p>
              A modern, full-featured e-commerce platform with real-time chatbot support. Discover a seamless shopping experience. Buy with
              confidence. It demonstrates proficiency in full-stack development, including user authentication, product management, shopping
              cart functionality, and integrating a third-party payment gateway.
            </p>
            <Tags>
              <Tag hashtag="Nextjs" />
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
            <h3>HOTKEYS</h3>
            <p>
              Learn the keys, kill the 🐀. Master keyboard shortcuts with ease. Discover, learn, and use hotkeys faster than ever. Boost
              your productivity - No more guessing - No more clicking - Just pure flow.
            </p>
            <Tags>
              <Tag hashtag="Nextjs" />
              <Tag hashtag="Reactjs" />
              <Tag hashtag="shadcn/ui" />
              <Tag hashtag="MagicUI" />
              <Tag hashtag="TailwindCSS" />
            </Tags>
          </Content>
          <CardActions visit="https://hotkeys-iota.vercel.app" source="https://github.com/malay77patra/hotkeys" />
        </ProjectCard>
        <ProjectCard>
          <Content>
            <h3>Physoxy</h3>
            <p>
              A full-stack, production-ready web app with secure JWT authentication, role-based access, and user subscriptions. Features a
              decoupled architecture, email verification, theme support, and admin tools—all and many more.
            </p>
            <Tags>
              <Tag hashtag="React" />
              <Tag hashtag="Mongodb" />
              <Tag hashtag="Express js" />
              <Tag hashtag="Tailwind Css" />
              <Tag hashtag="daisy UI" />
            </Tags>
          </Content>
          <CardActions visit="https://physoxy.vercel.app" source="https://github.com/malay77patra/Physoxy" />
        </ProjectCard>
        <ProjectCard>
          <Content>
            <h3>Flamecoders</h3>
            <p>
              A full-stack article platform with a rich markdown editor, theme support, and secure JWT-based auth. Designed with scalable,
              decoupled architecture and production-grade structure for seamless writing, deployment, and user experience.
            </p>
            <Tags>
              <Tag hashtag="React" />
              <Tag hashtag="Mongodb" />
              <Tag hashtag="Express js" />
              <Tag hashtag="Tailwind Css" />
              <Tag hashtag="daisy UI" />
            </Tags>
          </Content>
          <CardActions visit="https://flamecoders.vercel.app/" source="https://github.com/malay77patra/flamecoders-frontend" />
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
