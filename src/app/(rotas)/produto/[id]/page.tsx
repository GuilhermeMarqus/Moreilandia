'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useParams } from 'next/navigation';

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

  const searchParams = useSearchParams();
  const params = useParams();

  const produtoId = params.id as string;
  const produtorId = searchParams.get('produtorId');

  useEffect(() => {
    if (!produtoId || !produtorId) {
      setError('Produto ID ou Produtor ID não fornecidos.');
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://extensao-8-semestre-si-2025-2.onrender.com/api/produtor/${produtorId}/produto/${produtoId}`);
        if (!response.ok) {
          throw new Error(`Erro ao buscar produto: ${response.statusText}`);
        }
        const data: Product = await response.json();
        setProduct(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [produtoId, produtorId]);

  if (loading) {
    return <p>Carregando produto...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  if (!product) {
    return <p>Produto não encontrado.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{product.nome}</h1>
      <p className="text-lg mb-2">{product.descricao}</p>
      {product.foto_produto && (
        <img src={product.foto_produto} alt={product.nome} className="max-w-md h-auto rounded-lg shadow-md mb-4" />
      )}
      <p className="text-sm text-gray-500">Produtor ID: {product.produtorId}</p>
      <p className="text-sm text-gray-500">Criado em: {new Date(product.createdAt).toLocaleDateString()}</p>
      <p className="text-sm text-gray-500">Última atualização: {new Date(product.updatedAt).toLocaleDateString()}</p>
    </div>
  );
}
