"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


const produtores = [
  {
    id: 1,
    nome: "Francisco Ferreira Filho Florêncio",
    cidade: "Moreilândia",
    estado: "Pernambuco",
    produtos: 1,
    membroDesde: 2025,
    telefone: "87 9 9999-9999",
    email: "produtor@email.com",
    foto: "/images/francisco.jpg", // adicione a imagem em public/images
  },
  {
    id: 2,
    nome: "João Silva",
    cidade: "Juazeiro do Norte",
    estado: "Ceará",
    produtos: 0,
    membroDesde: 2025,
    telefone: "87 9 9999-9999",
    email: "produtor@email.com",
    foto: "/images/default-user.png",
  },
  {
    id: 3,
    nome: "Maria Pereira",
    cidade: "Cajazeiras",
    estado: "Pernambuco",
    produtos: 3,
    membroDesde: 2025,
    telefone: "87 9 9999-9999",
    email: "produtor@email.com",
    foto: "/images/default-user.png",
  },
];

export default function Produtores() {
  
  
  return (
    <main className="min-h-screen w-full bg[#FAFBFB] text-white p-8">
      <h1 className="text-center text-4xl font-bold text-amber-600 mb-10 mt-16">
        Todos os produtos
      </h1>
        <div className="max-w-5xl mx-auto p-6 space-y-6">
      {produtores.map((produtor) => (
        <div
          key={produtor.id}
          className="flex flex-col md:flex-row items-center justify-between border border-yellow-200 rounded-xl p-5"
        >
          <div className="flex items-center gap-4">
            <Image
              src={produtor.foto}
              alt={produtor.nome}
              width={100}
              height={100}
              className="rounded-full object-cover w-24 h-24"
            />
            <div>
              <h2 className="text-xl font-bold">{produtor.nome}</h2>
              <p className="text-gray-600">
                {produtor.cidade} - {produtor.estado}
              </p>
              <p className="text-sm text-gray-500">
                Produtos: {produtor.produtos}
              </p>
              <p className="text-sm text-gray-500">
                Membro desde {produtor.membroDesde}
              </p>
            </div>
          </div>

          <div className="text-center md:text-right mt-4 md:mt-0">
            <h3 className="font-semibold">Contatos</h3>
            <p>{produtor.telefone}</p>
            <p>{produtor.email}</p>
            <Link
              href={`/produtores/${produtor.id}`}
              className="mt-2 inline-block bg-blue-50 text-blue-500 px-4 py-2 rounded-full border border-blue-200 hover:bg-blue-100 transition"
            >
              Ver mais
            </Link>
          </div>
        </div>
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