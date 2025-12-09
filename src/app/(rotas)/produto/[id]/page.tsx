'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface Product {
  id: number;
  nome: string;
  descricao: string;
  foto_produto: string;
  produtorId: number;
  createdAt: string;
  updatedAt: string;
}

export default function ProductDetail() {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const params = useParams();
  const produtoId = params.id as string;

  useEffect(() => {
    if (!produtoId) {
      setError('Produto ID não fornecido.');
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      try {
        // Buscar todos os produtos usando axios
        const response = await axios.get(
          'https://extensao-8-semestre-si-2025-2.onrender.com/api/produto'
        );

        const products: Product[] = response.data;
        
        // Encontrar o produto com o ID correspondente
        const foundProduct = products.find((p) => p.id === parseInt(produtoId));

        if (!foundProduct) {
          throw new Error('Produto não encontrado.');
        }

        setProduct(foundProduct);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [produtoId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-600">Carregando produto...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <p className="text-red-600 mb-4">Erro: {error}</p>
          <Button onClick={() => router.back()}>Voltar</Button>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Produto não encontrado.</p>
          <Button onClick={() => router.back()}>Voltar</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 md:p-10">
      <Button 
        variant="outline" 
        onClick={() => router.back()} 
        className="mb-6"
      >
        ← Voltar
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Imagem do Produto */}
        <div className="flex justify-center items-start">
          {product.foto_produto ? (
            <div className="relative w-full h-96">
              <Image
                src={`https://extensao-8-semestre-si-2025-2.onrender.com/api/files/${product.foto_produto}`}
                alt={product.nome}
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          ) : (
            <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Imagem não disponível</p>
            </div>
          )}
        </div>

        {/* Informações do Produto */}
        <div className="flex flex-col justify-start">
          <h1 className="text-4xl font-bold mb-4">{product.nome}</h1>
          
          <p className="text-gray-700 text-lg mb-6">{product.descricao}</p>

          <div className="space-y-3 text-sm text-gray-600 mb-8">
            <p>
              <span className="font-semibold">ID do Produto:</span> {product.id}
            </p>
            <p>
              <span className="font-semibold">ID do Produtor:</span> {product.produtorId}
            </p>
            <p>
              <span className="font-semibold">Criado em:</span> {new Date(product.createdAt).toLocaleDateString('pt-BR')}
            </p>
            <p>
              <span className="font-semibold">Última atualização:</span> {new Date(product.updatedAt).toLocaleDateString('pt-BR')}
            </p>
          </div>

          <Button className="w-full md:w-auto bg-amber-500 hover:bg-amber-600 text-white">
            Entrar em contato com o produtor
          </Button>
        </div>
      </div>
    </div>
  );
}
