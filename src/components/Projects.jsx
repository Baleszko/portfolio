import Button from "./Button";

function Projects() {
  return (
    <div id="projects" className="bg-gray-200 text-zinc-900 h-screen p-48">
      <div
        data-aos="flip-up"
        data-aos-delay="200"
        className="relative bg-anime-project 2xl:w-2/3 aspect-video bg-center bg-cover bg-no-repeat shadow-2xl m-auto rounded-3xl"
      >
        <div className="group w-full h-full rounded-3xl transition-all hover:bg-gradient-to-b from-transparent to-gray-900">
          <div className="absolute bottom-16 w-full flex justify-center gap-60 translate-y-12 group-hover:translate-y-0 transition-all">
            <Button
              height="w-52"
              width="h-20"
              color="group-hover:bg-gray-300"
              radius="rounded-3xl"
              text="Weboldal"
              fontSize="text-2xl"
            ></Button>
            <Button
              height="w-52"
              width="h-20"
              color="group-hover:bg-gray-300"
              radius="rounded-3xl"
              text="Github"
              fontSize="text-2xl"
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
