import Languages from "./Languages";
import Tools from "./Tools";

function Technology() {
  return (
    <div
      id="technology"
      className="w-full bg-gray-200 text-zinc-900 flex gap-28 content-center 
    justify-around p-52"
    >
      <Languages></Languages>
      <Tools></Tools>
    </div>
  );
}

export default Technology;
