import Banner from "@/componets/banner.client";
import Link from "next/link";

export default function Home() {
  const coffeeStoreId = "Dark Horse Coffee";
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gradientImg bg-no-repeat bg-cover">
      <Banner buttonText="View stores nearby" />
      <Link href={`/coffee-store/${coffeeStoreId}`}>Dark Horse Coffee</Link>
    </main>
  );
}
