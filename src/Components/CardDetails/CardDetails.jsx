import { AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import ReactImageGallery from "react-image-gallery";

import "react-rater/lib/react-rater.css";

const CardDetails = () => {
    const productDetailItem = {
        images: [
          {
            original:
              "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
            thumbnail:
              "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
          },
          {
            original:
              "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600",
            thumbnail:
              "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600",
          },
          {
            original:
              "https://images.pexels.com/photos/2697787/pexels-photo-2697787.jpeg?auto=compress&cs=tinysrgb&w=600",
            thumbnail:
              "https://images.pexels.com/photos/2697787/pexels-photo-2697787.jpeg?auto=compress&cs=tinysrgb&w=600",
          },
          {
            original:
              "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            thumbnail:
              "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
          {
            original:
              "https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=600",
            thumbnail:
              "https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=600",
          },
        ],
        title: "BIG ITALIAN SOFA",
        
        availability: true,
        brand: "apex",
        category: "Sofa",
        sku: "BE45VGTRK",
        price: 450,
        previousPrice: 599,
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem exercitationem voluptate sint eius ea assumenda provident eos repellendus qui neque! Velit ratione illo maiores voluptates commodi eaque illum, laudantium non!",
      };
      const plusMinuceButton =
        "flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500";
      return (
        <section className=" custom-styles container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-10">
          {/* image gallery */}
          <div className="container mx-auto px-4">
            <ReactImageGallery
              showBullets={false}
              showFullscreenButton={false}
              showPlayButton={false}
              items={productDetailItem.images}
            />
    
            {/* /image gallery  */}
          </div>
          {/* description  */}
    
          <div className="mx-auto px-5 lg:px-5">
            <h2 className="pt-3 text-2xl font-bold lg:pt-0">
              {productDetailItem.title}
            </h2>
            <p className="mt-5 font-bold">
              Availability:{" "}
              {productDetailItem.availability ? (
                <span className="text-green-600">In Stock</span>
              ) : (
                <span className="text-red-600">Expired</span>
              )}
            </p>
            <p className="font-bold">
              Brand: <span className="font-normal">{productDetailItem.brand}</span>
            </p>
            <p className="font-bold">
              Category:{" "}
              <span className="font-normal">{productDetailItem.category}</span>
            </p>
           
            <p className="mt-4 text-4xl font-bold text-violet-900">
              ${productDetailItem.price}{" "}
              <span className="text-xs text-gray-400 line-through">
                ${productDetailItem.previousPrice}
              </span>
            </p>
            <p className="pt-5 text-sm leading-5 text-gray-500">
              {productDetailItem.description}
            </p>
            <div className="mt-6">
              <p className="pb-2 text-xs text-gray-500">Quantity</p>
              <div className="flex">
                <button className={`${plusMinuceButton}`}>−</button>
                <div className="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500">
                  1
                </div>
                <button className={`${plusMinuceButton}`}> +</button>
              </div>
            </div>
            <div className="mt-7 flex flex-row items-center gap-6">
              <button className=" button-card flex h-12 w-1/3 items-center justify-center bg-violet-900 text-white duration-100 hover:bg-blue-800">
                <BiShoppingBag className="mx-2" />
                Add to cart
              </button>
              <button className="flex h-12 w-1/3 items-center justify-center bg-amber-400 duration-100 hover:bg-yellow-300">
                <AiOutlineHeart className="mx-2" />
                Wishlist
              </button>
            </div>
          </div>
        </section>
      );
    };
export default CardDetails;