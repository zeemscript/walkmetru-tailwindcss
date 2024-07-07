import Image from "next/image";

const Howto = () => {
    return (
      <>
        <div className="flex flex-col mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 mt-20">
          <div>
            <Image
              src="/images/Frame-118.webp"
              alt="image"
              className="w-full h-auto"
              width={918}
              height={682}
            />
          </div>
          <div>
            <Image
              src="/images/Frame-117-2.webp"
              alt="image"
              className="w-full h-auto"
              width={918}
              height={682}
            />
          </div>
        </div>
        <div className="bg-white flex justify-center items-center">
          <Image
            src="/images/Frame-121.webp"
            alt="image"
            width={1099}
            height={172}
            className="px-10 py-10"
          />
        </div>
      </>
    );
};

export default Howto;
