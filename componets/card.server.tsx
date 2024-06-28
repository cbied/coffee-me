import Image from "next/image";
import Link from "next/link";

type CardType = {
  name: string;
  imgURL: string;
  href: string;
};

export default function Card(props: CardType) {
  const { name, imgURL, href } = props;
  return (
    <Link
      href={href}
      className="m-auto rounded-xl border-gray-400 shadow-2xl h-40"
      style={{ zIndex: "10", marginRight: "10px" }}
    >
      <div className={`glass rounded-xl backdrop-blur-3xl h-40`}>
        <h2 className="w-64 text-ellipsis whitespace-nowrap text-xl font-bold">
          {name}
        </h2>
        <div className="block ">
          <Image
            className="rounded-lg shadow-lg"
            src={imgURL}
            width={500}
            height={500}
            alt={"Coffee Store Image"}
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8/+ZNPQAIoQM4xp5zkgAAAABJRU5ErkJggg=="
            placeholder="blur"
            style={{ position: "relative" }}
          />
        </div>
      </div>
    </Link>
  );
}
