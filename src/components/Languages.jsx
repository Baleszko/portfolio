import NamedIcon from "./NamedIcon";
import css from "../assets/css.svg";
import html from "../assets/html.svg";
import js from "../assets/js.svg";
import react from "../assets/react.svg";

function Languages() {
  return (
    <div
      data-aos="zoom-in-right"
      data-aos-delay="200"
      className="w-1/4  shadow-2xl bg-gray-300 rounded-3xl flex justify-center items-start"
    >
      <div className="flex flex-col justify-center p-16 gap-8">
        <NamedIcon icon={html} name="Html"></NamedIcon>
        <NamedIcon icon={css} name="Css"></NamedIcon>
        <NamedIcon icon={js} name="Javascript"></NamedIcon>
        <NamedIcon icon={react} name="React"></NamedIcon>
      </div>
    </div>
  );
}

export default Languages;
