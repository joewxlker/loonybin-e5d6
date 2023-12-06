import "~/styles/globals.css";

import { type Metadata } from "next";

import config from "public/config.json";
import { LoaderContext } from "./loader";
import { Animation } from "./animation";

export const metadata: Metadata = config.meta;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.cdnfonts.com/css/cheveuxdange" rel="stylesheet"/>
        <link href="https://fonts.cdnfonts.com/css/diediedie" rel="stylesheet"/>
        <link href="https://fonts.cdnfonts.com/css/edge" rel="stylesheet"/>
        <link href="https://fonts.cdnfonts.com/css/kookaburra" rel="stylesheet"/>
        <link href="https://fonts.cdnfonts.com/css/jowrotealovesong" rel="stylesheet"/>
      </head>
        <body>
          <LoaderContext>
            {children}
          </LoaderContext>
          <div id="overlay" className="fixed inset-0 -z-10"/>
          <div id="gradient" className="fixed inset-0 -z-20"/>
          <div id="background-image" className="fixed inset-0 -z-30" />
          <Animation/>
        </body>
    </html>
  );
}
