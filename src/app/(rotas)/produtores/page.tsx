"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import ProdutoresList from "./components/produtores_list";

export default function Produtores() {
  return (
    <main className="min-h-screen w-full bg[#FAFBFB] text-black p-15">
      <h1 className="text-center text-4xl font-bold text-amber-600 mb-10 mt-16">
        Todos os produtores
      </h1>
      <ProdutoresList />
      <div className="flex justify-center mt-8">
        <Button className="bg-transparent hover:bg-[#0B97E4] hover:text-white text-[#0B97E4] border-1 border-[#0B97E4] px-10 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105">
          Veja mais
        </Button>
      </div>
    </main>
  );
}
