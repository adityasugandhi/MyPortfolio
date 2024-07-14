import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from 'react-icons/fa';
import StackIcons from '../components/StackIcons/stackicons';

const Timeline = ({ theme }) => {
  const bgcolor = theme === 'dark' ? 'bg-slate-800' : 'bg-gray-50';
  const isDarkMode = theme === 'dark';
  const lineColor = isDarkMode ? 'white' : 'black';

  return (
    <div className={`h-fit py-2 ${bgcolor}`}>
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-gray-200">
        Work History
      </h1>

      <VerticalTimeline lineColor={lineColor}>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="2023 - present"
          dateClassName="p-4" // Apply Tailwind CSS classes here
          contentStyle={{
            background: isDarkMode ? '#2d2d2d' : '#e5e5e5',
            color: isDarkMode ? '#fff' : '#000',
            height: 'auto',
          }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff'}}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Researcher</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Department of Scientific Computing - Tallahassee, FL
          </h4>
          <p>
            Analyze Oceano Atmospheric Data to predict weather patterns and Monsoon offsets.
            <div className="flex flex-row mt-5">
              <h6 className="mr-2">Technologies:</h6>
              <StackIcons names={['python', 'pytorch','bash','vscode']} />
            </div>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - 2022"
          dateClassName="p-4" // Apply Tailwind CSS classes here
          contentStyle={{
            background: isDarkMode ? '#2d2d2d' : '#e5e5e5',
            color: isDarkMode ? '#fff' : '#000',
          }}
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Aspire Systems, Chennai TN
          </h4>
          <p>
            Worked on a team of developers to create a web-based application for multiple clients (Healthcare, Finance).
            <div className="flex flex-row mt-5">
              <h6 className="mr-2">TechStack:</h6>
              <StackIcons names={['python', 'amznwebserv', 'apache', 'reactjs', 'redis','postgresql','postman']} />
            </div>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2020"
          dateClassName="p-4" // Apply Tailwind CSS classes here
          contentStyle={{
            background: isDarkMode ? '#2d2d2d' : '#e5e5e5',
            color: isDarkMode ? '#fff' : '#000',
          }}
          iconStyle={{ background: 'rgb(33, 99, 23)', color: '#fff' }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer - Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Software Engineer</h4>
          <p>
            Built Enterprise web applications using ASP.NET and legacy frameworks.
            <div className="flex flex-row mt-5">
              <h6 className="mr-2">TechStack:</h6>
              <StackIcons names={['js', 'html5', 'csharp', 'sass']} />
            </div>
          </p>
        </VerticalTimelineElement>
        {/* Add more VerticalTimelineElement components here */}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
