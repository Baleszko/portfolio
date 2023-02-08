function NamedIcon({ icon, name }) {
  return (
    <div className="flex items-center gap-3">
      <img className="w-16" src={icon}></img>
      <p className="font-roboto-sans text-2xl "> {name} </p>
    </div>
  );
}

export default NamedIcon;
