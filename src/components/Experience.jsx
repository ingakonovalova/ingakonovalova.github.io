import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FaGraduationCap, FaLaptop } from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";

function Experience() {
  return (
    <div name="experience" className="w-full flex flex-col justify-center h-full bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Experience
          </p>
          <p className="py-4 text-gray-300">
            How I got where I am now...
          </p>
        </div>

        <div>
          <VerticalTimeline animate={true} lineColor="#D1D5DB" className="-z-60">
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              iconStyle={{ background: "#000", color: "#fff" }}
              icon={<FaGraduationCap />}
              date="2015 - 2018"
              dateClassName="text-pink-600"
            >
              <h3 className="vertical-timeline-element-title">Bachelor's Degree, Informatics</h3>
              <p className="vertical-timeline-element-subtitle">University of Tartu</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ background: "#000", color: "#fff" }}
              icon={<FaLaptop />}
              date="2017 - 2019"
              dateClassName="text-pink-600"
            >
              <h3 className="vertical-timeline-element-title">
                Client QA Engineer
              </h3>
              <p className="vertical-timeline-element-subtitle">Playtech Estonia</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ background: "#000", color: "#fff" }}
              icon={<FaLaptop />}
              date="2018 - 2021"
              dateClassName="text-pink-600"
            >
              <h3 className="vertical-timeline-element-title">Client Engineer</h3>
              <p className="vertical-timeline-element-subtitle">Glia</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ background: "#000", color: "#fff" }}
              icon={<FaLaptop />}
              date="2021 - present"
              dateClassName="text-pink-600"
            >
              <h3 className="vertical-timeline-element-title">Junior Software Engineer</h3>
              <p className="vertical-timeline-element-subtitle">Pipedrive</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
}

export default Experience;
