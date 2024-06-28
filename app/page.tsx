import Banner from "@/componets/banner.client";
import Card from "@/componets/card.server";

export default function Home() {
  const coffeeStoreId = "Dark Horse Coffee";
  return (
    <main className="min-h-screen p-24">
      <Banner buttonText="View stores nearby" />
      <div className="mt-20">
        <h3 className="mt8 pb-8 text-4xl font-bold text-white">
          New York Stores
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-6">
          <Card
            name="Dark Horse Cofeee"
            href={`/coffee-store/${coffeeStoreId}`}
            imgURL="/static/hero-image.png"
          />
          <Card
            name="Dark Horse Cofeee"
            href={`/coffee-store/${coffeeStoreId}`}
            imgURL="/static/hero-image.png"
          />
          <Card
            name="Dark Horse Cofeee"
            href={`/coffee-store/${coffeeStoreId}`}
            imgURL="/static/hero-image.png"
          />
          <Card
            name="Dark Horse Cofeee"
            href={`/coffee-store/${coffeeStoreId}`}
            imgURL="/static/hero-image.png"
          />
          <Card
            name="Dark Horse Cofeee"
            href={`/coffee-store/${coffeeStoreId}`}
            imgURL="/static/hero-image.png"
          />
          <Card
            name="Dark Horse Cofeee"
            href={`/coffee-store/${coffeeStoreId}`}
            imgURL="/static/hero-image.png"
          />
        </div>
      </div>
    </main>
  );
}
