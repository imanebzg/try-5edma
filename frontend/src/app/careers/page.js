"use client";
import Careerpost from "../_components/Careerpost";
import Searchbar from "../_components/Searchbar";
import { careers } from "../_utils/test-careers-data";

function page() {
  return (
    <main className="p-4">
      <form className="flex w-full justify-between gap-4 font-main text-base py-6 px-16 rounded-md">
        <Searchbar />
      </form>
      <section className="grid grid-cols-3 max-md:grid-cols-1 gap-4 max-md:gap-2 justify-items-center w-full">
        {careers.map((career) => (
          <Careerpost key={career.id} career={career} />
        ))}
      </section>
    </main>
  );
} //grid grid-cols-3 justify-items-center w-screen

export default page;
