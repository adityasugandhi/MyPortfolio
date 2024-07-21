import React,{useEffect, useMemo,useState,useRef} from 'react';
import { IconArrowRotaryStraight } from '@tabler/icons-react';

import StackIcon from 'tech-stack-icons';
import { func } from 'prop-types';

const Techscroll = () => {
const scrollRef = useRef(null);
const iconsArray = [
  { name: "html5", className: "bg-white" },
  { name: "css3" },
  { name: "js", className: "mob:mx-1" },
  { name: "reactjs", className: "mob:mx-1 tech-icon" },
  { name: "angular" },
  { name: "nodejs" },
  { name: "nextjs2" },
  { name: "flutter" },
  { name: "cloudflare" },
  { name: "netlify" },
  { name: "aws", className: "bg-white" },
  { name: "azure" },
  { name: "firebase" },
  
  { name: "github", className: "bg-white" },
  { name: "django" },
  { name: "java" },
  { name: "kubernetes" },
  { name: "docker" },
  { name: "postgresql" },
  { name: "mongodb" },
  { name: "mysql" },
  { name: "redis" },
  { name: "html5", className: "bg-white" },
  
  { name: "js", className: "mob:mx-1" },
  { name: "reactjs", className: "mob:mx-1 tech-icon" },
  { name: "angular" },
  { name: "nodejs" },
  { name: "nextjs2" },
  { name: "flutter" },
  { name: "cloudflare" },
  { name: "netlify" },
  
  { name: "aws", className: "bg-white" },
  { name: "azure" },
  { name: "firebase" },
  { name: "github", className: "bg-white" },
  { name: "django" },
  { name: "java" },
  { name: "kubernetes" },
  { name: "docker" },
  { name: "postgresql" },
  { name: "mongodb" },
  { name: "mysql" },
  { name: "redis" }
];

  const skills = useMemo(() => [
    'CSS',
    'JavaScript',
    'ReactJS',
    'Figma',
    'Photoshop',
    'Premiere Pro',
    'Figma',
    'Angular',
    'Node JS',
    'Express JS',
    'MongoDB',
    'PostgreSQL',
    'GraphQL',
    'REST API',
    'Git',
    'GitHub',
    'Heroku',
    'Netlify',
    'VS Code',
    'Codepen',
    'aws',
    'vercel',
    'firebase',
    'Azure',
    'Google Cloud',
    'Adobe XD',
    'Illustrator',
    'Flutter',
  ], []);
  
  
  const scrollWrapperRef = useRef(null);
  
  useEffect(() => {
      const scroller = scrollWrapperRef.current;
      function scroll() {
        if(!scroller) return;
        const innerScroll = scroller.querySelector('.scroll-content');
        if(!innerScroll) return;
        // if (innerScroll.getAttribute("data-clone") === "true") return
        const innerScrollchildren = Array.from(innerScroll.children);
        innerScrollchildren.forEach((child) => {
          const duplicate = child.cloneNode(true);
        innerScroll.appendChild(duplicate);
        console.log(innerScrollchildren)})
        // innerScroll.setAttribute("data-clone", "true");
      }
    scroll()}, []);
  return (
    <div className="scroll-container ">
      
        <div className="scroll" style={{ '--time': '200s' } } ref={scrollWrapperRef}>
          <div className="scroll-content">
            {skills.map((skill, index) => (
              <span key={index}>{skill}</span>
            ))}
         
          </div> 
      </div>
    



    

      <div className="scroll imgBox" style={{ '--time': '200s' }}  ref={scrollWrapperRef}>
        <div className="inversescroll flex">
         {iconsArray.concat(iconsArray).map((icon, index)=> (
        <StackIcon
          key={index}
          name={icon.name}
          className= "tech-icon"/>
          ))}
          {/* <StackIcon name="html5" className="bg-white" />
          <StackIcon name="css" />
          <StackIcon name="js" className="mob:mx-1" />
          <StackIcon name="reactjs" className="mob:mx-1 tech-icon" />
          <StackIcon name="angular" />
          <StackIcon name="nodejs" />
          <StackIcon name="nextjs2" />
          <StackIcon name="flutter" />
          <StackIcon name="cloudflare" />
          <StackIcon name="netlify" />
          <StackIcon name="vercel" />
          <StackIcon name="aws" className="bg-white" />
          <StackIcon name="azure" />
          <StackIcon name="firebase" />
          <StackIcon name="googlecloud" />
          <StackIcon name="github" className="bg-white" />
          <StackIcon name="django" />
          <StackIcon name="java" />
          <StackIcon name="kubernetes" />
          <StackIcon name="docker" />
          <StackIcon name="postgresql" />
          <StackIcon name="mongodb" />
          <StackIcon name="mysql" />
          <StackIcon name="redis" /> */}
          {/* Repeat the same icons to create a seamless loop */}

        </div>
      </div>
    </div>
  );
};

export default Techscroll;
