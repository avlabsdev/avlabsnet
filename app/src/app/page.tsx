import Image from "next/image";
import Link from "next/link";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
// import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <section className="flex flex-col gap-16">
      <h1 className="sr-only">Home</h1>
      <div className="flex flex-row gap-8">
        <div className="flex flex-col gap-4 w-1/2">
          <h2>Web application software development</h2>
          <p>Everything you need for your next project. User interface design, front-end development, back-end development, and more. Reach out and inquire today.</p>
          <Link href="#/" className="bg-white text-black font-medium text-lg rounded-xl w-fit py-2 px-8">Get started</Link>
        </div>
        <Image rel="preload" as="image" src="/3d-blocks-blocks-composition-54.png" alt="3d blocks" width="1604" height="1439" className="w-1/2 h-auto" priority />
      </div>
    </section>
  );
}
