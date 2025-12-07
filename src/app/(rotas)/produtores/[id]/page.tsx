"use client";

import React, { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import ProductCard from "@/app/(rotas)/lista-produtos/components/product-card";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";

interface Produtor {
  id: number;
  nome: string;
  biografia: string;
  foto_perfil: string;
  contato_whatsapp: string;
  contato_email: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
  foto_perfil_url: string;
  // Adicione a tipagem para a lista de produtos, se ela vier junto com os dados do produtor
  products?: Product[]; // Opcional, se a API retornar os produtos associados
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

export default function ProdutorPage() {
  const params = useParams();
  const produtorId = Number(params.id);

  const [produtor, setProdutor] = useState<Produtor | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProdutor = async () => {
      try {
        const response = await axios.get(
          `https://extensao-8-semestre-si-2025-2.onrender.com/api/produtor/${produtorId}`
        );
        setProdutor(response.data);
      } catch (err) {
        setError("Erro ao carregar o produtor.");
        console.error("Erro ao buscar produtor:", err);
      } finally {
        setLoading(false);
      }
    };

    if (!isNaN(produtorId)) {
      fetchProdutor();
    } else {
      setLoading(false);
      setError("ID do produtor inválido.");
    }
  }, [produtorId]);

  if (loading) {
    return <div className="text-center text-amber-600">Carregando produtor...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">{error}</div>;
  }

  if (!produtor) {
    return notFound();
  }

  return (
    <div className="h-full flex flex-col mt-15 max-w-3xl mx-auto justify-center p-10">
      <div className="w-full h-full flex max-md:flex-col md:flex-row items-center gap-4 text-center">
        <div className="flex flex-col items-center w-full">
          <Image
            src={produtor.foto_perfil_url}
            alt={produtor.nome}
            width={250}
            height={250}
            className="object-cover w-60 h-60 rounded-md"
          />
          <div className="flex flex-col items-start mt-4 border-t pt-4 text-gray-700">
            <h1 className="font-bold text-2xl">Contatos</h1>
            <p>
              <strong>Telefone:</strong> {produtor.contato_whatsapp}
            </p>
            <p>
              <strong>Email:</strong> {produtor.contato_email}
            </p>
          </div>
        </div>
        <div className="w-auto flex flex-col items-start justify-center p-6 gap-1 text-left">
          <h1 className="text-2xl font-bold">{produtor.nome}</h1>
          <p className="text-gray-600">{produtor.biografia}</p>
          <p className="text-gray-500 text-sm">
            Membro desde {new Date(produtor.createdAt).toLocaleDateString()}
          </p>
          {/* A API não retorna o número de produtos diretamente aqui, então removi. */}
          {/* Se a API for atualizada, podemos adicionar novamente. */}
          {/* <p>
            <strong>Produtos cadastrados:</strong> {produtor.products?.length || 0}
          </p> */}
          <article className="flex flex-col items-start">
            <h1 className="text-xl font-bold">Biografia:</h1>
            <p className="text-[16px] text-wrap text-left">{produtor.biografia}</p>
          </article>
        </div>
      </div>
      {produtor.products && produtor.products.length > 0 && (
        <section className="w-full flex flex-col items-center mt-10">
          <h2 className="text-3xl font-bold mb-6">Produtos do Produtor</h2>
          <div className="max-w-230 w-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {produtor.products.map((product) => (
              <ProductCard
                id={product.id}
                key={product.id}
                imageSrc={`https://extensao-8-semestre-si-2025-2.onrender.com/uploads/${product.foto_produto}`}
                title={product.nome}
                description={product.descricao}
                created={product.createdAt}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
