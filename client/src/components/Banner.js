import React from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const data = [
    "https://img.freepik.com/premium-photo/product-package-boxes-cart-with-shopping-bag-laptop-computer_38716-306.jpg?w=1380",
    "https://img.freepik.com/free-vector/online-shopping-concept-illustration-with-words-people_613284-2431.jpg?w=1480&t=st=1686393362~exp=1686393962~hmac=5fb3d84eec1fc8382d84b7b1aa0b8c8de0be3fc95eabf3b69be625680102ed0e",
    "https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?w=1380&t=st=1686393393~exp=1686393993~hmac=988c2f8df82fcc955c6e26f34ff5688cae8a97510ed5ab08adda669a65716ff5",
    "https://img.freepik.com/premium-psd/top-view-black-friday-concept-with-notebook_23-2148315091.jpg?w=1380",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };

  console.log(currentSlide);

  return (
    <div className="w-full h-full overflow-x-hidden">
      <div className="h-[650px] w-screen relative">
        <div
            style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400vw] h-full flex transition-transform duration-1000"
        >
          <img
            className="w-screen h-full object-cover"
            src={data[0]}
            alt="ImageOne"
            loading="priority"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[1]}
            alt="ImageTwo"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[2]}
            alt="ImageThree"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[3]}
            alt="ImageFour"
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-52">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
