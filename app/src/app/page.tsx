import Image from "next/image";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
// import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <>
      <Image src="./undraw_welcome_cats_thqn.svg" width={889.07556} height={459.37952} alt="Kitty cats welcome" className={"mx-auto max-w-full"} priority></Image>
      <h1>Welcome to my website!</h1>
    </>
  );
}
