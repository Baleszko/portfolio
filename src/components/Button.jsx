function Button({ height, width, radius, color, text, link, fontSize }) {
  return (
    <div
      className={`${height} ${width} ${color} ${radius} ${fontSize} font-semibold flex justify-center items-center font-roboto-sans cursor-pointer hover:scale-110 transition-all`}
    >
      <a href={`${link}`}>
        <p className="opacity-0 group-hover:opacity-100">{text}</p>
      </a>
    </div>
  );
}

export default Button;
