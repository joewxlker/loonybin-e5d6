"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function WhitepaperPage() {

    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        setLoading(false)
    }, []);

    const navigate = () => {
        setLoading(true);
        setTimeout(() => {
            router.push('/');
        }, 500);
    }

    return (
        <div className={`relative w-full p-12 h-[10000px]`}>
            <button type="button" onClick={navigate} className="p-10 fixed">
                <h1 className="text-body font-md text-xl">back</h1>
            </button>
            <div className={`absolute inset-0 bg-black z-50 ${loading ? "opacity-90" : "opacity-0" } pointer-events-none transition-all duration-500`}/>
        </div>
    )
}