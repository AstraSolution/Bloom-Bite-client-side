import "./Style.css";
const Cards = () => {
  return (
    <section className="  h-screen flex justify-center items-center gap-x-16 text-white">
      <div className="w-[350px] h-[450px] bg-transparent cursor-pointer group perspective">
        <div className="relative preserve-3d border-2 border-red-600 group-hover:my-rotate-y-180 w-full h-full duration-[1500ms]">
          <div className="absolute backface-hidden border-2 w-full h-full">
            <img
              src="https://feelgoodfoodie.net/wp-content/uploads/2018/09/Beef-Kafta-6.jpg"
              className="w-full h-full"
              alt="Movie Poster"
            />
          </div>
          <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
            <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
              <h1 className="text-3xl font-semibold">The Man</h1>
              <p className="my-2">9.0 Rating</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                itaque assumenda saepe animi maxime libero non quasi, odit natus
                veritatis enim culpa nam inventore doloribus quidem temporibus
                amet velit accusamus.
              </p>

              <div className="my-button absolute -bottom-20 delay-500 duration-[1200ms] group-hover:bottom-20 scale-0 group-hover:scale-125">
                <a href="#">
                  <span>Button</span>
                  <span>Button</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[350px] h-[450px] bg-transparent cursor-pointer group perspective">
        <div className="relative preserve-3d border-2 border-red-600 group-hover:my-rotate-y-180 w-full h-full duration-[1500ms]">
          <div className="absolute backface-hidden border-2 w-full h-full">
            <img
              src="https://feelgoodfoodie.net/wp-content/uploads/2018/09/Beef-Kafta-6.jpg"
              className="w-full h-full"
              alt="Movie Poster"
            />
          </div>
          <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
            <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
              <h1 className="text-3xl font-semibold">The Man</h1>
              <p className="my-2">9.0 Rating</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                itaque assumenda saepe animi maxime libero non quasi, odit natus
                veritatis enim culpa nam inventore doloribus quidem temporibus
                amet velit accusamus.
              </p>

              <div className="my-button absolute -bottom-20 delay-500 duration-[1200ms] group-hover:bottom-20 scale-0 group-hover:scale-125">
                <a href="#">
                  <span>Button</span>
                  <span>Button</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
