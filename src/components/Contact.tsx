import Sparkles from './Sparkles';
import '../styles/contact.css';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="px-5 sm:px-10 md:px-20 lg:px-40 flex flex-col justify-center gap-4 md:gap-6 w-full h-full ">
      <h3
        id="contact"
        className="w-max self-center px-4 py-1 rounded-xl text-3xl bg-[var(--clr-comp-hover)] border-b-2 border-[var(--clr-accent)]">
        Contact
      </h3>
      <div className="flex flex-col gap-4 p-3 bg-[var(--clr-comp)] rounded-xl shadow-[2px_2px_2.5px_rgba(0,0,0,0.15)] border-[1px] border-[var(--clr-bdr)]">
        <Sparkles>
          <h1>Get In Touch</h1>
        </Sparkles>
        <p className="contact-text">
          Have questions? Ping me with a{' '}
          <Link
            target="_blank"
            className="text-[var(--clr-accent)] md:text-lg text-bold"
            href="https://www.linkedin.com/in/ganta-sai-gowtham-nandan-218b93185">
            Linkedin
          </Link>{' '}
          DM or email at{' '}
          <Link
            target="_blank"
            className="text-[var(--clr-accent)] text-sm md:text-lg text-bold"
            href="mailto:saigowthamnandanganta0208@gmail.com">
            saigowthamnandanganta0208@gmail.com
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
