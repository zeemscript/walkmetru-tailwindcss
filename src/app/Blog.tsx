import Image from "next/image";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      imgSrc: "/images/biny.webp",
      title: "Unlocking The Power Of Live 1-To-1 Learning With Walkmetru",
      description:
        "In a world inundated with pre-recorded videos, Walkmetru stands out by offering a dynamic 1-to-1 learning experience. Discover why personalized learning on",
      link: "#",
    },
    {
      id: 2,
      imgSrc: "/images/biny.webp",
      title: "Unlocking The Power Of Live 1-To-1 Learning With Walkmetru",
      description:
        "In a world inundated with pre-recorded videos, Walkmetru stands out by offering a dynamic 1-to-1 learning experience. Discover why personalized learning on",
      link: "#",
    },
    {
      id: 3,
      imgSrc: "/images/biny.webp",
      title: "Unlocking The Power Of Live 1-To-1 Learning With Walkmetru",
      description:
        "In a world inundated with pre-recorded videos, Walkmetru stands out by offering a dynamic 1-to-1 learning experience. Discover why personalized learning on",
      link: "#",
    },
  ];

  return (
    <div className="bg-white text-black px-4">
      <div className="text-4xl sm:text-8xl mb-8 pt-8 ml-4">Blog</div>
      <div className="container mx-auto flex flex-wrap justify-center items-center">
        {blogPosts.map((post) => (
          <div key={post.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="py-4 px-4 shadow-md shadow-green-600 my-6 hover:transform hover:-translate-y-2 transition rounded-lg">
              <Image
                src={post.imgSrc}
                alt="image"
                width={336}
                height={240}
                className="rounded-lg"
              />
              <p className="font-bold mt-4">{post.title}</p>
              <span className="font-thin">{post.description}</span>
              <div className="flex items-center mt-4 hover:underline hover:underline-offset-1 transform hover:-translate-y-1">
                <a href={post.link} className="text-[#00B595]">
                  Read more
                </a>
                <Image
                  src="/images/arrow.png"
                  alt="arrow"
                  width={10}
                  height={10}
                  className="ml-2"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
