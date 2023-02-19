function Button({
  height,
  width,
  radius,
  color,
  text,
  link,
  fontSize,
  fontColor,
  download,
}) {
  return (
    <div
      className={`${height} ${width} ${color} ${radius} ${fontSize} font-semibold  font-roboto-sans cursor-pointer hover:scale-110 transition-all`}
    >
      <a
        href={`${link}`}
        target="_blank"
        className="w-full h-full  flex  justify-center items-center"
        download={`${download}`}
      >
        <p className={`${fontColor}`}>{text}</p>
      </a>
    </div>
  );
}

export default Button;
