import Image from "next/image";

const LearnFaster = () => {
  return (
    <section className="bg-black text-white py-10">
      <div className="container mx-auto flex flex-wrap justify-center items-center">
        <div className="w-full md:w-1/2 px-5 mb-8 md:mb-0 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold mb-5">
            Learn faster with 1-on-1 classes
          </h2>
          <p className="font-light mb-5">
            Enhance your skills with personalized learning experiences
          </p>
          <a
            href="https://app.walkmetru.com/explore"
            className="text-decoration-none"
          >
            <button className="inline-flex items-center justify-center px-6 py-3 bg-[#00B595] text-white rounded-md hover:bg-white hover:text-black transition">
              Explore courses
            </button>
          </a>
        </div>
        <div className="w-full md:w-1/2 px-5 flex justify-center">
          <Image
            src="/images/callsec.png"
            alt="Learn faster with 1-on-1 classes"
            width={500}
            height={300}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default LearnFaster;
