import Image from "next/image";
import { useState } from "react";

const data = [
  {
    name: "Azeem",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, veritatis assumenda ma",
    image: "/images/heroman.png",
  },
  {
    name: "Aisha",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, veritatis assumenda ma",
    image: "/images/heroman.png",
  },
  {
    name: "Aleem",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, veritatis assumenda ma",
    image: "/images/heroman.png",
  },
];

const Testy = () => {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prevCurrent) => (prevCurrent + 1) % data.length);
  };

  const prevTestimonial = () => {
    setCurrent((prevCurrent) => (prevCurrent - 1 + data.length) % data.length);
  };

  return (
    <div className="bg-[#8EEDDB] text-center p-6 sm:p-10 rounded-lg flex flex-col items-center relative">
      <div className="bg-[#F7FFFF] rounded-md shadow-lg w-full sm:w-80 py-8 px-4 mb-6 md:mb-0">
        <p className="text-black font-thin mb-4">{data[current].review}</p>
        <div className="flex justify-start items-center gap-2 px-3">
          <Image
            src={data[current].image}
            alt={data[current].name}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full"
          />
          <span className="text-sm font-light">{data[current].name}</span>
        </div>
      </div>
      <div className="flex gap-4 mt-4">
        <button
          onClick={prevTestimonial}
          className="bg-[#00B595] text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition"
        >
          Previous
        </button>
        <button
          onClick={nextTestimonial}
          className="bg-[#00B595] text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

const Peoplesay = () => {
  return (
    <>
      <section className="bg-white text-black pt-4">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-semibold mb-4">What People Say</h2>
          <p className="text-lg font-thin mx-4 md:mx-[14rem]">
            Our users work with some of the companies you know. They learn and
            gain insights with walkmetru, they share their expertise over a live
            1-to-1 call here at walkmetru.
          </p>
          <div className="flex justify-center items-center mt-4">
            <Image
              src="/images/brands.webp"
              alt="brands-image"
              width={800}
              height={50}
              className="w-full max-w-[800px] h-auto px-4"
            />
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Testy />
        </div>
        <div className="flex flex-col justify-center items-center text-start mt-10">
          <div className="text-xl">FAQ</div>
          <div className="font-normal text-2xl md:text-4xl lg:text-6xl">
            FREQUENTLY ASKED QUESTIONS
          </div>
        </div>
      </section>
    </>
  );
};

export default Peoplesay;
