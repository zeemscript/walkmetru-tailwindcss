import Image from "next/image";

const Anyone = () => {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 md:gap-8 bg-[#F7FFFF] py-10 mt-8">
        <div className="flex justify-center items-center">
          <Image
            src="/images/Frame-176-1-1.webp"
            alt="Anyone"
            width={400}
            height={400}
            className="w-full max-w-full md:max-w-none"
          />
        </div>
        <div className="flex flex-col justify-center items-center md:text-left md:px-6">
          <span className="font-medium text-start text-3xl md:text-5xl text-black leading-tight">
            Anyone can share
            <br />
            their skills and
            <br />
            experience
          </span>
          <span className="text-black text-start font-light text-base md:text-lg mt-4 md:mt-2 sm:pl-32 px-7">
            Full-time worker or consultant? 2 years or 10 years of experience?
            Walkmetru opens doors to side gig opportunities. Monetize your
            experience and start receiving bookings.
          </span>
          <button className="bg-[#00B595] mt-4 px-6 py-2 rounded-md text-white hover:bg-opacity-80 transition duration-300">
            Create profile now
          </button>
        </div>
      </section>
    </>
  );
};

export default Anyone;
