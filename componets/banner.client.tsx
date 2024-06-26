"use client";
import Image from "next/image";
import Link from "next/link";

export default function Banner({ buttonText }: { buttonText: string }) {
  const handleOnClick = () => {
    console.log("hello");
  };
  return (
    <div className="m-12 grid lg:mb-24 lg:grid-cols-2 z-0">
      <div className="z-20 flex flex-col px-2 md:pt-12 mt-5">
        <h1 className="flex-wrap">
          <span className="pr-2 text-white">Coffee</span>
          <span className="text-gray-900">Me</span>
        </h1>
        <p className="font-sans text-xl font-semibold text-gray-900 md:mt-5 lg:text-2xl p-12">
          Discover the best coffee shops in town!
        </p>

        <div className="mt-20">
          <button onClick={handleOnClick}>
            <Link href={"/coffee-store"}>{buttonText}</Link>
          </button>
        </div>
      </div>
      <div className="top-2 z-10 md:top-0 md:mt-12 md:pl-10 md:pt-0 lg:right-1/4 lg:flex lg:pl-20">
        <Image
          src="/static/hero-image.png"
          width={800}
          height={300}
          alt="hero image"
          priority={true}
          style={{ position: "absolute" }}
        />
      </div>
    </div>
  );
}
