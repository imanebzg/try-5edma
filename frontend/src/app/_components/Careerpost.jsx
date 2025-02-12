import Image from "next/image";
import placeholder from "@/public/Image-placeholder.png";
import Category from "./Category";
import OverlayForm from "./OverlayForm";
import ApplyingForm from "./ApplyingForm";

function Careerpost({ career }) {
  return (
    <div className="flex flex-col justify-center items-center bg-light-text shadow-md rounded-lg p-4 gap-2">
      <div className="w-full h-52 relative">
        <Image
          src={career?.image ? career.image : placeholder}
          alt={career.title}
          fill="responsive"
          placeholder="blur"
          className="flex-1 object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold font-main text-xl">{career.title}</h3>
        <div className="flex gap-2">
          <a href={career.companyUrl} className="text-neutral-2 underline">
            {career.company}
          </a>
          <p className="text-neutral-2">{career.location}</p>
        </div>
        <p className="w-full">{career.description}</p>
        <div className="flex gap-2 text-neutral-2">
          <p>{career.date}</p>
          <span>&#183;</span>
          <p>{career.duration} days</p>
        </div>
      </div>
      <div className="flex justify-between w-full ">
        <div className="flex gap-1 flex-wrap">
          {career.categories.map((category, i) => (
            <Category key={i} name={category} />
          ))}
        </div>
        <OverlayForm>
          <OverlayForm.Open opens={career.id}>
            <button className="px-6 py-2 bg-accent-blue-1 text-white rounded-full transition transform hover:scale-105 shadow-lg w-max self-center">
              Postuler +
            </button>
          </OverlayForm.Open>
          <OverlayForm.Form name={career.id}>
            <ApplyingForm />
          </OverlayForm.Form>
        </OverlayForm>
      </div>
    </div>
  );
}

export default Careerpost;
