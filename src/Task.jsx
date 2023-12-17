import { FaUser, FaClock, FaBook } from "react-icons/fa";
import image01 from "../src/assets/01.png";
import image02 from "../src/assets/02.png";
import image03 from "../src/assets/03.png";
const Task = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto mt-[234px] mb-56 gap-16">
        {/* First Card */}
        <div>
          <div className="hidden md:flex flex-col justify-center items-center">
            <h1 id="heading" className="text-2xl font-semibold ">
              When Course has
            </h1>
            <p className="text-2xl font-semibold">Discount</p>
          </div>
          <div className="w-full bg-base-100 shadow-xl rounded-xl mt-14">
            <figure>
              <img className="rounded-t-xl w-full" src={image01} />
            </figure>
            <div className="mt-[10px]">
              <h2 className="text-left ps-2 font-semibold text-2xl gap-[13.61px]">
                This Is One line Title
              </h2>
              <p className="text-left ps-2 pt-1 text-xl">
                Two line paragraph Lorem ipsum <br /> dolor sit amet,
                consectetur
              </p>
            </div>
            <div className="flex justify-between mx-2 pt-[10px] items-center">
              <p className="text-xl">$1050</p>
              <p className="primary text-xl font-semibold ">$750</p>
              <p className="color_Highlight rounded-full px-2 mr-3">
                You Save $250
              </p>
            </div>
            <hr className="my-[10px]" />
            <div className="pb-[10px] flex">
              <div className="icon flex items-center ms-2">
                <FaClock />
                <p className="ps-2">10 hrs</p>
              </div>
              <div className="icon flex items-center ms-3">
                <FaUser />
                <p className="ps-2">308</p>
              </div>
              <div className="icon flex items-center ms-3">
                <FaBook />
                <p className="ps-2">17</p>
              </div>
            </div>
          </div>
        </div>
        {/* Second Card */}
        <div>
          <div className="hidden md:flex flex-col justify-center items-center">
            <h1 id="heading" className="text-2xl font-semibold ">
              When Course has
            </h1>
            <p className="text-2xl font-semibold">No Discount</p>
          </div>
          <div className="w-full bg-base-100 shadow-xl rounded-xl mt-14">
            <figure>
              <img className="rounded-t-xl w-full" src={image02} />
            </figure>
            <div className="mt-[10px]">
              <h2 className="text-left ps-2 font-semibold text-2xl gap-[13.61px]">
                This Is One line Title
              </h2>
              <p className="text-left text-xl ps-2 pt-1">
                Two line paragraph Lorem ipsum <br /> dolor sit amet,
                consectetur
              </p>
            </div>
            <div className="flex justify-between mx-2 pt-[10px] items-center">
              <p className="primary text-xl font-semibold">$750</p>
            </div>
            <hr className="my-[10px]" />
            <div className="pb-[10px] flex">
              <div className="icon flex items-center ms-2">
                <FaClock />
                <p className="ps-2">10 hrs</p>
              </div>
              <div className="icon flex items-center ms-3">
                <FaUser />
                <p className="ps-2">308</p>
              </div>
              <div className="icon flex items-center ms-3">
                <FaBook />
                <p className="ps-2">17</p>
              </div>
            </div>
          </div>
        </div>
        {/* Third Card */}
        <div>
          <div className="hidden md:flex flex-col justify-center items-center">
            <h1 id="heading" className="text-2xl font-semibold ">
              When Course is
            </h1>
            <p className="text-2xl font-semibold">Free</p>
          </div>
          <div className="w-full bg-base-100 shadow-xl rounded-xl mt-14">
            <figure>
              <img className="rounded-t-xl w-full" src={image03} />
            </figure>
            <div className="mt-[10px]">
              <h2 className="text-left ps-2 font-semibold text-2xl gap-[13.61px]">
                This Is One line Title
              </h2>
              <p className="text-left text-xl ps-2 pt-1">
                Two line paragraph Lorem ipsum <br /> dolor sit amet,
                consectetur
              </p>
            </div>
            <div className="flex justify-between mx-2 pt-[10px] items-center">
              <p className="primary text-xl font-semibold ">FREE</p>
            </div>
            <hr className="my-[10px]" />
            <div className="pb-[10px] flex">
              <div className="icon flex items-center ms-2">
                <FaClock />
                <p className="ps-2">10 hrs</p>
              </div>
              <div className="icon flex items-center ms-3">
                <FaUser />
                <p className="ps-2">308</p>
              </div>
              <div className="icon flex items-center ms-3">
                <FaBook />
                <p className="ps-2">17</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
