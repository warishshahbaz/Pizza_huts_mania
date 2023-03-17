import { Button } from "antd";
import Image from "next/image";
import { AiOutlineInstagram } from "react-icons/ai";
import { TbBrandFacebook } from "react-icons/tb";
import { FiTwitter } from "react-icons/fi";
import { CiYoutube } from "react-icons/ci";

export default function Footer() {
  return (
    <>
      <div className=" bg-black flex justify-center ">
        <div className="w-[80%] flex mt-3 flex-col ">
          <div className="text-white flex justify-between w-[100%] ">
            <div className="  ">
              <h3 className="text-[12px]  font-semibold laptop:text-2xl ">
                Order Now
              </h3>
              <p className="text-[gray] hover:text-white cursor-pointer ">
                Deals
              </p>
              <p className="text-[gray] hover:text-white cursor-pointer ">
                Pizza
              </p>
              <p className="text-[gray] hover:text-white cursor-pointer ">
                Sides
              </p>
              <p className="text-[gray] hover:text-white cursor-pointer ">
                Drinks
              </p>
              <p className="text-[gray] hover:text-white cursor-pointer ">
                Desserts
              </p>
            </div>
            <div>
              <h3 className="text-[12px]  font-semibold laptop:text-2xl">
                About Us
              </h3>
              <p className="text-[gray] hover:text-white cursor-pointer ">
                About Us{" "}
              </p>
              <p className="text-[gray] hover:text-white cursor-pointer ">
                Contactless
              </p>
              <p className="text-[gray] hover:text-white cursor-pointer ">
                delivery
              </p>
              <p className="text-[gray] hover:text-white cursor-pointer ">
                Nutrition
              </p>
            </div>
            <div>
              <h3 className="text-[12px]  font-semibold laptop:text-2xl ">
                Our Policies
              </h3>
              <p className="text-[gray] hover:text-white cursor-pointer ">
                Privacy Terms & Conditions{" "}
              </p>
              <p className="text-[gray] hover:text-white cursor-pointer ">
                Responsible disclosure
              </p>
              <p className="text-[gray] hover:text-white cursor-pointer ">
                FAQs & Help
              </p>
            </div>
            <div>
              <h3 className="text-[12px]  font-semibold laptop:text-2xl ">
                Pizza Mania
              </h3>
              <p className="text-[gray] hover:text-white cursor-pointer ">
                Locate a store
              </p>
              <p className="text-[gray] hover:text-white cursor-pointer ">
                Global Blog
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5 ">
            <Image
              src="/img/appStore.png"
              alt="app_store"
              className=" tablet:w-[200px] w-[120px] "
              width={200}
              height={100}
              style={{ borderRadius: "12px" }}
            />
            <Image
              src="/img/googlePlay.png"
              alt="app_store"
              className=" tablet:w-[200px] w-[120px] "
              width={200}
              height={100}
              style={{ borderRadius: "12px" }}
            />
          </div>
          <div className="flex justify-between items-center laptop:flex-row flex-col ">
            <div className="flex text-white gap-3 items-center  ">
              <p className=" tablet:text-xl text-[9px] ">
                Help us in serving you better
              </p>
              <Button className=" bg-white  ">Give Feedback</Button>
            </div>
            <div className=" text-gray-400 tablet:text-3xl text-lg w-[30%] flex justify-center items-center flex-col gap-3 ">
              <h2>Follow Us</h2>
              <div className="text-gray-400  flex justify-evenly w-[100%] ">
                <AiOutlineInstagram className="hover:text-white cursor-pointer" />
                <TbBrandFacebook className="hover:text-white cursor-pointer" />
                <FiTwitter className="hover:text-white cursor-pointer" />
                <CiYoutube className="hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="flex justify-center text-gray-400 items-center  flex-col mt-3 ">
            <p className="text-center hover:text-white tablet:block hidden ">
              Order a delicious pizza on the go, anywhere, anytime. Pizza is
              happy to assist you with your home delivery. Every time you order,
              you get a hot and fresh pizza delivered at your doorstep in less
              than thirty minutes. *T&C Apply.
            </p>
            <p className="text-center hover:text-white  ">
              Hurry up and place your order now!
            </p>
            <p className="text-center hover:text-white  ">
              © 2023 Pizza Mania India. All rights reserved. License Number:
              100170146456456
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
