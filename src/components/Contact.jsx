import githubLogo from "../assets/github.svg";
import linkedinLogo from "../assets/linkedin1.svg";

function Contact() {
  return (
    <div
      id="contact"
      className="p-48 bg-gray-800 text-gray-200 font-roboto-mono flex justify-center"
    >
      <div>
        <h2 className="pb-4 text-lg"> Elérhetőség </h2>
        <p>E-mail: tothbalesz@gmail.com</p>
        <p>Mobil: +36/203114618</p>
        <div>
          <a className="cursor-pointer">
            <div className="h-8 w-8 inline-block mr-2 my-1">
              <img className="inline" src={githubLogo}></img>
            </div>
            <p className="inline">Github</p>
          </a>
        </div>
        <div>
          <a className="cursor-pointer">
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
