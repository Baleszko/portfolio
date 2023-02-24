import Languages from "./Languages";
import Tools from "./Tools";

function Technology() {
  return (
    <div
      id="technology"
      className="w-full bg-gray-200 text-zinc-900 flex flex-col items-center lg:flex-row gap-8 lg:gap-28 content-center 
    lg:justify-around p-8 py-20 2xl:p-52"
    >
      <h3 className="lg:hidden font-roboto-mono text-lg self-start font-bold">
        Technológiák
      </h3>
      <Languages></Languages>
      <Tools></Tools>
    </div>
  );
}

export default Technology;
