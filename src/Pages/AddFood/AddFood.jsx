import React, { useState } from 'react';

import { SlArrowRight, } from "react-icons/sl";
import { BsUpload } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { Input } from 'postcss';




const AddFood = () => {


    const { register, handleSubmit, reset } = useForm();
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();


    // create a preview as a side effect, whenever selected file is changed
    const onSelectFile = (e) => {
        const files = e.target.files;

        if (!files || files.length === 0) {
            setSelectedFile(undefined);
            setPreview(undefined);
            return;
        }

        console.log("image file: ", files)
        const selectedImage = files[0];
        setSelectedFile(selectedImage);

        const objectUrl = URL.createObjectURL(selectedImage);
        setPreview(objectUrl);
    };

    console.log("preview:", preview)


    const onSubmit = async (data) => {
        const { bookType, bookCondition, whatYouWant, bookCategory, title, writer, language, pages, publisher, publicationYear, edition, price, owner, location, stockLimit, tags, awards, description, } = data;
        const imageFile = { image: data.image1[0] };

        //   const url = await axios.post(image_hosting_api, imageFile, {
        //     headers: {
        //       "content-type": "multipart/form-data",
        //     },
        //   });


        const image = url?.data?.data?.display_url || "";

        const newBook = {
            bookType,
            owner_email,
            bookCondition,
            whatYouWant,
            bookCategory,
            title,
            writer,
            language,
            pages,
            publisher,
            publicationYear,
            edition,
            price,
            cover_image: image,
            owner,
            location,
            stockLimit,
            tags,
            awards,
            description,
        };




    };




    function handleCheckboxSelection(selectedCheckboxId) {
        var checkboxes = document.getElementsByName('bank_payment');
        checkboxes.forEach(function (checkbox) {
            if (checkbox.id !== selectedCheckboxId) {
                checkbox.checked = false;
            }
        });
    }







    return (
        <div>
            <div className="min-h-screen mt-40 px-3 ">
                <div className="container mx-auto text-[#016961]">
                    <div className=" rounded-lg px-3">
                        <h1 className="text-2xl font-bold py-5 md:py-3 text-center md:text-start">
                            Billing details
                        </h1>

                        <form onSubmit={handleSubmit(onSubmit)}>


                            {/* book information and image div */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-4 md:space-y-4 my-6 md:gap-6">
                                {/* book information div */}
                                <div className=" col-span-2 rounded-lg h-full w-full px-2 pb-3">
                                    {/* title */}

                                    {/* information */}
                                    <div className="grid grid-cols-1 gap-3">
                                        {/* book title  name:title*/}
                                        <input
                                            className="h-10 w-full px-2  text-xs lg:text-sm bg-transparent border border-[#016961] rounded-lg focus:outline-none"
                                            {...register("name")}
                                            placeholder="Full Name"
                                            type="text"
                                            required
                                        />

                                        {/* book author  name:writer*/}
                                        <input
                                            className="h-10 w-full px-2  text-xs lg:text-sm bg-transparent border border-[#016961] rounded-lg focus:outline-none"

                                            {...register("email")}
                                            placeholder="Email"
                                            type="email"
                                            required
                                        />

                                        {/* book language  name:language*/}
                                        <select
                                            className="h-10 w-full px-2  text-xs lg:text-sm bg-transparent border border-[#016961] text-gray-400 rounded-lg focus:outline-none"
                                            {...register("food")}
                                        >
                                            <option selected value="">
                                                Select Food
                                            </option>
                                            <option value="fizza">Fizza</option>
                                            <option value="barger">Barger</option>
                                            <option value="faluda">Faluda</option>
                                        </select>





                                        <div className=" flex items-center gap-4 ">

                                            <input
                                                className="h-10 w-full px-2 text-xs lg:text-sm bg-transparent border border-[#016961] rounded-lg focus:outline-none"

                                                {...register("city")}
                                                placeholder="city"
                                                type="text"
                                                required
                                            />


                                            <input
                                                className="h-10 w-full px-2 text-xs lg:text-sm bg-transparent border border-[#016961] rounded-lg focus:outline-none"

                                                {...register("satate")}
                                                placeholder=" State "
                                                type="text"
                                                required
                                            />
                                        </div>
                                        <div className=" flex items-center gap-4 ">

                                            <input
                                                className="h-10 w-full px-2 text-xs lg:text-sm bg-transparent border border-[#016961] rounded-lg focus:outline-none"

                                                {...register("post_code")}
                                                placeholder="Post_Code"
                                                type="number"
                                                required
                                            />


                                            <input
                                                className="h-10 w-full px-2 text-xs lg:text-sm bg-transparent border border-[#016961] rounded-lg focus:outline-none"

                                                {...register("phone_number")}
                                                placeholder="Phone Number "
                                                type="number"
                                                required
                                            />
                                        </div>

                                        <textarea
                                            className=" p-2 text-xs lg:text-sm bg-transparent border-2 border-[#016961] rounded-lg focus:outline-none"

                                            {...register("description")}
                                            placeholder=" Food Description"
                                            cols="30"
                                            rows="10"
                                            required
                                        ></textarea>

                                    </div>


                                </div>

                                {/* image div */}


                                <div className=" border-2 md:col-span-2 lg:col-span-1 bg-red-600 border-red-300 rounded-lg h-full w-full px-10 ">

                                    <h3 className=" text-white font-bold  py-4 text-2xl px-  ">Cart Total</h3>

                                    <div

                                        className="w-full h-[180px] border text-gray-700 bg-white rounded-lg "
                                    >

                                        <div className='px-8 py-4 flex items-center justify-between text-gray-700 '>
                                            <h1 className='text-xl font-semibold  '>Sub Total :  </h1>
                                            <h1 className='text-xl font-semibold '> $290.00  </h1>
                                        </div>
                                        <div className='px-8 py-4 flex items-center justify-between text-gray-700 '>
                                            <h1 className='text-xl font-semibold  '> Shipping :  </h1>
                                            <h1 className='text-xl font-semibold '> Free  </h1>
                                        </div>

                                        <div className=' py-4 flex items-center text-white justify-between bg-red-600 h-14 w-[98%] mx-auto rounded-md  '>
                                            <h1 className='text-xl font-semibold px-8 '> Total :  </h1>
                                            <h1 className='text-xl font-semibold px-8'> $290.00 </h1>
                                        </div>

                                    </div>




                                    <div className=" text-white font-bold  py-4 text-2xl  " >
                                        <h1>Payment Method</h1>
                                    </div>

                                    <div className=" text-white font-bold  py-4 text-2xl
                                    ">
                                        <div>
                                            <input type="checkbox" id="bank_payment1" name="bank_payment1" />
                                            <label for="bank_payment1" class="inline-block cursor-pointer">Bank Payment</label>

                                        </div>
                                        <div>
                                            <input type="checkbox" id="bank_payment2" name="bank_payment2" />
                                            <label for="bank_payment2" class="inline-block cursor-pointer">Bank Payment</label>
                                        </div>
                                        <div>
                                            < input type="checkbox" id="bank_payment3" name="bank_payment3" />
                                            <label for="bank_payment3" class="inline-block cursor-pointer">Bank Payment</label>
                                        </div>
                                        <div>
                                            < input type="checkbox" id="bank_payment3" name="bank_payment3" />
                                            <label for="bank_payment3" class="inline-block cursor-pointer">Bank Payment</label>
                                        </div>

                                        <div className=' text-red-500 bg-white w-1/2 mt-4 py-2  rounded-md  '>
                                            <button className='px-8 '> Order Now  </button>
                                        </div>
                                    </div>




                                </div>



                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AddFood;