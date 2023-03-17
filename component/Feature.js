import { Button, Carousel } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import img1 from "../public/img/bgPizza1.jpeg";

export default function Feature({ result }) {
  const navigate = useRouter();
  console.log(result);
  const contentStyle = {
    width: "100vw",
    height: "87vh",
    color: "red",
    textAlign: "center",
    position: "relative",
    background: "#364d79",
  };
  const MoveToProducts = () => {
    navigate.push("/Products");
  };
  return (
    <>
      <div className=" h-[86vh] bg-red w-[100vw] ">
        <Carousel autoplay>
          <div className=" h-[86vh] bg-red w-[100vw] relative bg-[url('/img/bgPizza1.jpeg')] bg-no-repeat bg-center bg-cover ">
            <div className="flex justify-center items-center  flex-col text-white h-[100%] xl:mr-[72vw] ">
              <p className="text-3xl font-bold ">
                Hot & <span className="text-[yellowGreen] ">Spicy</span>
              </p>
              <h2 className="text-[8rem] font-bold text-red-500 ">Pizza</h2>
              <h1 className="text-5xl  ">-</h1>
              <p className="text-2xl font-bold ">50% Off</p>
              <Button
                onClick={MoveToProducts}
                style={{
                  backgroundColor: "#ff4d4f",
                  color: "white",
                  width: "170px",
                }}
              >
                Order Now
              </Button>
            </div>
          </div>
          <div className=" h-[86vh] bg-red w-[100vw] relative bg-[url('/img/bgPizza4.jpg')] bg-no-repeat bg-center bg-cover ">
            <div className="flex justify-center items-center  flex-col text-white h-[100%] xl:mr-[72vw] ">
              <p className="text-3xl font-bold ">
                Hot & <span className="text-[yellowGreen] ">Spicy</span>
              </p>
              <h2 className="text-[8rem] font-bold text-red-500 ">Pizza</h2>
              <h1 className="text-5xl  ">-</h1>
              <p className="text-2xl font-bold ">50% Off</p>
              <Button
                onClick={MoveToProducts}
                style={{
                  backgroundColor: "#ff4d4f",
                  color: "white",
                  width: "170px",
                }}
              >
                Order Now
              </Button>
            </div>
          </div>
          <div className=" h-[86vh] bg-red w-[100vw] relative bg-[url('/img/bgPizza5.jpg')] bg-no-repeat bg-center bg-cover ">
            <div className="flex justify-center items-center  flex-col text-white h-[100%] xl:mr-[72vw] ">
              <p className="text-3xl font-bold ">
                Hot & <span className="text-[yellowGreen] ">Spicy</span>
              </p>
              <h2 className="text-[8rem] font-bold text-red-500 ">Pizza</h2>
              <h1 className="text-5xl  ">-</h1>
              <p className="text-2xl font-bold ">50% Off</p>
              <Button
                onClick={MoveToProducts}
                style={{
                  backgroundColor: "#ff4d4f",
                  color: "white",
                  width: "170px",
                }}
              >
                Order Now
              </Button>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
}
