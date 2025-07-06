import Link from 'next/link';
import SvgIcon from './SvgIcon';
import {IconVariants} from '@/utils/enums';

export default function About() {
  return (
    <div id="about" className="px-5 sm:px-10 md:px-20 lg:px-40 flex flex-col justify-center items-center gap-4 md:gap-6 w-full h-full ">
      <div className="flex flex-col rounded-2xl md:rounded-3xl justify-center gap-1 md:gap-3 w-full h-full p-4 bg-[var(--clr-comp-hover)]  text-[var(--clr-text)]">
        <h3 className="w-full text-center text-3xl">About</h3>
        <ul className="list-disc list-inside text-lg">
          <li>
            <span className="font-bold text-[var(--clr-accent)]">Full Stack Developer</span> with around{' '}
            <span className="font-bold text-[var(--clr-accent)]">4 years</span> of hands-on experience, specialized in building real-time,
            complex, secure, scalable web and native applications.
          </li>
          <li>
            <span className="font-bold text-[var(--clr-accent)]">Proficient</span> in JavaScript, TypeScript, React, Angular, Vue, Next.js,
            Node.js, Express.js, Nest.js, .Net, Pyhton, Java, PHP, MongoDB, MS SQL, and more.
          </li>
          <li>
            <span className="font-bold text-[var(--clr-accent)]">Experienced</span> in working with cloud platforms like{' '}
            <span className="font-bold text-[var(--clr-accent)]">AWS</span>,{' '}
            <span className="font-bold text-[var(--clr-accent)]">Azure</span>, and containerization technologies like{' '}
            <span className="font-bold text-[var(--clr-accent)]">Docker</span> and{' '}
            <span className="font-bold text-[var(--clr-accent)]">Kubernetes</span>.
          </li>
          <li>
            Optimizing system performance and observability using <span className="font-bold text-[var(--clr-accent)]">OpenTelemetry</span>,{' '}
            <span className="font-bold text-[var(--clr-accent)]">Prometheus</span>, and{' '}
            <span className="font-bold text-[var(--clr-accent)]">Jaeger</span>
          </li>
          <li>
            Strong understanding of software development methodologies, including
            <span className="font-bold text-[var(--clr-accent)]"> Agile</span> and{' '}
            <span className="font-bold text-[var(--clr-accent)]">DevOps</span> practices.
          </li>
          <li>
            Well known for creating elegant solutions for complex problems. Skilled in microservice architecture, AI/LLM development &
            integration.
          </li>
        </ul>
        <div className="flex flex-col md:flex-row gap-2 text-lg font-bold items-center w-full">
          <b> --- </b>Let’s build something great! ✨
          <Link
            className="flex justify-center gap-1 items-center no-underline bg-[var(--clr-accent)] text-white px-2.5 py-1.5 rounded-lg hover:bg-[var(--clr-accent-l1)] transition-all duration-300 ease-in-out hover:border-[var(--clr-accent-l1)] hover:shadow-[0px_4px_6px_-1px_var(--clr-accent-l2),0px_2px_4px_-1px_var(--clr-accent-l2)]"
            href=""
            target="_blank">
            <SvgIcon alt="resume" name="pdf" variant={IconVariants.SMALL} className="flex items-center" />
            <div>Resume</div>
            <SvgIcon alt="german" name="germany" variant={IconVariants.MEDIUM} className="flex items-center" />
            <div className="text-[var(--clr-accent)] bg-white rounded-md p-1 text-xs">DE</div>
          </Link>
          <Link
            className="flex justify-center gap-1 items-center no-underline bg-[var(--clr-accent)] text-white px-2.5 py-1.5 rounded-lg hover:bg-[var(--clr-accent-l1)] transition-all duration-300 ease-in-out hover:border-[var(--clr-accent-l1)] hover:shadow-[0px_4px_6px_-1px_var(--clr-accent-l2),0px_2px_4px_-1px_var(--clr-accent-l2)]"
            href=""
            target="_blank">
            <SvgIcon alt="resume" name="pdf" variant={IconVariants.SMALL} className="flex items-center" />
            <div>Resume</div>
            <SvgIcon alt="english" name="uk" variant={IconVariants.MEDIUM} className="flex items-center" />
            <div className="text-[var(--clr-accent)] bg-white rounded-md p-1 text-xs">EN</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
