import Image from "next/image";

const Monetise = () => {
  return (
    <>
      <section className="bg-black text-white grid grid-cols-1 md:grid-cols-2 p-8 gap-8 items-center">
        <div className="flex flex-col justify-center mx-4 md:mx-16 mt-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Monetise <br /> your skills
          </h1>
          <p className="text-sm md:text-base lg:text-lg mb-6 font-light text-gray-300 pt-2">
            Whether youre a seasoned pro or gaining experience, share your
            skills on Walkmetru.
          </p>
          <button className="bg-[#00B595] hover:bg-green-600 transition-colors duration-300 rounded py-2 px-4 text-base font-medium w-48 mx-auto md:mx-0">
            Create 1 on 1 class
          </button>
        </div>
        <div className="mt-6 md:mt-0 ">
          <Image
            src="/images/monetise-img.png"
            alt="Monetise"
            width={900}
            height={900}
            className=""
          />
        </div>
      </section>
    </>
  );
};

export default Monetise;
