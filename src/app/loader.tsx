"use client";

import Router from 'next/router'
import { useState, useEffect, FC, ReactNode } from 'react';

export const LoaderContext: FC<{ children: ReactNode}> = ({ children }) => {

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        Router.events.on("routeChangeStart", (url)=>{
            setLoading(true)
          });  
        Router.events.on("routeChangeComplete", (url)=>{
            setLoading(false)
          });
        
          Router.events.on("routeChangeError", (url) =>{
            setLoading(false)
          }); 
    }, [Router])

    useEffect(() => {
        console.log(loading);
    }, [loading]);

    return (
        <div>
            {!loading && children}
        </div>
    )
}
