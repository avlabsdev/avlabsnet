"use client";

import Image from "next/image";
// import Link from "next/link";

import { useEffect, useState } from "react";

export default function Services() {
    interface ServicesItem {
        id: number;
        title: string;
        description: string;
        img_url: string;
        order: number;
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
    return (
        <section>
            <h1>Services</h1>
            <div className="flex flex-col gap-64 my-32">
                {data.sort((a, b) => a.order - b.order).map((item: ServicesItem) => (
                    <div key={item.id} className="flex flex-row gap-32 items-center">
                        <div className="w-1/2">
                            <Image priority src={item.img_url} alt={item.title} width={500} height={300} className="w-auto" />
                        </div>
                        <div className="w-1/2">
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
