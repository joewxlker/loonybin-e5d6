"use client";

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
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function HomePage() {
  const projectData = config as ProjectInfo;
  const layout = "xl:px-40 lg:px-20 md:px-20 px-2 max-w-[2000px] m-auto";

  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
      setLoading(false);
  }, []);

  const navigate = () => {
      setLoading(true);
      setTimeout(() => {
          router.push('/whitepaper');
      }, 500);
  }

  return (
      <main
        className={`relative text-black`}
      >
        <div className={`${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500 flex min-h-screen flex-col items-center justify-center gap-5 ${layout}`}>
          <div id="landing" className="xl:py-40 lg:py-40 xl:pb-0 lg:pb-0 pb-40 relative xl:px-20 gap-12 flex flex-col lg:px-5 md:px-5 xl:max-w-[2000px] overflow-clip lg:max-w-[2000px] max-w-[100vw] xl:w-screen lg:w-screen">
            <h1 className="xl:text-6xl lg:text-6xl text-5xl font-heading text-t1 p-5 xl:py-0 lg:py-0 py-20">WELCOME TO THE LOONY BIN</h1>
            <p className="text-xl font-body text-t2 xl:p-5 lg:p-5">AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
            <div className="flex flex-row xl:justify-between lg:justify-between xl:p-5 lg:p-5 justify-evenly xl:w-1/2 lg:w-1/2 w-full">
              <Link target="_blank" href={projectData.uniswap} >
                <Image alt='' src="/icons/uniswap.svg" height={30} width={30}/>
              </Link>
              <Link target="_blank" href={projectData.dextools} >
                <Image alt='' src="/icons/dextools.svg" height={30} width={30}/>
              </Link>
              <Link target="_blank" href={projectData.telegram} >
                <Image alt='' src="/icons/telegram.svg" height={30} width={30}/>
              </Link>
              <Link target="_blank" href={projectData.twitter} >
                <Image alt='' src="/icons/twitter.svg" height={30} width={30}/>
              </Link>
              <Link target="_blank" href={projectData.etherscan} >
                <Image alt='' src="/icons/etherscan.svg" height={30} width={30}/>
              </Link>
            </div>
            <p className="absolute bottom-0 xl:right-20 lg:right-20 right-0 -rotate-45 text-xl font-body text-t2 p-5">PSCHLOPSCHLOP<br/>PSCHLOPSCHLOP<br/>PSCHLOPSCHLOP<br/></p>
            <div className="flex items-center justify-center">
              <Image src='/logo-nobg-512px.png' alt='' height={300} width={300} />
            </div>
          </div>
          <Section.Container id={whitepaper.title} direction="right">
            <Section.Header title={whitepaper.title} direction="right"/>
            <Section.Body>
              <Section.Article body={[whitepaper.body]} link={{ title: "whitepaper", callback: navigate }} direction="right"/>
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
        </div>
        <div className={`absolute inset-0 bg-black z-50 ${loading ? "opacity-90" : "opacity-0" } pointer-events-none transition-all duration-500`}/>
      </main>
  );
}


