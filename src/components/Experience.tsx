import '../styles/experience.css';
import TimelineItem, {Timeline} from './TimelineItem';
import {TimeStamp} from './TimelineItem';
import SvgIcon from './SvgIcon';
import {IconVariants} from '@/utils/enums';

export default function Experience() {
  return (
    <div id="experience" className="px-5 sm:px-10 md:px-20 lg:px-40 flex flex-col justify-center gap-4 md:gap-6 w-full h-full ">
      <h3 className="w-max self-center px-4 py-1 rounded-xl text-3xl bg-[var(--clr-comp-hover)] border-b-2 border-[var(--clr-accent)]">
        Work Experience
      </h3>
      <div className="flex flex-col gap-4 p-3 bg-[var(--clr-comp)] rounded-xl shadow-[2px_2px_2.5px_rgba(0,0,0,0.15)] border-[1px] border-[var(--clr-bdr)]">
        <h3 className="text-2xl text-[var(--clr-accent4)]">Career Highlights</h3>
        <ul className="list-disc px-3">
          <li>
            Developed over <span className="font-bold text-[var(--clr-accent)]">20+</span> end-to-end responsive web applications using
            HTML, CSS, JavaScript, React.js, Angular, Next.js, Node.js, Express.js, .Net and Nest.js enhancing user experience, engagement
            and reducing bounce rate by 30%.
          </li>
          <li>
            Optimized MongoDB Atlas for <span className="font-bold text-[var(--clr-accent)]">4x</span> global writes and sharding for data
            compliance and performance.
          </li>
          <li>Created Boiler-Plate Apps with custom component library supporting multiple themes.</li>
          <li>
            Led the implementation and integration of real-time chat, video, and audio using
            <span className="font-bold text-[var(--clr-accent)]"> WebRTC </span>,
            <span className="font-bold text-[var(--clr-accent)]"> SSE </span> and
            <span className="font-bold text-[var(--clr-accent)]"> NATS</span>.
          </li>
          <li>
            Designed and deployed monitoring systems with <span className="font-bold text-[var(--clr-accent)]">OpenTelemetry </span>,
            <span className="font-bold text-[var(--clr-accent)]"> Prometheus</span>,
            <span className="font-bold text-[var(--clr-accent)]"> Grafana</span> and
            <span className="font-bold text-[var(--clr-accent)]"> Jaeger</span> — improving system insight and uptime.
          </li>
          <li>
            Built and deployed applications with <span className="font-bold text-[var(--clr-accent)]">Dockerized microservices</span> on AWS
            , AWS Lambda and ECS Reduced UI latency by 45% and optimized backend queries to cut API load by 20%
          </li>
          <li>
            Participated in hiring as part of the technical interview panel, assessing
            <span className="font-bold text-[var(--clr-accent)]"> 350+ candidates</span> and shortlisting 50+ for junior to mid-level
            developer roles for candidates up to <span className="font-bold text-[var(--clr-accent)]">4 years</span> of experience.
          </li>
        </ul>
        <div className="flex flex-col md:flex-row gap-4 px-3">
          <div className="illustration">
            <SvgIcon alt="freelancing" name="freelancing" width={350} height={350} />
          </div>
          <div className="details">
            <Timeline>
              <TimelineItem icon={'paltech'} color="#EE9C38" bgColor="var(--clr-comp)" to="https://www.pal.tech">
                <h4>Full Stack Developer | PalTech | Hyderabad</h4>
                <TimeStamp stamp="Jun 2022 - Mar 2025" />
                <p>
                  Worked as a full stack developer on various projects, including web applications, mobile apps, and APIs. Focused on
                  delivering high-quality code and meeting client requirements.
                </p>
              </TimelineItem>
              <TimelineItem icon={'zeengi'} iconSize={IconVariants.LARGE} color="#3384FB" to="https://www.zeengi.com">
                <h4>Full Stack Freelance Developer | Zeengi | Hyderabad</h4>
                <TimeStamp stamp="Jul 2021 - Jun 2022" />
                <p>
                  Food Delivery Platform based in India and serving 100+ vendors and 10,000+ users.. Specialized in creating automated web
                  solutions for clients. Carting modern web interface for tools for your simplicity.
                </p>
              </TimelineItem>
              <TimelineItem icon={'fiverr'} color="#1dbf73">
                <h4>Freelance Web Developer | Fiverr | Remote</h4>
                <TimeStamp stamp="Nov 2020 - Dev 2021" />
                <p>
                  As a freelancer, I have worked on a variety of projects, including web development, mobile app development, and graphic
                  design. I have experience working with clients from different parts of the world, and I have developed a strong
                  understanding of the importance of communication and collaboration in remote work environments.
                </p>
              </TimelineItem>
            </Timeline>
          </div>
        </div>
        <div className="flex flex-col md:flex-row px-3 justify-between items-start gap-6 reverse">
          <div className="details">
            <h3>Open Source Contribution</h3>
            <p>
              Actively contributed to open-source projects by developing new features, resolving issues, and enhancing documentation.
              Engaged with the community through code reviews and discussions to drive improvements.
            </p>
            <Timeline>
              <TimelineItem icon={'github'} color="#0745a3" to="https://github.com">
                <h4>Github</h4>
                <TimeStamp stamp="2021 - now" />
                <p>Maintained and contributed to repositories, collaborating on code, issues, and pull requests.</p>
              </TimelineItem>
            </Timeline>
          </div>
          <div className="illustration">
            <SvgIcon alt="open-source" name="opensource" width={350} height={350} />
          </div>
        </div>
      </div>
    </div>
  );
}
