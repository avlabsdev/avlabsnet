import Image from "next/image";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
// import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-16">
        <h1 className="sr-only">Home</h1>
        <div className="flex flex-row gap-8">
          <div className="flex flex-col gap-4 w-1/2">
            <h2>Web application software development</h2>
            <p>Everything you need for your next project. User interface design, front-end development, back-end development, and more. Reach out and inquire today.</p>
          </div>
          <Image src="/3d-blocks-blocks-composition-54.png" alt="3d blocks" width="1604" height="1439" className="w-1/2 h-auto" priority />
        </div>
      </div>
    </>
  );
}
