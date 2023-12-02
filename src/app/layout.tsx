import "~/styles/globals.css";

import { type Metadata } from "next";
import { Animation } from "./animation"

import config from "public/config.json";

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
            {children}
        </body>
    </html>
  );
}
