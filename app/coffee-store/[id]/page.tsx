import React from "react";
import Link from "next/link";

interface PageProps {
  params: {
    id: string;
  };
}

const Page: React.FC<PageProps> = (props: { params: { id: string } }) => {
  const {
    params: { id },
  } = props;
  return (
    <div>
      <Link href="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default Page;
