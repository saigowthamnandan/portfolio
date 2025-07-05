import '../styles/projects.css';
import ProjectCard, {Holder, Content, Tags, Tag, CardActions} from './ProjectCard';

export default function Projects() {
  return (
    <div className="section projects-section">
      <h2>Projects</h2>
      <Holder>
        <ProjectCard>
          <img src="upmagic.png" alt="Upmagic" />
          <Content>
            <h3>Upmagic</h3>
            <p>
              An AI-powered Upwork proposal generator that creates compelling proposals with just one click. Built using the secret
              strategies and proven techniques of top-rated freelancers to help you land more jobs and stand out from the competition.
            </p>
            <Tags>
              <Tag hashtag="React" />
              <Tag hashtag="GenAI" />
              <Tag hashtag="Nextjs" />
              <Tag hashtag="Tailwind Css" />
            </Tags>
          </Content>
          <CardActions visit="https://upmagic.vercel.app" source="https://github.com/malay77patra/upmagic" />
        </ProjectCard>
        <ProjectCard>
          <img src="hotkeys.png" alt="HOTKEYS" />
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
          <img src="physoxy.png" alt="Physoxy" />
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
          <img src="flamecoders.png" alt="Flamecoders" />
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
          <img src="malay-patrav1.png" alt="Portfolio v1" />
          <Content>
            <h3>Malay Patra, Portfolio v1</h3>
            <p>
              This is the first version of my personal portfolio website. It showcases my skills, projects, and experiences as a web
              developer. The portfolio is designed to be visually appealing and easy to navigate, providing a detailed introduction about
              myself.
            </p>
            <Tags>
              <Tag hashtag="React" />
              <Tag hashtag="React-Scroll" />
            </Tags>
          </Content>
          <CardActions visit="https://malaypatra.vercel.app/" source="https://github.com/malay77patra/portfolio" />
        </ProjectCard>
      </Holder>
    </div>
  );
}
