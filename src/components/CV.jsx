import Button from "./Button";
import cv from "/cvp.png";
import cvPDF from "/CV.pdf";

function CV() {
  return (
    <div
      id="cv"
      className="flex justify-center items-center p-8 2xl:p-48 bg-gray-200 "
    >
      <div
        data-aos="zoom-out-up"
        data-aos-delay="200"
        className="flex flex-col  justify-center items-center gap-9"
      >
        <img src={cv} className="w-10/12 2xl:w-5/12 shadow-2xl"></img>
        <Button
          height="w-64"
          width="h-24"
          color="bg-sky-900"
          radius="rounded-full"
          text="Letöltés"
          fontSize="text-2xl"
          link={cvPDF}
          fontColor="text-gray-100 tracking-wide "
          download="Önéletrajz Tóth Bálint"
        ></Button>
      </div>
    </div>
  );
}

export default CV;
