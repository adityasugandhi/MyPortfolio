import React,{useEffect, useRef} from 'react';
import { IconArrowRotaryStraight } from '@tabler/icons-react';

import StackIcon from 'tech-stack-icons';

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
  { name: "googlecloud" },
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
  { name: "css" },
  { name: "js", className: "mob:mx-1" },
  { name: "reactjs", className: "mob:mx-1 tech-icon" },
  { name: "angular" },
  { name: "nodejs" },
  { name: "nextjs2" },
  { name: "flutter" },
  { name: "cloudflare" },
  { name: "netlify" },
  { name: "vercel" },
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

useEffect(() => {
  const scrollElement = scrollRef.current;
  if (!scrollElement) return;

  const handleScroll = () => {
    const maxScrollLeft = scrollElement.scrollWidth / 2;
    
    if (scrollElement.scrollLeft >= maxScrollLeft) {
      scrollElement.scrollLeft = 0;
    }
  };

  scrollElement.addEventListener('inversescroll', handleScroll);
  return () => {
    scrollElement.removeEventListener('inversescroll', handleScroll);
  };
}, []);
  return (
    <div className='scroll-container'>
      <div className="scroll" style={{ '--time': '200s' }}>
        <div className="scroll-content">
          <span>CSS</span>
          <span>JavaScript</span>
          <span>ReactJS</span>
          <span>Figma</span>
          <span>Photoshop</span>
          <span>Premiere Pro</span>
          <span>Figma</span>
          <span>Angular</span>
          <span>Node JS</span>
          <span>Express JS</span>
          <span>MongoDB</span>
          <span>PostgreSQL</span>
          <span>GraphQL</span>
          <span>REST API</span>
          <span>Git</span>
          <span>GitHub</span>
          <span>Heroku</span>
          <span>Netlify</span>
          <span>VS Code</span>
          <span>Codepen</span>
          <span>aws</span>
          <span>vercel</span>
          <span>firebase</span>
          <span>Azure</span>
          <span>Google Cloud</span>
          <span>Adobe XD</span>
          <span>Illustrator</span>
          <span>Flutter</span>
          {/* Repeat the same items to create a seamless loop */}
          <span>CSS</span>
          <span>JavaScript</span>
          <span>ReactJS</span>
          <span>Figma</span>
          <span>Photoshop</span>
          <span>Premiere Pro</span>
          <span>Figma</span>
          <span>Angular</span>
          <span>Node JS</span>
          <span>Express JS</span>
          <span>MongoDB</span>
          <span>PostgreSQL</span>
          <span>GraphQL</span>
          <span>REST API</span>
          <span>Git</span>
          <span>GitHub</span>
          <span>Heroku</span>
          <span>Netlify</span>
          <span>VS Code</span>
          <span>Codepen</span>
          <span>aws</span>
          <span>vercel</span>
          <span>firebase</span>
          <span>Azure</span>
          <span>Google Cloud</span>
          <span>Adobe XD</span>
          <span>Illustrator</span>
          <span>Flutter</span>
        </div>
      </div>

      <div className="scroll imgBox" style={{ '--time': '200s' }}>
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
