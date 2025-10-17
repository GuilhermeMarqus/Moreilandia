"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react"; // Importe o ícone do WhatsApp ou similar
import { useRouter } from "next/navigation";

interface ProductCardProps {
  imageSrc?: string;
  title: string;
  description: string;
  status?: string;
}

export default function ProductCard({
  imageSrc,
  title,
  description,
  status,
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
      {status && (
        <p className="text-gray-500 text-xs mb-4">
          Usado - <span className="font-semibold">{status}</span>
        </p>
      )}
      <div className="flex items-center justify-center gap-2 mt-auto">
        <Button className="bg-[#f6a51e] hover:bg-[#a36600] text-white px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300"
         onClick={() => router.push("/produto")}>
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
