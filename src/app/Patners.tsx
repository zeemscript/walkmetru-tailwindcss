import Image from "next/image";

const Patners = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white text-black h-auto px-5 py-20 sm:py-40">
      <span className="text-2xl sm:text-5xl my-4 sm:my-10 font-normal">Partners</span>
      <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
        <Image
          src="/images/Frame 265.png"
          alt="patners image"
          width={606}
          height={54.49}
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default Patners;
