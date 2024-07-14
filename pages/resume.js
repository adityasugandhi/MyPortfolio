import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header/index";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import Button from "../components/Button";
import { Progress } from "@nextui-org/react";
import { useTheme } from "next-themes";
// Data
import {BackgroundBeams} from "@components/ui/background-beams";
import { useMediaQuery } from 'react-responsive'
import Timeline from './timeline';
import data from "../data/portfolio.json";
import Techscroll from "../components/infinite_scroll/infininte_scroll";

const Resume = () => {
  const router = useRouter();
  const resolvedTheme = useTheme();
  const [mount, setMount] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1200 }); 
  const size = isMobile ? "sm" : "md";
  const barSize = isMobile? "250px" : "200px";
  
  const themes = resolvedTheme.resolvedTheme === "dark" ? "dark" : "white";
  let bgcolor = resolvedTheme.resolvedTheme === "dark" ? "bg-slate-800" : "bg-gray-50";
  const navItems = [
    {
      name: "Home",
      link: "/",
      
    },
  ]
  
  const generateRandomValue = () => {
      const random = Math.random();
      const scaled = random * (87 - 50) + 50;
      const rounded = Math.round(scaled);
      return rounded;
    };
    

  useEffect(() => {
    setMount(true);
    if (!data.showResume) {
      router.push("/");
    }
  }, [router]);
  return (
    <>
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-6 right-6">
          <Button onClick={() => router.push("/edit")} type={"primary"}>
            Edit Resume
          </Button>
        </div>
      )}
      {data.showCursor && <Cursor />}
      <div
        className={`container mx-auto w-full mb-10 bg-transparent ${
          data.showCursor && "cursor-none"
        }`}
      >
        <Header 
        
        navItems={navItems}
        />
        {mount && (
          <div className="mt-12 w-full flex flex-col items-center">
            <div
              className={`${
                mount && resolvedTheme.resolvedTheme === "dark" ? "bg-slate-800" : "bg-gray-50"
              } p-20 mobile:max-w-screen-sm mob:p-5 desktop:p-20 rounded-lg shadow-sm`}
            >
              <h1 className="text-3xl font-bold">{data.name}</h1>
              <h2 className="text-xl mt-5">{data.resume.tagline}</h2>
              <h2 className=" text-xl mt-5 opacity-50">
                {data.resume.description}
              </h2>
              <div className="mt-2">
                <Socials />

              </div>
              
              <Timeline theme={themes} />
              

              {/* <div className="mt-5">
                <h1 className="text-3xl font-bold">Experience</h1>
                {data.resume.experiences.map(({ id, dates, type, position, bullets }) => (
  <ProjectResume
    key={id}
    dates={dates}
    type={type}
    position={position}
    bullets={bullets}
    className="w-full"
  />
))}

              </div> */}
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Education</h1>
                {data.resume.education.map((education, index) => (
                  <div key={index} className="mt-2">
                    <h2 className="text-lg">{education.universityName}</h2>
                    <h3 className="text-sm opacity-75">
                      {education.universityDate}
                    </h3>
                    <p className="text-md pd-10 first-line:mt-2 opacity-50">
                      {education.universityPara}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-5 ">
                <h1 className="text-2xl font-bold">Skills</h1>
                <div className="grid gap-5 mob:grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 justify-around mob:ml-5">
  {/* Your grid items go here */}


                  {data.resume.languages && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">Languages</h2>
                      <ul className="list-disc" >
                        {data.resume.languages.map((language, index) => (
                         <li key={index} className="ml-2 py-2" style={{ width: barSize }}>
                            <span>{language} </span>
                            <div> <Progress
                              isStriped
                              size= {size}
                              aria-label="Loading..."
                              color="primary"
                              value={generateRandomValue()}
                              className="max-w-md w-full overflow"
                            /></div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {data.resume.frameworks && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">Frameworks</h2>
                      <ul className="list-disc">
                        {data.resume.frameworks.map((framework, index) => (
                          <li key={index} className="ml-5 py-2" style={{width:barSize}}>
                            {framework}
                            <div> <Progress
                              isStriped
                              size= {size}
                              aria-label="Loading..."
                              color="secondary"
                              value={generateRandomValue()}
                              className="max-w-md w-full overflow"
                            /></div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {data.resume.others && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">Others</h2>
                      <ul className="list-disc">
                        {data.resume.others.map((other, index) => (
                          <li key={index} className="ml-5 py-2"style={{width:barSize}}>

                            {other}
                            <div> <Progress
                              isStriped
                              size= {size}
                              aria-label="Loading..."
                              color="success"
                              value={generateRandomValue()}
                              className="max-w-md w-full overflow"
                            /></div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        <BackgroundBeams />
      </div>
    </>
  );
};




export default Resume;
