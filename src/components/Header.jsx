import githubLogo from "../assets/github.svg";
import linkedinLogo from "../assets/linkedin1.svg";

function Header({ navSize, navColor }) {
  return (
    <header
      className={` 2xl:w-full 2xl:flex 2xl:justify-center 2xl:items-center 2xl:fixed 2xl:top-0 2xl:z-50 ${navSize} ${navColor} 2xl:transition-all 2xl:duration-500  hidden`}
    >
      <ul
        data-aos="fade-down"
        className="font-press-start list-none flex gap-20 hover:cursor-pointer"
      >
        <li className="">
          <a href="#kezdőlap" className=" pb-2 link-underline">
            <span className="link-underline link-underline-black"></span>
            kezdőlap
          </a>
        </li>
        <li>
          <a href="#technology" className=" pb-2 link-underline">
            <span className="link-underline link-underline-black"></span>
            technológiák
          </a>
        </li>
        <li>
          <a href="#projects" className=" pb-2 link-underline">
            <span className="link-underline link-underline-black"></span>
            projektek
          </a>
        </li>
        <li>
          <a href="#cv" className=" pb-2 link-underline">
            <span className="link-underline link-underline-black"></span>
            önéletrajz
          </a>
        </li>
        <li>
          <a href="#contact" className=" pb-2 link-underline">
            <span className="link-underline link-underline-black"></span>
            kapcsolat
          </a>
        </li>
      </ul>
      <div data-aos="fade-down" className="absolute top-5 right-5 flex gap-5 ">
        <a
          href="https://github.com/Baleszko"
          target="_blank"
          className="w-8 cursor-pointer"
        >
          <img src={githubLogo}></img>
        </a>
        <a
          href="https://www.linkedin.com/in/b%C3%A1lint-t%C3%B3th-561974266/"
          target="_blank"
          className="w-8 cursor-pointer"
        >
          <img src={linkedinLogo}></img>
        </a>
      </div>
    </header>
  );
}

export default Header;
