const AboutUsPage = () => {
  return (
    <div>
      <section className="font-primary flex items-center xl:h-screen font-poppins dark:bg-[#0f1116] bg-gray-100 duration-300">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <div className="relative lg:max-w-md">
                <img
                  src="https://i.postimg.cc/rF0MKfBV/pexels-andrea-piacquadio-3760263.jpg"
                  alt="aboutimage"
                  className="relative z-10 object-cover w-full rounded h-96"
                />
                <div className="absolute bottom-0 right-0 z-10 p-8 bg-[#202020] border-4 border-[#FF9D00] rounded shadow lg:-mb-8 lg:-mr-11 sm:p-8 dark:text-gray-300 dark:bg-gray-800 duration-300">
                  <p className="text-lg font-semibold md:w-72 text-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="absolute top-0 left-0 w-16 h-16 text-blue-500 dark:text-gray-300 opacity-10 duration-300"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
                    </svg>{" "}
                    Successfully Providing business solutions from 25 years
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-6 mb-10 lg:w-1/2 lg:mb-0">
              <div className="pl-4 mb-6 border-l-4 border-[#FF9D00]">
                <span className="text-sm text-gray-100 uppercase dark:text-gray-400">
                  Who we are?
                </span>
                <h1 className="mt-2 text-3xl font-black md:text-5xl text-black dark:text-gray-50">
                  About Us
                </h1>
              </div>
              <p className="mb-6 text-base leading-7 text-gray-900 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam. Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem
                ipsum dolor sit amet.
              </p>
              <a
                href="#"
                className="px-4 py-2 text-gray-100 bg-[#FF9D00] rounded dark:bg-blue-400 dark:hover:bg-blue-500 hover:bg-[#eeb75e]"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
