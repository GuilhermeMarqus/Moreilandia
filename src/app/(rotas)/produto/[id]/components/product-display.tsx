"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import axios from "axios";

interface ProductDisplayProps {
  id: number; // Agora recebe apenas o ID do produto
}

interface Product {
  id: number;
  nome: string;
  descricao: string;
  foto_produto: string;
  produtorId: number;
  createdAt: string;
  updatedAt: string;
}

const ProductDisplay: React.FC<ProductDisplayProps> = ({ id }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://extensao-8-semestre-si-2025-2.onrender.com/api/produto/${id}`
        );
        setProduct(response.data);
      } catch (err) {
        setError("Erro ao carregar o produto.");
        console.error("Erro ao buscar produto:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="text-center text-amber-600">Carregando produto...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">{error}</div>;
  }

  if (!product) {
    return <div className="text-center text-gray-600">Produto não encontrado.</div>;
  }

  const imageUrl = `https://extensao-8-semestre-si-2025-2.onrender.com/files/${product.foto_produto}`;

  return (
    <div className="flex flex-col lg:flex-row bg-white p-6 rounded-lg shadow-md max-w-6xl mx-auto my-8">
      {/* Imagem Principal do Produto */}
      <div className="lg:w-1/2 flex justify-center items-center mb-6 lg:mb-0">
        <Image
          src={imageUrl}
          alt={product.nome}
          width={500}
          height={500}
          objectFit="contain"
          className="rounded-lg"
        />
      </div>

      {/* Detalhes do Produto */}
      <div className="lg:w-1/2 lg:pl-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.nome}</h1>
        <p className="text-gray-600 mb-4">{product.descricao}</p>
        <p className="text-sm text-gray-500 mb-4">Publicado em: {new Date(product.createdAt).toLocaleDateString()} {new Date(product.createdAt).toLocaleTimeString()}</p>

 

 

        {/* Botões de Ação */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button className="bg-[#f6a51e] hover:bg-[#a36600] text-white px-6 py-3 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105">
            Entrar em Contato
          </Button>
          <Button className="bg-[#0B97E4] hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105">
            Adicionar ao Carrinho
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
