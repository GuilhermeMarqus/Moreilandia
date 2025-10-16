"use client"

import ProductCard from "./components/product-card";
import { Button } from "@/components/ui/button";


const products = [
  {
    id: 1,
    imageSrc: "/placeholder-image.svg", // Substitua com o caminho real da imagem
    title: "Cilindro alveolador doméstico",
    description:
      "Cilindro alveolador de cera de abelhas manual doméstico em resina de poliéster (a mesma usada na fabricação de lanchas) com alta resistência.",
    status: "Estado de novo",
  },
  {
    id: 2,
    imageSrc: "/placeholder-image.svg",
    title: "Cilindro alveolador doméstico",
    description:
      "Cilindro alveolador de cera de abelhas manual doméstico em resina de poliéster (a mesma usada na fabricação de lanchas) com alta resistência.",
    status: "Estado de novo",
  },
  {
    id: 3,
    imageSrc: "/placeholder-image.svg",
    title: "Cilindro alveolador doméstico",
    description:
      "Cilindro alveolador de cera de abelhas manual doméstico em resina de poliéster (a mesma usada na fabricação de lanchas) com alta resistência.",
    status: "Estado de novo",
  },
  {
    id: 4,
    imageSrc: "/placeholder-image.svg",
    title: "Cilindro alveolador doméstico",
    description:
      "Cilindro alveolador de cera de abelhas manual doméstico em resina de poliéster (a mesma usada na fabricação de lanchas) com alta resistência.",
    status: "Estado de novo",
  },
  {
    id: 5,
    imageSrc: "/placeholder-image.svg",
    title: "Cilindro alveolador doméstico",
    description:
      "Cilindro alveolador de cera de abelhas manual doméstico em resina de poliéster (a mesma usada na fabricação de lanchas) com alta resistência.",
    status: "Estado de novo",
  },
  {
    id: 6,
    imageSrc: "/placeholder-image.svg",
    title: "Cilindro alveolador doméstico",
    description:
      "Cilindro alveolador de cera de abelhas manual doméstico em resina de poliéster (a mesma usada na fabricação de lanchas) com alta resistência.",
    status: "Estado de novo",
  },
  {
    id: 7,
    imageSrc: "/placeholder-image.svg",
    title: "Cilindro alveolador doméstico",
    description:
      "Cilindro alveolador de cera de abelhas manual doméstico em resina de poliéster (a mesma usada na fabricação de lanchas) com alta resistência.",
    status: "Estado de novo",
  },
  {
    id: 8,
    imageSrc: "/placeholder-image.svg",
    title: "Cilindro alveolador doméstico",
    description:
      "Cilindro alveolador de cera de abelhas manual doméstico em resina de poliéster (a mesma usada na fabricação de lanchas) com alta resistência.",
    status: "Estado de novo",
  },
];

export default function Produtos() {
  
  
  return (
    <main className="min-h-screen w-full bg[#FAFBFB] text-white p-8">
      <h1 className="text-center text-4xl font-bold text-amber-600 mb-10 mt-16">
        Todos os produtos
      </h1>

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center mb-10">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button className="bg-transparent hover:bg-[#0B97E4] hover:text-white text-[#0B97E4] border-1 border-[#0B97E4] px-10 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
       >
          Veja mais
        </Button>
      </div>
    </main>
  );
}