import  { useEffect, useCallback } from "react";
import "./FeedBack.css";

function FaceRating() {
  function handleFaceHover(face) {
    const hint = document.querySelector(".faces-hint");
    const hintText =
      face?.getAttribute("data-hint") ||
      hint?.getAttribute("data-default-hint");
    hint.innerText = hintText;
  }
  const handleFacesHover = useCallback((e) => {
    const face = e.target.parentElement.querySelector(".face");
    handleFaceHover(face);
  }, []);

  function handleRateInputChange(e) {
    document.querySelectorAll(".rate-input").forEach((input) => {
      input.parentElement.querySelector(".face").classList.add("grayscale");
    });
    e.target.parentElement.querySelector(".face").classList.remove("grayscale");
  }

  useEffect(() => {
    document.querySelectorAll(".rate-input").forEach((input) => {
      input.addEventListener("click", handleRateInputChange);
    });
    document
      .querySelector(".feedback-faces")
      .addEventListener("mousemove", handleFacesHover);

    return () => {
      document.querySelectorAll(".rate-input").forEach((input) => {
        input.removeEventListener("click", handleRateInputChange);
        document
          .querySelector(".feedback-faces")
          .addEventListener("mousemove", handleFacesHover);
      });
    };
  }, [handleFacesHover]);

  return (
    <div className="d-flex flex-row justify-content-center mt-2">
      <div className="feedback-wrapper">
        <div className="feedback-content">
          <div className="feedback-faces">
            <div className="row">
              <div className="col">
                <div className="face-wrapper">
                  <div
                    className="face-counter invisible"
                    data-title-none="No one rated it like this"
                    data-title-one="One person rated it like this"
                    data-title-many="other people rated it like this"
                  ></div>
                  <input
                    className="rate-input hidden"
                    id="rate-0"
                    type="radio"
                    name="rating"
                    value="0"
                  />
                  <label
                    className="face grayscale face-wtf"
                    htmlFor="rate-0"
                    data-hint="Oh God! Why?!"
                  >
                    <div className="eyes-wrapper">
                      <div className="eye">
                        <div className="pupil">
                          <div className="eyelid"></div>
                        </div>
                      </div>
                      <div className="eye">
                        <div className="pupil">
                          <div className="eyelid"></div>
                        </div>
                      </div>
                    </div>
                    <div className="mouth-wrapper">
                      <div className="mouth"></div>
                    </div>
                  </label>
                </div>
              </div>
              {/* <div className="col">
                <div className="face-wrapper">
                  <div
                    className="face-counter invisible"
                    data-title-none="No one rated it like this"
                    data-title-one="One person rated it like this"
                    data-title-many="other people rated it like this"
                  ></div>
                  <input
                    className="rate-input hidden"
                    id="rate-1"
                    type="radio"
                    name="rating"
                    value="1"
                  />
                  <label
                    className="face grayscale face-disappointed"
                    htmlFor="rate-1"
                    data-hint="It sucks..."
                  >
                    <div className="eyes-wrapper">
                      <div className="eye">
                        <div className="pupil">
                          <div className="eyelid"></div>
                        </div>
                      </div>
                      <div className="eye">
                        <div className="pupil">
                          <div className="eyelid"></div>
                        </div>
                      </div>
                    </div>
                    <div className="mouth-wrapper">
                      <div className="mouth"></div>
                    </div>
                  </label>
                </div>
              </div> */}
              <div className="col">
                <div className="face-wrapper">
                  <div
                    className="face-counter invisible"
                    data-title-none="No one rated it like this"
                    data-title-one="One person rated it like this"
                    data-title-many="other people rated it like this"
                  ></div>
                  <input
                    className="rate-input hidden"
                    id="rate-2"
                    type="radio"
                    name="rating"
                    value="2"
                  />
                  <label
                    className="face grayscale face-sad"
                    htmlFor="rate-2"
                    data-hint="It's ok. I guess."
                  >
                    <div className="eyes-wrapper">
                      <div className="eye">
                        <div className="pupil">
                          <div className="eyelid"></div>
                        </div>
                      </div>
                      <div className="eye">
                        <div className="pupil">
                          <div className="eyelid"></div>
                        </div>
                      </div>
                    </div>
                    <div className="mouth-wrapper">
                      <div className="mouth"></div>
                    </div>
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="face-wrapper">
                  <div
                    className="face-counter invisible"
                    data-title-none="No one rated it like this"
                    data-title-one="One person rated it like this"
                    data-title-many="other people rated it like this"
                  ></div>
                  <input
                    className="rate-input hidden"
                    id="rate-3"
                    type="radio"
                    name="rating"
                    value="3"
                  />
                  <label
                    className="face grayscale face-happy"
                    htmlFor="rate-3"
                    data-hint="This is great!"
                  >
                    <div className="eyes-wrapper">
                      <div className="eye">
                        <div className="pupil">
                          <div className="eyelid"></div>
                        </div>
                      </div>
                      <div className="eye">
                        <div className="pupil">
                          <div className="eyelid"></div>
                        </div>
                      </div>
                    </div>
                    <div className="mouth-wrapper">
                      <div className="mouth"></div>
                    </div>
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="face-wrapper">
                  <div
                    className="face-counter invisible"
                    data-title-none="No one rated it like this"
                    data-title-one="One person rated it like this"
                    data-title-many="other people rated it like this"
                  ></div>
                  <input
                    className="rate-input hidden"
                    id="rate-4"
                    type="radio"
                    name="rating"
                    value="4"
                  />
                  <label
                    className="face grayscale face-love"
                    htmlFor="rate-4"
                    data-hint="OMG! I love it!"
                  >
                    <div className="eyes-wrapper">
                      <div className="eye">
                        <div className="pupil">
                          <div className="eyelid"></div>
                        </div>
                      </div>
                      <div className="eye">
                        <div className="pupil">
                          <div className="eyelid"></div>
                        </div>
                      </div>
                    </div>
                    <div className="mouth-wrapper">
                      <div className="mouth"></div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div
              className="faces-hint text-center text-gray"
              data-default-hint=""
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
const FeedBack = () => {
  return (
    <>
      <div
        className="flex justify-center items-center min-h-screen bg-cover"
        style={{
          backgroundImage: `url('https://i.ibb.co/MSvTc2G/Fast-Food-Modern-Banner-Landscape-2.png')`,
        }}
      >
        <div className="bg-opacity-70 md:mt-24 lg:mt-36 backdrop-blur-none p-8 rounded-xl shadow-lg w-96">
          <form className="lg:mx-auto md:ml-28   ">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Full name:
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Email or Phone number:
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="date"
                name="repeat_password"
                id="floating_repeat_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Date of visit
              </label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="floating_phone"
                  id="floating_phone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Amount:
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_company"
                  id="floating_company"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  {" "}
                  Guests:
                </label>
              </div>
            </div>
            <div>
              <h1 className="text-center text-xl text-blue-600">
                Overall rating?
              </h1>
            </div>
           
            <FaceRating />
            
            <button
              type="submit"
              className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-9 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FeedBack;
