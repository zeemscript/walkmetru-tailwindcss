import Image from "next/image";

const Unlock = () => {
  return (
    <section className="bg-black py-10 my-10 flex flex-col items-center mx-4 md:mx-10 lg:mx-20">
      <div className="text-white font-semibold text-2xl md:text-3xl mb-10 pb-5 text-center px-4">
        Unlock a world of opportunities by sharing your Walkmetru class on
        Social Media
      </div>
      <div className="flex flex-col md:flex-row gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-700 px-4">
        <div className="flex-1 px-4 flex flex-col items-center text-center md:text-left">
          <Image
            src="/images/icons copy.png"
            alt="Create Your Class"
            width={30}
            height={30}
            
            className="mt-4"
          />
          <p className="font-normal text-xl md:text-2xl py-4">
            Create Your Class
          </p>
          <p className="text-gray-300 font-thin">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo odio
            harum, enim, adipisci quo quod modi quas blanditiis a o
          </p>
        </div>
        <div className="flex-1 px-4 flex flex-col items-center text-center md:text-left">
          <Image
            src="/images/Globe.png"
            alt="Share the Link on Social Media"
            width={30}
            height={30}
            className="mt-4"
          />
          <p className="font-normal text-xl md:text-2xl py-4">
            Share the Link on Social Media
          </p>
          <p className="text-gray-300 font-thin">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo odio
            harum, enim, adipisci quo quod modi quas blanditiis a o
          </p>
        </div>
        <div className="flex-1 px-4 flex flex-col items-center text-center md:text-left">
          <Image
            src="/images/Coins.png"
            alt="Maximize Earnings"
            width={30}
            height={30}
            className="mt-4"
          />
          <p className="font-normal text-xl md:text-2xl py-4">
            Maximize Earnings
          </p>
          <p className="text-gray-300 font-thin">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo odio
            harum, enim, adipisci quo quod modi quas blanditiis a o
          </p>
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center text-center">
        <h3 className="text-white mb-5 px-4">
          Create your 1-on-1 class and share on Social Media for your audience 
        </h3>
        <button className="bg-[#00B595] px-6 py-3 rounded-md text-white hover:bg-white hover:text-black transition">
          Create 1 on 1 class
        </button>
      </div>
    </section>
  );
};

export default Unlock;
