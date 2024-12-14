// import { faGithub, faDribbble } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className={"py-8 container mx-auto flex flex-row items-center justify-between"}>
            <p>&copy; AV Labs {new Date().getFullYear()}. All rights reserved.</p>
            <span className="flex flex-row gap-16 items-center">
                <Link href="https://github.com/avlabsdev" target="_blank" className={"flex flex-row items-center gap-2 text-lg"}><i className="fa-brands fa-github text-green-500 text-xl"></i>GitHub</Link>
                <Link href="https://dribbble.com/avlabsdev" target="_blank" className={"flex flex-row items-center gap-2 text-lg"}><i className="fa-brands fa-dribbble text-green-500 text-xl"></i>Dribbble</Link>
            </span>
        </footer>
    );
}