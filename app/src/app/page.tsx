import Image from "next/image";
import Link from "next/link";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
// import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <section className="flex flex-col gap-16">
      <h1><i className="fa-solid fa-terminal text-4xl text-zinc-800"></i> Home</h1>
      <div className="flex flex-row gap-16">
        <div className="flex flex-col gap-8 w-1/2">
          <div>
            <h2>Web application software development</h2>
            <p>Everything you need for your next project. User interface design, front-end development, back-end development, and more.</p>
          </div>
          <Link href="#/" className="bg-zinc-900 text-green-500 border border-zinc-800 text-lg rounded-xl w-fit py-3 px-8">Get started</Link>
        </div>
        <Image src="/3d-blocks-blocks-composition-54.png" alt="3d blocks" width="1604" height="1439" className="w-1/2 h-auto" rel="preload" priority />
      </div>
    </section>
  );
}
