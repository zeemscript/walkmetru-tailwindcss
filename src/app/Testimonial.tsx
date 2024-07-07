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
    <div className="bg-[#8EEDDB] text-center p-6 sm:p-10 rounded-lg flex flex-col items-center relative md:flex-row md:justify-around md:space-x-4">
      {data.map((testimonial, index) => (
        <div
          key={index}
          className={`bg-[#F7FFFF] rounded-md shadow-lg w-full sm:w-80 py-8 px-4 mb-6 md:mb-0 ${
            index !== current ? "hidden md:block" : "block"
          }`}
        >
          <p className="text-black font-thin mb-4">{testimonial.review}</p>
          <div className="flex justify-start items-center gap-2 px-3">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full"
            />
            <span className="text-sm font-light">{testimonial.name}</span>
          </div>
        </div>
      ))}
      <div className="flex gap-4 mt-4 md:hidden">
        <button
          onClick={prevTestimonial}
          className="bg-[#00B595] text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition"
        >
          {"<--"}
        </button>
        <button
          onClick={nextTestimonial}
          className="bg-[#00B595] text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition"
        >
          {"->"}
        </button>
      </div>
    </div>
  );
};

const Testimonial = () => {
  return (
    <section className="bg-white py-10 text-black">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-10">
          <span className="block text-lg font-light">Testimonial</span>
          <h2 className="text-black text-2xl sm:text-3xl lg:text-4xl font-semibold mt-2">
            What our clients are saying
          </h2>
        </div>
        <Testy />
      </div>
    </section>
  );
};

export default Testimonial;
