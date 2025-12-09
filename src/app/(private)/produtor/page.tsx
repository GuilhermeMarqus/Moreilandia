"use client";

import Image from "next/image";
import { Search, PenLine, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react"; // Importar useState e useEffect
import axios from "axios"; // Importar axios

// Interface para os dados do produto
interface ProdutoData {
  id: number;
  nome: string;
  descricao: string;
  foto_produto: string; // Nome do arquivo da imagem
  produtorId: number;
  createdAt: string;
  updatedAt: string;
  foto_produto_url?: string; // Se a API retornar a URL completa diretamente
}

export default function ProdutorPage() {
  const router = useRouter();
  const [produtos, setProdutos] = useState<ProdutoData[]>([]); // Estado para armazenar os produtos
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [error, setError] = useState<string | null>(null); // Estado para erros
  const [search, setSearch] = useState(""); // Estado para a busca

  useEffect(() => {
    const fetchProdutos = async () => {
      setLoading(true);
      setError(null);
      const token = localStorage.getItem('token');

      if (!token) {
        setError("Token de autenticação não encontrado. Faça login novamente.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          "https://extensao-8-semestre-si-2025-2.onrender.com/api/produto",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProdutos(response.data);
      } catch (err: any) {
        console.error("Erro ao buscar produtos:", err);
        setError(err.response?.data?.message || "Erro desconhecido ao buscar produtos.");
      } finally {
        setLoading(false);
      }
    };

    fetchProdutos();
  }, []);

  const filteredProdutos = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex-1 p-8 bg-gray-100 min-h-screen flex items-center justify-center">
        <p>Carregando produtos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-1 p-8 bg-gray-100 min-h-screen flex items-center justify-center text-red-600">
        <p>Erro: {error}</p>
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-center w-auto">
        <h1 className="text-2xl font-bold mb-6">Todos os produtos</h1>
      </div>
      <div className="relative mb-6 w-full max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <Input 
          placeholder="Buscar" 
          className="pl-10 w-full" 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        {!loading && !error && filteredProdutos.length === 0 && (
          <p className="text-center text-gray-600">Nenhum produto encontrado.</p>
        )}
        {!loading && !error && filteredProdutos.map((produto) => (
          <Card key={produto.id} className="mb-6">
            <CardHeader>
              <div className="grid grid-cols-3 gap-4 font-semibold text-gray-700">
                <div>Nome</div>
                <div>ID</div>
                <div></div> {/* Ação */}
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 items-center py-2 px-4 rounded-md bg-gray-100 mb-2">
                <div className="flex items-center space-x-3">
                  <Image
                    src={produto.foto_produto_url || `https://extensao-8-semestre-si-2025-2.onrender.com/api/files/${encodeURIComponent(produto.foto_produto)}`}
                    alt={produto.nome}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <span>{produto.nome}</span>
                </div>
                <div>{produto.id}</div>
                <div className="flex justify-end space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="cursor-pointer"
                    onClick={() => router.push(`/produtor/cadastroprod/${produto.id}`)}
                  >
                    <PenLine className="h-4 w-4 cursor-pointer" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center space-x-4 mt-6">
        <Button
          variant="outline"
          onClick={() => router.push(`/produtor/cadastroprod`)}
        >
          Cadastrar
        </Button>
      </div>
    </>
  );
}
