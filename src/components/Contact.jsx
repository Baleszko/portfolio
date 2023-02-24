import githubLogo from "../assets/github.svg";
import linkedinLogo from "../assets/linkedin1.svg";

function Contact() {
  return (
    <div
      id="contact"
      className="p-48 bg-gray-800 text-gray-200 font-roboto-mono flex justify-center"
    >
      <div className="leading-relaxed">
        <h2 className="pb-6 text-lg"> Elérhetőség </h2>
        <p>tothbalesz@gmail.com</p>
        <p>+36/20 311 4618</p>
        <div>
          <a
            href="https://github.com/Baleszko"
            target="_blank"
            className="cursor-pointer"
          >
            <div className="h-8 w-8 inline-block mr-2 my-1">
              <img className="inline" src={githubLogo}></img>
            </div>
            <p className="inline">Github</p>
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/b%C3%A1lint-t%C3%B3th-561974266/"
            target="_blank"
            className="cursor-pointer"
          >
            <div className="h-8 w-8 inline-block mr-2 my-1">
              <img className="inline" src={linkedinLogo}></img>
            </div>
            <p className="inline">LinkedIn</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
