"use client"

import ProductList from "./components/product_list";
import { Button } from "@/components/ui/button";


export default function Produtos() {
  
  
  return (
    <main className="min-h-screen bg[#FAFBFB] text-white p-15">
      <h1 className="text-center text-4xl font-bold text-amber-600 mb-10 mt-16">
        Todos os produtos
      </h1>

      <ProductList />

      <div className="flex justify-center mt-8">
        <Button className="bg-transparent hover:bg-[#0B97E4] hover:text-white text-[#0B97E4] border-1 border-[#0B97E4] px-10 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105">
          Veja mais
        </Button>
      </div>
    </main>
  );
}