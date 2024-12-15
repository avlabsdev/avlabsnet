"use client";

import Image from "next/image";
import Link from "next/link";
// import Link from "next/link";

import { useEffect, useState } from "react";

export default function Services() {
    interface ServicesItem {
        id: number;
        title: string;
        description: string;
        img_url: string;
        order: number;
        button_title: string;
        button_url: string;
    }

    const [data, setData] = useState<ServicesItem[]>([]);

    useEffect(() => {
        fetch("https://x8ki-letl-twmt.n7.xano.io/api:HYBsW_cR/services-avlabs")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    if (!data) {
        return <span>Loading...</span>;
    }

    const sortedData = data.sort((a, b) => a.order - b.order);

    return (
        <section>
            <h1><i className="fa-solid fa-terminal text-4xl text-zinc-800"></i> Services</h1>
            <div className="flex flex-col gap-64 my-16">
                {sortedData.map((item: ServicesItem) => (
                    <div key={item.id} className="flex flex-row gap-32 items-center">
                        <div className="w-1/2">
                            <Image priority src={item.img_url} alt={item.title} width={500} height={300} className="w-auto" />
                        </div>
                        <div className="w-1/2 flex flex-col gap-8">
                            <div>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                            </div>
                            <Link href={item.button_url} className="bg-zinc-900 text-green-500 border border-zinc-800 text-lg rounded-xl w-fit py-3 px-8">{item.button_title}</Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
