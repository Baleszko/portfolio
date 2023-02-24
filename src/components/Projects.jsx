import Button from "./Button";

function Projects() {
  return (
    <div
      id="projects"
      className="bg-gray-200 text-zinc-900 h-full pb-40 xl:h-screen p-6 py-24 lg:p-48"
    >
      <h3 className="lg:hidden font-roboto-mono text-lg self-start font-bold pb-4">
        Projektek
      </h3>
      <div
        data-aos="flip-up"
        data-aos-delay="200"
        className="relative bg-anime-project w-full 2xl:w-2/3 aspect-video bg-center bg-cover bg-no-repeat shadow-2xl m-auto rounded-3xl"
      >
        <div className="group w-full h-full rounded-3xl transition-all 2xl:hover:bg-gradient-to-b from-transparent to-gray-900">
          <div className="absolute bottom-16 w-full flex justify-center gap-10 2xl:gap-60 translate-y-40 2xl:translate-y-12 2xl:group-hover:translate-y-0 transition-all">
            <Button
              height="w-36 lg:w-52"
              width="h-16 lg:h-20"
              color="bg-sky-900 2xl:group-hover:bg-gray-300 2xl:opacity-0 2xl:group-hover:opacity-100"
              radius="rounded-full 2xl:rounded-3xl"
              text="Weboldal"
              fontSize="text-xl lg:text-2xl"
              link="https://baleszko.github.io/anime-site/"
              fontColor="text-gray-100 2xl:text-gray-900 2xl:opacity-0 2xl:group-hover:opacity-100"
            ></Button>
            <Button
              height="w-36 lg:w-52"
              width="h-16 lg:h-20"
              color="bg-sky-900 2xl:group-hover:bg-gray-300 2xl:opacity-0 2xl:group-hover:opacity-100"
              radius="rounded-full 2xl:rounded-3xl"
              text="Github"
              fontSize="text-xl lg:text-2xl"
              link="https://github.com/Baleszko/anime-site"
              fontColor="text-gray-100 2xl:text-gray-900 2xl:opacity-0 2xl:group-hover:opacity-100"
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
