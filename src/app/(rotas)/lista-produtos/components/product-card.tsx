"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  id: number;
  imageSrc?: string;
  title: string;
  description: string;
  created?: string;
}

//colocar para ser puxado por ID

export default function ProductCard({
  id,
  imageSrc,
  title,
  description,
  created,
}: ProductCardProps) {

const router = useRouter();

  return (
    <div className="max-w-90 rounded-2xl shadow-lg p-3 flex flex-col items-center justify-between text-center border-1 border-amber-500">
      <div className="rounded-md mb-4 flex items-center justify-center overflow-hidden">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            width={160}
            height={160}
            objectFit="cover"
          />
        ) : (
          <div className="text-gray-500 text-sm">Sem imagem</div>
        )}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4 flex-grow text-wrap">{description}</p>
      {created && (
        <p className="text-gray-500 text-xs mb-4">
          Publicado em - <span className="font-semibold">{new Date(created).toLocaleDateString()} {new Date(created).toLocaleTimeString()}</span>
        </p>
      )}
      <div className="flex items-center justify-center gap-2 mt-auto">
        <Button className="bg-[#f6a51e] hover:bg-[#a36600] text-white px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300"
         onClick={() => router.push(`/produto/${id}`)}>
          Mais informações
        </Button>
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-600 transition"
        >
          <Image src="/WhatsApp.svg" alt="WhatsApp" width={30} height={30} />
        </a>
      </div>
    </div>
  );
}
