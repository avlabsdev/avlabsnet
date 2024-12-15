"use client";

import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

export default function Projects() {
    interface Projects {
        id: number;
        title: string;
        description: string;
        image_url: string;
        live_url: string;
        details_url: string;
        order: number;
    }

    const [data, setData] = useState<Projects[]>([]);

    useEffect(() => {
        fetch("https://x8ki-letl-twmt.n7.xano.io/api:HYBsW_cR/projects-avlabs")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    if (!data) {
        return <span>Loading...</span>;
    }
    return (
        <section>
            <h1><i className="fa-solid fa-terminal text-4xl text-zinc-800"></i> Projects</h1>
            <div className="flex flex-col gap-64 my-16">
                {data.map((item: Projects) => (
                    <div key={item.id} className="flex flex-row gap-32 items-center">
                        <div className="w-1/2">
                            <Image src={item.image_url} alt={item.title} width={3072} height={2048} priority className="max-w-full w-auto rounded-xl" />
                        </div>
                        <div className="w-1/2 flex flex-col gap-8">
                            <div>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                            </div>
                            <div className="flex flex-row gap-2 items-center">
                                <Link href={item.details_url} className="bg-zinc-900 text-green-500 border border-zinc-800 text-lg rounded-xl w-fit py-3 px-8">Project Details</Link>
                                <Link href={item.live_url} target="_blank" className="bg-zinc-900 text-green-500 border border-zinc-800 text-lg rounded-xl w-fit py-3 px-8">Live Demo</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
