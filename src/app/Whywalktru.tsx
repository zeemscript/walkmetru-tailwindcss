import Image from "next/image";

const WhyWalkmetru = () => {
  return (
    <section className="px-4 md:px-10 bg-white py-12">
      <div className="flex flex-wrap justify-center md:justify-between items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8 text-center md:text-left">
          <h2 className="text-2xl font-light text-black pb-4">Why Walkmetru</h2>
          <h3 className="text-4xl font-normal text-black mb-6 mt-2">
            1-on-1 Learning experience
          </h3>
          <div className="flex justify-center md:justify-start">
            <Image
              src="/images/Frame-24.webp"
              alt="Why walkmetru"
              width={500}
              height={350}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/images/Group-21.webp"
            alt="World best professional"
            width={400}
            height={350}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyWalkmetru;
