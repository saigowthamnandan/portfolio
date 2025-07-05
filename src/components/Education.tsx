import TimelineItem, {Timeline} from './TimelineItem';
import {TimeStamp} from './TimelineItem';
import '../styles/education.css';
import SvgIcon from './SvgIcon';

export default function Education() {
  return (
    <div id="education" className="px-5 sm:px-10 md:px-20 lg:px-40 flex flex-col justify-center gap-4 md:gap-6 w-full h-full ">
      <h3 className="w-max self-center px-4 py-1 rounded-xl text-3xl bg-[var(--clr-comp-hover)] border-b-2 border-[var(--clr-accent)]">
        Education
      </h3>
      <div className="flex flex-col justify-center items-stretch gap-4 p-3 bg-[var(--clr-comp)] rounded-xl shadow-[2px_2px_2.5px_rgba(0,0,0,0.15)] border-[1px] border-[var(--clr-bdr)]">
        <div className="education">
          <div className="illustration">
            <SvgIcon alt="learning" name="learning" width={300} height={300} />
          </div>
          <div className="flex flex-col gap-4 px-4 justify-center">
            <Timeline>
              <TimelineItem icon={'university'} bgColor="#444444">
                <h4>Jawaharlal Nehru Technological University Kakinada</h4>
                <TimeStamp stamp="2022 - Present" />
                <p>Degree: Bachelor of Technology [B. Tech]</p>
                <p>Stream: Computer Science and Engineering</p>
                <p>CGPA: 7.5/10</p>
              </TimelineItem>
              <TimelineItem icon={'college'} bgColor="#444444">
                <h4>Sri Chaitanya College [12th Grade - M.P.C]</h4>
                <TimeStamp stamp="2016 - 2018" />
                <p>percentage: 94.3%</p>
              </TimelineItem>
              <TimelineItem icon={'school'} bgColor="#444444">
                <h4>Fort City School [10th]</h4>
                <TimeStamp stamp="2014 - 2022" />
                <p>CGPA: 9.7/10</p>
              </TimelineItem>
            </Timeline>
          </div>
        </div>
      </div>
    </div>
  );
}
