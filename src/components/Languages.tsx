import LanguageCard from './Card';
import SvgIcon from './SvgIcon';

export default function Languages() {
  return (
    <div id="languages" className="px-5 sm:px-10 md:px-20 lg:px-40 flex flex-col justify-center gap-4 md:gap-6 w-full h-full ">
      <h3 className="w-max self-center px-4 py-1 rounded-xl text-3xl bg-[var(--clr-comp-hover)] border-b-2 border-[var(--clr-accent)]">
        Languages
      </h3>
      <LanguageCard
        heading="Languages"
        skills={[
          {name: 'German', icon: 'german', customIcon: <SvgIcon name="germany" alt="German" width={24} height={24} />},
          {name: 'English', icon: 'english', customIcon: <SvgIcon name="uk" alt="English" width={24} height={24} />},
          {name: 'Hindi', icon: 'hindi', customIcon: <SvgIcon name="india" alt="Hindi" width={24} height={24} />},
          {name: 'Telugu', icon: 'telugu', customIcon: <SvgIcon name="india" alt="Telugu" width={24} height={24} />},
        ]}
        hcolor="var(--clr-accent2)"
      />
    </div>
  );
}
