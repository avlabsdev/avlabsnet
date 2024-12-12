import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <>
      <Image src="./undraw_welcome_cats_thqn.svg" width={889.07556} height={459.37952} alt="Kitty cats welcome" className={"mx-auto"} priority></Image>
      <h1>Welcome to my website!</h1>
      <FontAwesomeIcon icon={faThumbsUp} className="fa-fw" />
      <FontAwesomeIcon icon={faGithub} className="fa-fw" />
    </>
  );
}
