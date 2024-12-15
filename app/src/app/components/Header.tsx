"use client";

// import { faBellConcierge, faFlaskRoundPoison, faHouse, faMessages, faRectangleHistory, faStore, faBlockQuote } from '@awesome.me/kit-4a62263e08/icons/classic/solid';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
    interface HeaderItem {
        id: number;
        url: string;
        icon: string;
        title: string;
        order: number;
    }

    const [data, setData] = useState<HeaderItem[]>([]);

    useEffect(() => {
        fetch("https://x8ki-letl-twmt.n7.xano.io/api:HYBsW_cR/headernav")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    if (!data) {
        return <span>Loading...</span>;
    }

    const sortedData = data.sort((a, b) => a.order - b.order);

    return (
        <header className={"flex flex-row items-center justify-between py-8 container mx-auto"}>
            <Link href="/" className={"font-medium text-xl flex flex-row items-center gap-2"}><i className="fa-solid fa-flask-round-poison text-green-500 text-2xl"></i>AV Labs</Link>
            <nav className={"flex flex-row items-center gap-16"}>
                {sortedData.map((item: HeaderItem) => (
                    <Link key={item.id} href={item.url} className={"flex flex-row items-center gap-2 text-lg"}>
                        <i className={item.icon + " text-green-500 text-xl"}></i>
                        {item.title}
                    </Link>
                ))}
            </nav>
        </header>
    );
}

