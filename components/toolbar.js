import { useRouter } from "next/router";
import Logo from "./images/index.jpeg";
import Image from "next/image";
export const Toolbar = () => {
  const router = useRouter();
  return (
    <div>
      <div className="">
        <Image src={Logo}></Image>
      </div>
      <div className="flex bg-red-600 py-[1.6%] pl-[20%]">
        <div
          onClick={() => router.push("/")}
          className="mr-10 font-verdana cursor-pointer"
        >
          Home
        </div>
        <div
          onClick={() => router.push("/feed/1")}
          className="mr-10 font-sans cursor-pointer"
        >
          Feed
        </div>
        <div
          onClick={() => router.push("/eom")}
          className="mr-10 font-sans cursor-pointer"
        >
          EOM
        </div>
      </div>
    </div>
  );
};
