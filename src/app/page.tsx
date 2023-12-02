import { Footer } from "./components/footer";
import { Section } from "./components/section";


import config from "public/config.json";
import { type ProjectInfo } from "~/app/models/project.model";

import whitepaper from "public/whitepaper.json";
import tokenomics from "public/tokenomics.json";
import roadmap from "public/roadmap.json";
import utility from "public/utility.json";
import uuid4 from "uuid4";
import { Animation } from "./animation";
import Image from "next/image";


export default function HomePage() {
  const projectData = config as ProjectInfo;
  const layout = "xl:px-40 lg:px-20 md:px-20 px-2 max-w-[2000px] m-auto";

  return (
      <main
        className={`flex min-h-screen flex-col items-center justify-center gap-5 text-black ${layout}`}
      >
        <div id="landing" className="xl:py-40 lg:py-40 xl:pb-0 lg:pb-0 pb-40 relative xl:px-20 lg:px-5 md:px-5 px-2 max-w-[2000px] w-screen">
          <h1 className="text-6xl font-heading text-t1 p-5">WELCOME TO THE LOONY BIN</h1>
          <p className="text-xl font-body text-t2 p-5">Compiled in 236ms (519 modules)</p>
          <p className="absolute bottom-0 xl:right-20 lg:right-20 right-0 -rotate-45 text-xl font-body text-t2 p-5">Compiled in 236ms (519 modules)<br/>Compiled in 236ms (519 modules)<br/>Compiled in 236ms (519 modules)<br/></p>
          <div className="flex items-center justify-center">
            <Image src='/logo-nobg-512px.png' alt='' height={300} width={300} />
          </div>
        </div>
        <Section.Container id={whitepaper.title} direction="right">
          <Section.Header title={whitepaper.title} direction="right"/>
          <Section.Body>
            <Section.Article body={[whitepaper.body]} direction="right"/>
          </Section.Body>
        </Section.Container>
        <Section.Container id={tokenomics.title} direction="left">
          <Section.Header title={tokenomics.title} direction="left"/>
          <Section.Article body={[tokenomics.body]} direction="left"/>
          <Section.Article body={tokenomics.accent} direction="left"/>
        </Section.Container>
        <Section.Container id="roadmap" direction="right">
          <Section.Header title="roadmap" direction="right"/>
          <Section.Body>
            {roadmap.data.map(data => {
              return (
                <div key={uuid4()} className="p-5 flex-1 flex flex-col gap-5">
                  <h3 className="text-xl text-t1 font-heading border">{data.title}</h3>
                  <ul className="flex gap-2 flex-col">
                    {data.items.map(item => <li  key={uuid4()}><p className="text-xl text-t1 font-heading">{item}</p></li>)}
                  </ul>
                </div>
              )
            })}
          </Section.Body>
        </Section.Container>
        <Section.Container id={utility.title} direction="left">
          <Section.Header title={utility.title} direction="left"/>
          <Section.Body>
            <Section.Article body={utility.articles} direction="left"/>
          </Section.Body>
        </Section.Container>
        <Footer config={projectData} layout={layout} />
        <div id="overlay" className="fixed inset-0 -z-10"/>
        <div id="gradient" className="fixed inset-0 -z-20"/>
        <div id="background-image" className="fixed inset-0 -z-30" />
        <Animation/>
      </main>
  );
}


