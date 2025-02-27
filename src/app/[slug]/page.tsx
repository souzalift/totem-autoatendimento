import Image from "next/image";
import { notFound } from "next/navigation";

import { getRestaurantBySlug } from "@/data/get-restaurant-slug";

import ConsumptionMethodOption from "./components/consumption-method-option";

interface RestaurantPageProps {
  params: Promise<{ slug: string }>;
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {
  const { slug } = await params;
  const restaurant = await getRestaurantBySlug(slug);
  if (!restaurant) {
    return notFound;
  }
  return (
    <div className="flex h-screen flex-col items-center justify-center px-6 pt-24">
      {/* Adicionando a imagem e o nome do restaurante */}
      <div className="flex flex-col items-center gap-2">
        <Image
          src={restaurant?.avatarImageUrl}
          alt={restaurant?.name}
          width={82}
          height={82}
        />
        <h2 className="font-semibold">{restaurant?.name}</h2>
      </div>
      {/* Adicionando a descrição do restaurante */}
      <div className="space-y-2 pt-24 text-center">
        <h3 className="text2xl font-semibold"> Seja bem-vindo!</h3>
        <p className="opacity-55">
            Escolha como prefere fazer o seu pedido
          </p>
      </div>
      <div className="pt-14 grid grid-cols-2 gap-4">
      <ConsumptionMethodOption
        imageUrl="/dine_in.png"
        imageAlt="Comer Aqui"
        buttonText="Comer Aqui"
        option="DINE_IN"
      />
      <ConsumptionMethodOption
        imageUrl="/takeaway.png"
        imageAlt="Para Levar"
        buttonText="Para Levar"
        option="TAKEAWAY"
      />
      </div>
    </div>
  );
};

export default RestaurantPage;
