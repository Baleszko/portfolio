import NamedIcon from "./NamedIcon";
import git from "../assets/git.svg";
import vite from "../assets/vite.svg";
import nextjs from "../assets/nextjs.svg";
import vscode from "../assets/vscode.svg";

function Tools() {
  return (
    <div
      data-aos="zoom-in-left"
      data-aos-delay="200"
      className="w-11/12 lg:w-1/4   shadow-2xl bg-gray-300 rounded-3xl flex justify-center items-center lg:items-start"
    >
      <div className="flex flex-col justify-center p-16 gap-8">
        <NamedIcon icon={git} name="Git"></NamedIcon>
        <NamedIcon icon={vite} name="Vite"></NamedIcon>
        <NamedIcon icon={nextjs} name="Next.js"></NamedIcon>
        <NamedIcon icon={vscode} name="VS Code"></NamedIcon>
      </div>
    </div>
  );
}

export default Tools;
