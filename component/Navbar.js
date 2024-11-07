import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { BiPhone } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function Navbar() {
  let router = useRouter();
  let noOfItem = useSelector((state) => state.cartItem).data.length;

  const moveToCart = () => {
    router.push("/Cart");
  };
  const moveToProducts = () => {
    router.push("/Products");
  };
  const moveToHome = () => {
    router.push("/");
  };
  return (
    <>
      <div
        className={` h-[70px] p-[0px 50px] bg-[#ff4d4f] flex justify-between items-center sticky `}
      >
        <div className={` flex-1 `}>
          <div className={` flex items-center ml-2 `}>
            <div className="bg-white w-[40px] h-[40px] rounded-[50%] flex justify-center items-center ">
              <BiPhone className="text-3xl " />
            </div>
            <div className="m-5 text-white min-w-fit  ">
              <h3
                onClick={moveToProducts}
                className="laptop:text-2xl text-[15px] laptop:font-bold cursor-pointer "
              >
                Order Here!
              </h3>
              <h5 className=" laptop:text-[1.2rem] text-[15px]  laptop:font-bold ">
                +856 535979
              </h5>
            </div>
          </div>
        </div>
        <div
          className={`tablet:flex-3  cursor-pointer tablet:block hidden `}
          id={styles.centerItem}
        >
          <ul className="flex justify-between items-center  cursor-pointer text-white ">
            <li
              onClick={moveToHome}
              className="text-xl capitalize font-semibold hover:text-gray-400 "
            >
              Home
            </li>
            <li className="text-5xl font-bold font-serif  ">Pizza</li>
            <li
              onClick={moveToProducts}
              className="text-xl capitalize font-semibold hover:text-gray-400 "
            >
              Product
            </li>
            <li className="text-xl capitalize font-semibold hover:text-gray-400 ">
              Blog
            </li>
            <li className="text-xl capitalize font-semibold hover:text-gray-400 ">
              Contact
            </li>
          </ul>
        </div>
        <div className={`flex-1 `}>
          <div className=" flex justify-center items-center text-center  ">
            <span className=" tablet:text-xl ">
              <BsCart3
                onClick={moveToCart}
                className="text-3xl text-white hover:text-gray-400 "
              />
            </span>

            <span className="text-[14px] rounded-[50%]  w-[20px] h-[20px] bg-white flex justify-center items-center relative bottom-4 ">
              {noOfItem}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
