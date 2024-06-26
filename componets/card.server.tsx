import Image from "next/image";

type CardType = {
  name: string;
  imgURL: string;
  href: string;
};

export default function Card(props: CardType) {
  const { name, imgURL, href } = props;
  return (
    <div>
      <h3>{name}</h3>
      <Image src={imgURL} alt={name} width="200" height="200" />
      <button>
        <a href={href}>Check it out!</a>
      </button>
    </div>
  );
}
