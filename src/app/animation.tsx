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
      families.forEach((_) => {
        const index = Math.floor(Math.random() * families.length);
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        (textElements[0] as any).style.fontFamily = families[index]?.font;
        if(textElements[0]?.tagName === 'H1'){
          // eslint-disable-next-line  @typescript-eslint/no-explicit-any
          (textElements[0] as any).style.letterSpacing = families[index]?.spacing;
        }
        if(textElements[0]?.className.includes('animate')){
          // eslint-disable-next-line  @typescript-eslint/no-explicit-any
          (textElements[0] as any).style.letterSpacing = families[index]?.spacingSmall;
        }
      });
      borderElements.forEach(element => {
        const index = Math.floor(Math.random() * borderImages.length);
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        (element as any).style.setProperty('--background-image', `url(${borderImages[index]})`)
      })
      if(overlay){
        const index = Math.floor(Math.random() * overlays.length);
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        (overlay as any).style.background = overlays[index];
      }
      if(backgroundImage){
        const bIndex = Math.floor(Math.random() * translations.length);
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
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
