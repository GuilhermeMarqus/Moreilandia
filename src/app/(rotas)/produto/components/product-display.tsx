"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";


interface ProductDisplayProps {
  product: {
    id: string;
    name: string;
    condition: string;
    description: string;
    characteristics: string[];
    observations: string;
    includes: string;
    images: string[];
    apicultorImage: string;
    apicultorName: string;
    apicultorLocation: string;
    apicultorProductsCount: string;
    apicultorPhone: string;
    apicultorEmail: string;
    memberSince: string;
    apicultorId: string;
  };
}
const ProductDisplay: React.FC<ProductDisplayProps> = ({ product }) => {
  const router = useRouter()
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl mt-20">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Imagens do Produto */}
        <div className="w-full lg:w-1/2 flex max-md:flex-col-reverse max-lg:items-center gap-4">
          <div className="flex md:min-md:flex-col gap-2 pt-1">
            {product.images.map((image, index) => (
              <div
                key={index}
                className="relative w-[60px] h-[60px] bg-gray-100 rounded-lg overflow-hidden cursor-pointer border border-[#FACA7A]"
              >
                <Image
                  src="foto-produto.svg"
                  alt={`${product.name} - ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
          <div className="relative flex-1 h-120 w-120 rounded-lg overflow-hidden border-[#FACA7A]">
            <Image
              src="foto-produto.svg"
              alt={product.name}
              objectFit="cover"
              width={480}
              height={480}
            />
          </div>
        </div>

        {/* Detalhes do Produto */}
        <div className="w-full lg:w-1/2 p-4">
          <h3 className="text-gray-600 mb-2 text-base">
            Usado - Estado de <span className="font-semibold">novo</span>
          </h3>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-4 text-justify text-sm leading-relaxed">
            {product.description}
          </p>

          <h2 className="text-xl font-semibold mb-2">Características:</h2>
          <ul className="list-disc list-inside mb-4 pl-4 text-sm leading-relaxed">
            {product.characteristics.map((char, index) => (
              <li key={index} className="mb-1">
                {char}
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mb-2">Observações:</h2>
          <p className="text-gray-700 mb-6 text-justify text-sm leading-relaxed">
            {product.observations}
          </p>

          <p className="text-gray-700 mb-6 text-justify text-sm leading-relaxed">
            {product.includes}
          </p>

          <button className="text-green-600 border-1 border-green-600 hover:text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors flex items-center gap-2 mt-6">
            Peça já{" "}
            <Image src="/WhatsApp.svg" alt="WhatsApp" width={20} height={20} />
          </button>
        </div>
      </div>

      {/* Linha Divisória */}
      <div className="border-t border-[#FACA7A] my-8"></div>

      {/* Seção do Produtor */}
      <div className="mt-8 flex flex-col items-center w-full">
        <h2 className="text-2xl font-bold mb-6">Produtor</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 w-full max-w-7xl">
          <div className="relative w-28 h-28 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="Produtor 1.svg"
              alt={product.apicultorName}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold">{product.apicultorName}</h3>
            <p className="text-gray-600">{product.apicultorLocation}</p>
            <p className="text-gray-600">
              Produtos: {product.apicultorProductsCount}
            </p>
            <p className="text-gray-600 mb-4">
              Membro desde {product.memberSince}
            </p>
            <h4 className="text-lg font-semibold">Contatos</h4>
            <p className="text-gray-700">{product.apicultorPhone}</p>
            <p className="text-gray-700 mb-4">{product.apicultorEmail}</p>
            <Button 
            onClick={() => router.push(`/produtores/${product.apicultorId}`)}
            className="bg-transparent hover:bg-[#0B97E4] hover:text-white text-[#0B97E4] border-1 border-[#0B97E4] rounded-xl transition-all duration-300 hover:scale-105">
              Veja mais
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
