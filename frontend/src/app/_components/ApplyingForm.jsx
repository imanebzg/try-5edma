function ApplyingForm() {
  return (
    <div className="flex flex-col gap-4 rounded-lg p-4 max-md:p-2 ">
      <h2 className="text-2xl font-bold text-start">Ce qui te motive</h2>
      <p className="text-neutral-2 text-start">
        Dis-nous ce qui t'a motivé à vouloi postuler à cette offre
      </p>
      <form className="flex flex-col gap-4 items-end">
        <div className="flex flex-col gap-2 w-full items-start">
          <label htmlFor="message">Motivation:</label>
          <textarea
            name="message"
            id="message"
            className="w-full h-32 p-2 border border-neutral-2 rounded-md resize-none"
            placeholder="Ecrit ta motiviation ici"
          ></textarea>
        </div>
        <button className="px-10 py-2 bg-accent-blue-1 text-white rounded-md transition transform hover:scale-105 shadow-lg w-max">
          Continue
        </button>
      </form>
    </div>
  );
}

export default ApplyingForm;
