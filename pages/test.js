import React,{useEffect, useMemo,useState,useRef} from 'react';

const Test = () => {
    const skills = [
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
        'RESTAPI',
        'Git',
        'GitHub',
        'Heroku',
        'Netlify',
        'VSCode',
        'Codepen',
        'aws',
        'vercel',
        'firebase',
        'Azure',
        'GoogleCloud',
        'Adobe XD',
        'Illustrator',
        'Flutter',
    ]   ;
      
      
      const scrollWrapperRef = useRef(null);
      
      useEffect(() => {
          const scroller = scrollWrapperRef.current;
          function scroll() {
            if(!scroller) return;
            const innerScroll = scroller.querySelector('.scroll-content');
            if(!innerScroll) return;
            
            const innerScrollchildren = Array.from(innerScroll.children);
            innerScrollchildren.forEach((child) => {
              const duplicate = child.cloneNode(true);
            innerScroll.appendChild(duplicate);
            })
            
          }
        scroll()}, []);
      return (
        
        <div className="flex justify-center items-center  h-screen" >
            <div className="flex   scroller " ref={scrollWrapperRef}>
              <div className="scroll-content  flex space-x-2 border-red-800">
                {skills.map((skill, index) => (
                  <span key={index}>{skill}</span>
                ))}
              </div>
            </div>
    
              
              
        </div>
          

    )
    }
export default Test;

