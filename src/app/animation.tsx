/* eslint-disable  @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

"use client";

import { type FC, useEffect, useState } from "react";

export const Animation: FC = () => {

  const [count, setCount] = useState(0);

  const FLICKER = 50; 

  useEffect(() => {
    const textElements = [...document.querySelectorAll('h1')];
    const backgroundImage = document.getElementById('background-image');
    const overlay = document.getElementById('overlay');
    const families = [
      {font : 'diediedie', spacing: '10px', spacingSmall: '11px'}, 
      {font : 'edge', spacing: '18px', spacingSmall: '17px'}, 
      {font : 'Cheveuxdange', spacing: '1.89px', spacingSmall: '12px'}
    ];
    const overlays = [
      'rgba(255,255,255,0.18)',
      'rgba(255,255,255,0.16)',
      'rgba(255,255,255,0.14)',
      'rgba(255,255,255,0.12)'
    ]
    const borderImages = [
      '/border1.png',
      '/border2.png',
      '/border3.png',
      '/border4.png',
    ]
    const translations = [
      'translateX(0.4px)',
      'translateX(0.8px)',
      'translateX(-0.4px)',
      'translateY(0.4px)',
      'translateY(0.8px)',
      'translateY(-0.4px)',
    ]
    
    const borderElements = [...document.getElementsByClassName('border')];
    const flicker = window.setInterval(() => {
      if(count < families.length - 1){
        setCount(prev => prev + 1);
      } else {
        setCount(0);
      }
      const textElement = textElements[0];
      if(textElement){
        families.forEach(() => {
          const index = Math.floor(Math.random() * families.length);
          (textElement as any).style.fontFamily = families[index]?.font;
          if(textElement?.tagName === 'H1'){
            (textElement as any).style.letterSpacing = families[index]?.spacing;
          }
          if(textElement?.className.includes('animate')){
            (textElement as any).style.letterSpacing = families[index]?.spacingSmall;
          }
        });
      }
      borderElements.forEach(element => {
        const index = Math.floor(Math.random() * borderImages.length);
        (element as any).style.setProperty('--background-image', `url(${borderImages[index]})`)
      })
      if(overlay){
        const index = Math.floor(Math.random() * overlays.length);
        (overlay as any).style.background = overlays[index];
      }
      if(backgroundImage){
        const bIndex = Math.floor(Math.random() * translations.length);
        (backgroundImage as any).style.transform = translations[bIndex];
      }
    }, FLICKER);
    return () => {
      window.clearInterval(flicker);
    };
  }, [count, setCount]);
  
  return <>
  </>;
};
