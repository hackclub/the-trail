import Image from "next/image";
import heart from "../public/heart.svg";

const Footer = () => {
  return (
    <div>
      built with <Image src={heart} alt="heart" height={30} width={30} /> by real makers figuring out
      electronics
    </div>
  );
};

export default Footer;
