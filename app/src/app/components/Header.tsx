import { faBellConcierge, faFlaskRoundPoison, faHouse } from '@awesome.me/kit-4a62263e08/icons/classic/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function Header() {
    return (
        <header className={"flex flex-row items-center justify-between py-8 container mx-auto"}>
            <Link href="/" className={"font-medium text-xl flex flex-row items-center gap-2"}><FontAwesomeIcon icon={faFlaskRoundPoison} className={"text-green-500 text-2xl"} />AV Labs</Link>
            <nav className={"flex flex-row items-center gap-16"}>
                <Link href="/" className={"flex flex-row items-center gap-2"}><FontAwesomeIcon icon={faHouse} className={"text-green-500"} />Home</Link>
                <Link href="/services" className={"flex flex-row items-center gap-2"}><FontAwesomeIcon icon={faBellConcierge} className={"text-green-500"} />Services</Link>
            </nav>
        </header>
    );
}

