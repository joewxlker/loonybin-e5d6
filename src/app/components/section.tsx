import Image from "next/image";
import Link from "next/link";
import { type FC, type ReactNode } from "react";
import uuid4 from "uuid4";

const Container: FC<{ id: string; children: ReactNode, direction: 'left' | 'right' }> = ({
  id,
  children,
  direction
}) => {
  return (
    <section className={`flex w-full flex-col ${direction === 'left' ? 'items-start' : 'items-end'} gap-5 py-12`} id={id}>
      {children}
    </section>
  );
};

const Header: FC<{ title: string, direction: 'left' | 'right' }> = ({ title, direction }) => {
  return (
    <div className="flex flex-row items-center py-12 border-b-2 border xl:w-1/2 lg:w-1/2 w-full p-5">
      <h2 className={`font-heading text-4xl text-t2 w-full text-center`}>
        {title}
      </h2>
    </div>
  );
};

const Body: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-row flex-wrap items-stretch gap-5 lg:justify-between xl:justify-between p-5">
      {children}
    </div>
  );
};

const Article: FC<{
  body: string[];
  link?: { title: string; callback: () => void };
  title?: string;
  direction: 'left' | 'right';
}> = ({ body, direction, link }) => {
  return (
    <div className="flex flex-col">
      {body.map(item => {
          return (
            <article key={uuid4()} className="flex xl:w-[500px] lg:w-[500px] max-w-[100vw] flex-col px-5 py-2 font-body">
              <p className={`font-body text-2xl text-t1 w-full ${direction === 'left' ? 'text-left' : 'text-right' }`}>
                {item}
              </p>
              {link && <button className="border flex justify-center py-6" onClick={link.callback} >
                <p className="font-body text-2xl text-t1 w-full">[link to whitepaper]</p>
              </button>}
            </article>
            )
        })}
    </div>
              
  );
};

const Graphics: FC<{
  src: string;
  height: number;
  width: number;
  alt: string;
}> = ({ src, alt }) => {
  return (
    <div className={`flex w-[500px] max-w-[90vw] flex-row`}>
      <Image src={src} height={300} width={500} alt={alt} />
    </div>
  );
};

export const Section = {
  Container,
  Header,
  Article,
  Graphics,
  Body,
};
